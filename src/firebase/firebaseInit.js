import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoulh-ji02U1s_jtAyknjkgF_CTHXTDiU",
  authDomain: "blogger-vuejs.firebaseapp.com",
  projectId: "blogger-vuejs",
  storageBucket: "blogger-vuejs.appspot.com",
  messagingSenderId: "340865961091",
  appId: "1:340865961091:web:864ea33e1b628221615fb6",
  measurementId: "G-SRJLMW7SP5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
