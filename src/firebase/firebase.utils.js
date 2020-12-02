import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGLhg6f4LX5g8Wi3usQQF5unvWfsVQwTc',
  authDomain: 'crwn-db-f6746.firebaseapp.com',
  databaseURL: 'https://crwn-db-f6746.firebaseio.com',
  projectId: 'crwn-db-f6746',
  storageBucket: 'crwn-db-f6746.appspot.com',
  messagingSenderId: '1000578680155',
  appId: '1:1000578680155:web:9bbab80404ac238887467e',
  measurementId: 'G-LWHZ0LX24S',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
