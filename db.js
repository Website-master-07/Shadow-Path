'use strict';
// =====================================================
//  ShadowPath — Firestore Database Layer
//  All real-time reads/writes go through this file
// =====================================================

function db() { return firebase.firestore(); }

// ──────────────────────────────────────────────────
//  PROFESSIONALS
// ──────────────────────────────────────────────────

/** Save a professional profile (keyed by auth uid) */
function dbSavePro(uid, data) {
  const docRef = db().collection('professionals').doc(uid);
  return docRef.get().then(snap => {
    const payload = {
      ...data,
      uid,
      approved: true,   // auto-approve for now; set false to require moderation
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    // Only set createdAt on first write
    if (!snap.exists) {
      payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    }
    return docRef.set(payload, { merge: true });
  });
}

/** Real-time listener — calls callback(array) whenever professionals change */
function dbListenPros(callback) {
  return db().collection('professionals')
    .where('approved', '==', true)
    .onSnapshot(
      snap => callback(snap.docs.map(d => ({ ...d.data(), firestoreId: d.id }))),
      err  => console.error('dbListenPros:', err)
    );
}

// ──────────────────────────────────────────────────
//  SHADOW REQUESTS
// ──────────────────────────────────────────────────

/** Create a new shadow request — returns Promise<docRef> */
function dbSaveRequest(data) {
  return db().collection('requests').add({
    ...data,
    status:    'pending',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

/** Real-time listener for a user's requests (student or pro) */
function dbListenRequests(uid, role, callback) {
  const field = role === 'pro' ? 'proUid' : 'studentUid';
  // Note: no orderBy here — avoids requiring a composite Firestore index.
  // We sort client-side after receiving results instead.
  return db().collection('requests')
    .where(field, '==', uid)
    .onSnapshot(
      snap => {
        const docs = snap.docs.map(d => ({ ...d.data(), id: d.id }));
        // Sort newest first client-side
        docs.sort((a, b) => {
          const ta = a.createdAt?.toMillis?.() || new Date(a.createdAt || 0).getTime();
          const tb = b.createdAt?.toMillis?.() || new Date(b.createdAt || 0).getTime();
          return tb - ta;
        });
        callback(docs);
      },
      err => console.error('dbListenRequests:', err)
    );
}

/** Update request status (accepted / declined) */
function dbUpdateRequest(requestId, updates) {
  return db().collection('requests').doc(requestId).update(updates);
}

// ──────────────────────────────────────────────────
//  MESSAGES  (subcollection under each request)
// ──────────────────────────────────────────────────

/** Add a message to a request thread */
function dbSendMessage(requestId, msg) {
  return db().collection('requests').doc(requestId)
    .collection('messages').add({
      ...msg,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

/** Real-time listener for a request's message thread */
function dbListenMessages(requestId, callback) {
  return db().collection('requests').doc(requestId)
    .collection('messages')
    .orderBy('time', 'asc')
    .onSnapshot(
      snap => callback(snap.docs.map(d => ({ ...d.data(), id: d.id }))),
      err  => console.error('dbListenMessages:', err)
    );
}

// ──────────────────────────────────────────────────
//  STUDENT PROFILES
// ──────────────────────────────────────────────────

/** Save / update a student profile */
function dbSaveStudent(uid, data) {
  return db().collection('students').doc(uid).set(data, { merge: true });
}

/** Load a student profile once */
function dbLoadStudent(uid) {
  return db().collection('students').doc(uid).get()
    .then(d => d.exists ? d.data() : null);
}
