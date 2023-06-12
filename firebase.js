// Firebase app configuraton


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyA7LSyq3gk2lYrojHBD0KTRaOXMW7YU8a0",
    authDomain: "pronia-group-project.firebaseapp.com",
    databaseURL: "https://pronia-group-project-default-rtdb.firebaseio.com",
    projectId: "pronia-group-project",
    storageBucket: "pronia-group-project.appspot.com",
    messagingSenderId: "990538353593",
    appId: "1:990538353593:web:ec74cdc2b09282ef0f8468"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
