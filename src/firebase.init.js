import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCss8szT43_-WdpjpxxBrQOLmv8Pl1fEc",
  authDomain: "genius-car-service-e22b7.firebaseapp.com",
  projectId: "genius-car-service-e22b7",
  storageBucket: "genius-car-service-e22b7.appspot.com",
  messagingSenderId: "747493713329",
  appId: "1:747493713329:web:b17c399a94e5d9b0b60990"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;