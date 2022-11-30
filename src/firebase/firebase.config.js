// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXVOXSIKx8YQlzQSfS1hsZXldMoASsixQ",
  authDomain: "old-store-client.firebaseapp.com",
  projectId: "old-store-client",
  storageBucket: "old-store-client.appspot.com",
  messagingSenderId: "304455803696",
  appId: "1:304455803696:web:78936cc75f6afbef0d9ef5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
