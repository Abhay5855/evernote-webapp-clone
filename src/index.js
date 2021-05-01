import { StrictMode } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyAELfdJtouh953hkDwlsiS6c11LgvWEDLo",
  authDomain: "evernote-clone-ce765.firebaseapp.com",
  projectId: "evernote-clone-ce765",
  storageBucket: "evernote-clone-ce765.appspot.com",
  messagingSenderId: "1021030373435",
  appId: "1:1021030373435:web:4504c07b0f8978d7c5641e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
