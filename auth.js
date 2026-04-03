// =====================================================
//  ShadowPath Authentication Module
//  Supports: Firebase (real Google login) + Demo Mode
//
//  SETUP — to enable real Google + Email login:
//  1. Go to https://console.firebase.google.com
//  2. Click "Add project" → name it "shadowpath"
//  3. Go to Project Settings → "Your apps" → Web (</>)
//  4. Register the app, copy the firebaseConfig below
//  5. Go to Authentication → Sign-in method →
//       Enable "Google" and "Email/Password"
//  6. Add your domain to Authorized Domains
//
//  Until then, Demo Mode works out of the box ✓
// =====================================================

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6ubvmGd_zUMIhy4NILXWvcB-sfJ79L_4",
  authDomain: "shadowpath-8c4b2.firebaseapp.com",
  projectId: "shadowpath-8c4b2",
  storageBucket: "shadowpath-8c4b2.firebasestorage.app",
  messagingSenderId: "59160381936",
  appId: "1:59160381936:web:959544ad1d68a7fbed3535",
  measurementId: "G-ZQGKZQXLM0"
};

// Auto-detect if Firebase is configured
const FIREBASE_READY = !FIREBASE_CONFIG.apiKey.startsWith('REPLACE');

// ──────────────────────────────────────────────────
//  FIREBASE MODE
// ──────────────────────────────────────────────────
let _firebaseAuth = null;

function initFirebase() {
  if (!FIREBASE_READY || _firebaseAuth) return;
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    _firebaseAuth = firebase.auth();
  } catch(e) {
    console.error('Firebase init failed:', e);
  }
}

// ──────────────────────────────────────────────────
//  DEMO MODE — no setup needed
// ──────────────────────────────────────────────────
const DEMO_USERS = [
  { uid:'demo-1', name:'Alex Johnson',       email:'alex.johnson@gmail.com',       photoURL:'', role:'student' },
  { uid:'demo-2', name:'Jordan Smith',        email:'jordan.smith@gmail.com',        photoURL:'', role:'student' },
  { uid:'demo-3', name:'Taylor Williams',     email:'taylor.w@gmail.com',            photoURL:'', role:'student' },
  { uid:'demo-pro', name:'Dr. Emily Richardson', email:'emily.r@gmail.com',          photoURL:'', role:'pro'     },
];

let _authListeners = [];
let _currentUser   = null;

function _loadDemoUser() {
  try {
    const saved = localStorage.getItem('sp_auth_user');
    if (saved) _currentUser = JSON.parse(saved);
  } catch(e) {}
}
function _saveDemoUser(user) {
  _currentUser = user;
  if (user) localStorage.setItem('sp_auth_user', JSON.stringify(user));
  else       localStorage.removeItem('sp_auth_user');
  _authListeners.forEach(fn => fn(user));
}
_loadDemoUser();

// ──────────────────────────────────────────────────
//  PUBLIC API
// ──────────────────────────────────────────────────

/** Returns current user or null */
function authGetCurrentUser() {
  if (FIREBASE_READY && _firebaseAuth) return _firebaseAuth.currentUser;
  return _currentUser;
}

/** Subscribe to auth state changes.  callback(user|null) */
function authOnChange(callback) {
  if (FIREBASE_READY && _firebaseAuth) {
    _firebaseAuth.onAuthStateChanged(u => callback(u ? normalizeFirebaseUser(u) : null));
    return;
  }
  _authListeners.push(callback);
  // Fire immediately with current state
  callback(_currentUser);
}

/** Sign in with Google popup */
async function authSignInWithGoogle() {
  if (FIREBASE_READY && _firebaseAuth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result   = await _firebaseAuth.signInWithPopup(provider);
    return normalizeFirebaseUser(result.user);
  }
  // Demo: show account picker (handled in login.html)
  return new Promise(resolve => {
    window._demoGoogleResolve = resolve;
    document.getElementById('google-picker')?.classList.remove('hidden');
  });
}

/** Sign in with email + password */
async function authSignInWithEmail(email, password) {
  if (FIREBASE_READY && _firebaseAuth) {
    const result = await _firebaseAuth.signInWithEmailAndPassword(email, password);
    return normalizeFirebaseUser(result.user);
  }
  // Demo: look up stored account
  const accounts = getDemoAccounts();
  const match    = accounts.find(a => a.email === email && a.password === password);
  if (!match) throw new Error('No account found with that email and password.');
  const user = { uid: match.uid, name: match.name, email: match.email, photoURL: '', role: match.role };
  _saveDemoUser(user);
  return user;
}

/** Create account with email + password */
async function authCreateAccount(name, email, password, role) {
  if (FIREBASE_READY && _firebaseAuth) {
    const result = await _firebaseAuth.createUserWithEmailAndPassword(email, password);
    await result.user.updateProfile({ displayName: name });
    const user   = normalizeFirebaseUser(result.user);
    user.role    = role;
    user.name    = name;
    return user;
  }
  // Demo: store new account
  const accounts = getDemoAccounts();
  if (accounts.find(a => a.email === email)) throw new Error('An account with this email already exists.');
  const user = { uid: 'demo-' + Date.now(), name, email, password, photoURL: '', role };
  // Note: password stored in demo accounts for local sign-in matching only (no real Firebase)
  accounts.push(user);
  saveDemoAccounts(accounts);
  const sessionUser = { uid: user.uid, name, email, photoURL: '', role };
  _saveDemoUser(sessionUser);
  return sessionUser;
}

/** Sign out */
async function authSignOut() {
  if (FIREBASE_READY && _firebaseAuth) {
    await _firebaseAuth.signOut();
    return;
  }
  _saveDemoUser(null);
}

/** Pick a demo Google account (called from UI) */
function demoPickGoogleAccount(uid) {
  const user = DEMO_USERS.find(u => u.uid === uid);
  if (!user) return;
  const sessionUser = { uid: user.uid, name: user.name, email: user.email, photoURL: '', role: user.role };
  _saveDemoUser(sessionUser);
  if (window._demoGoogleResolve) {
    window._demoGoogleResolve(sessionUser);
    window._demoGoogleResolve = null;
  }
  document.getElementById('google-picker')?.classList.add('hidden');
}

// ──────────────────────────────────────────────────
//  HELPERS
// ──────────────────────────────────────────────────

function normalizeFirebaseUser(u) {
  return { uid: u.uid, name: u.displayName || u.email.split('@')[0], email: u.email, photoURL: u.photoURL || '', role: 'student' };
}

function getDemoAccounts() {
  try { return JSON.parse(localStorage.getItem('sp_demo_accounts') || '[]'); } catch(e) { return []; }
}
function saveDemoAccounts(arr) {
  localStorage.setItem('sp_demo_accounts', JSON.stringify(arr));
}

// Boot Firebase if configured
if (FIREBASE_READY) {
  if (typeof firebase !== 'undefined') initFirebase();
  else window.addEventListener('load', initFirebase);
}
