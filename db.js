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
  return db().collection('professionals').doc(uid).set({
    ...data,
    uid,
    approved: true,   // auto-approve for now; set false to require moderation
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });
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
  return db().collection('requests')
    .where(field, '==', uid)
    .orderBy('createdAt', 'desc')
    .onSnapshot(
      snap => callback(snap.docs.map(d => ({ ...d.data(), id: d.id }))),
      err  => console.error('dbListenRequests:', err)
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
