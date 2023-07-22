import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";
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
  measurementId: "G-0TB3LF3F3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//GOOGLE SIGN IN
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();
const googleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const aToken = credential.accessToken;
      const idToken = credential.idToken;
      // The signed-in user info.
      const user = result.user;

      

      // const navigate = useNavigate();

      // const handleClick = () => {
      //   navigate("/dashboard");
      // };

      console.log(idToken);

      try {
        const response = fetch(
          "https://alumniproject.azurewebsites.net/api/alumnis/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: idToken }),
          }
        );

        if (response.ok) {
          // const jsonData = await response.json();
          // console.log(jsonData.items);
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("apitoken", response.body);
            // console.log(response.body);
          } else {
            console.error("Can't save to local storage");
          }
        } else {
          console.error("Error:", response);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
    return (
  <div></div>
);
};

// FACEBOOK SIGN IN
const fbProvider = new FacebookAuthProvider();
const facebookSignIn = () => {
  signInWithPopup(auth, fbProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {});
};

export { googleSignIn, facebookSignIn };
