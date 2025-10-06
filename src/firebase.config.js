import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNOzqjLE8XV99UX93tWY6v2zzaY4BqnlQ",
  authDomain: "taplitions.firebaseapp.com",
  projectId: "taplitions",
  storageBucket: "taplitions.firebasestorage.app",
  messagingSenderId: "153143842463",
  appId: "1:153143842463:web:5c83a60aa15d54e14ff4aa",
};

const app = initializeApp(firebaseConfig);
export default app;
