// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtNGn_OC4wOhRJX42wZW0bhU_LMC738uk",
  authDomain: "devine-app-52684.firebaseapp.com",
  projectId: "devine-app-52684",
  storageBucket: "devine-app-52684.appspot.com",
  messagingSenderId: "23610724467",
  appId: "1:23610724467:web:04d14a62f03d5c45091a06",
  measurementId: "G-37ZKWGS6D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);