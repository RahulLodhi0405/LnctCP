import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAmZptQKgKpHy8s75NexDKpnUDArxY6vao",
  authDomain: "lnct-cp-club.firebaseapp.com",
  databaseURL: "https://lnct-cp-club-default-rtdb.firebaseio.com",
  projectId: "lnct-cp-club",
  storageBucket: "lnct-cp-club.firebasestorage.app",
  messagingSenderId: "857148185675",
  appId: "1:857148185675:web:ee349068ef6230492701ce",
  measurementId: "G-L294CGG107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
