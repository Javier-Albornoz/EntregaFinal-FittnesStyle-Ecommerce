

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBoULO2vKMW2pdLYohijHfGrB_fv36ViwA",
  authDomain: "fitnesstyle-eccomerce.firebaseapp.com",
  projectId: "fitnesstyle-eccomerce",
  storageBucket: "fitnesstyle-eccomerce.appspot.com",
  messagingSenderId: "944065262007",
  appId: "1:944065262007:web:ada92aa406af5d230c7832"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}