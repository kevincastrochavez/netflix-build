import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA25lj2Lrioj9UieLlqme9GvPmmivi14Uw",
  authDomain: "netflix-build-kcc.firebaseapp.com",
  projectId: "netflix-build-kcc",
  storageBucket: "netflix-build-kcc.appspot.com",
  messagingSenderId: "726039258931",
  appId: "1:726039258931:web:3eb9204b0229d124370046",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default firestore;
