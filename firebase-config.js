const firebaseConfig = {
    apiKey: "AIzaSyDgYruN_oYNoF4_-7465Jq0OFzZrgVG0VY",
    authDomain: "mini-messenger-selov.firebaseapp.com",
    projectId: "mini-messenger-selov",
    storageBucket: "mini-messenger-selov.firebasestorage.app",
    messagingSenderId: "315254411733",
    appId: "1:315254411733:web:ce7dee254b5b1a61c0ad5c"
};

const IMGBB_API_KEY = "cc022c833a3c90d9d7014ad188cf7de4";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

db.settings({
    timestampsInSnapshots: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

db.enablePersistence({
    synchronizeTabs: true
}).catch((err) => {
    if (err.code == 'failed-precondition') {
        console.log('Persistence failed: Multiple tabs open');
    } else if (err.code == 'unimplemented') {
        console.log('Persistence not supported');
    }
});

provider.setCustomParameters({
    prompt: 'select_account'
});

console.log('✅ Firebase initialized successfully!');
console.log('📁 Project:', firebaseConfig.projectId);
