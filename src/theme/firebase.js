import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then(r => afterAction(null));
};

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    .then(result => {
      saveData(result.user)
    })
    .catch(err => {
      console.error(err.message); 
    });
  } catch (err) {
    console.error(err); 
  }
};

export const signUpWithEmail = async(email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      saveData(result.user)
    })
    .catch(err => {
      console.error(err.message); 
    });
  } catch (error) {
    console.error(error);
  }
}


export const signInWithEmail = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      saveData(result.user)
    })
    .catch(err => {
      console.error(err.message); 
    });
  } catch (error) {
    console.error(error)
  }
}

export const saveData = async(user) => {
  // save user in DB
    fetch(`https://my-website-api.vercel.app/user/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

}
