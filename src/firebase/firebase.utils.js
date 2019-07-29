import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHiR6_tpF2KuOd7rLlYsDQJKhUFd-_V3o",
  authDomain: "crwn-db-a165d.firebaseapp.com",
  databaseURL: "https://crwn-db-a165d.firebaseio.com",
  projectId: "crwn-db-a165d",
  storageBucket: "",
  messagingSenderId: "115895765057",
  appId: "1:115895765057:web:e2ef249ba1e8b25b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;