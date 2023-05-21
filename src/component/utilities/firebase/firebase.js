// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACN477BR1rv8xcv-dNRCPKC3_LlafjnFg",
  authDomain: "school-alumni-swd.firebaseapp.com",
  projectId: "school-alumni-swd",
  storageBucket: "school-alumni-swd.appspot.com",
  messagingSenderId: "965481444328",
  appId: "1:965481444328:web:eec99358e7b11e5731aa5d",
  measurementId: "G-0TB3LF3F3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);