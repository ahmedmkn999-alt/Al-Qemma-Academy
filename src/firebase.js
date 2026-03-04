import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGs1cxv9fmftPN9YXmymgeLJj-evUIqH4",
  authDomain: "talem-2f45e.firebaseapp.com",
  projectId: "talem-2f45e",
  storageBucket: "talem-2f45e.firebasestorage.app",
  messagingSenderId: "312608229225",
  appId: "1:312608229225:web:6f553983748c6efb129ff8",
  measurementId: "G-71TH9LW9DN"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
