import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoULO2vKMW2pdLYohijHfGrB_fv36ViwA",
  authDomain: "fitnesstyle-eccomerce.firebaseapp.com",
  projectId: "fitnesstyle-eccomerce",
  storageBucket: "fitnesstyle-eccomerce.appspot.com",
  messagingSenderId: "944065262007",
  appId: "1:944065262007:web:ada92aa406af5d230c7832"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
