// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTN9SX22Ky2nQ9PC1xeR3mtXKPLAER3a4",
  authDomain: "bgchat-b5d48.firebaseapp.com",
  databaseURL: "https://bgchat-b5d48-default-rtdb.firebaseio.com",
  projectId: "bgchat-b5d48",
  storageBucket: "bgchat-b5d48.firebasestorage.app",
  messagingSenderId: "202287092546",
  appId: "1:202287092546:web:c8a98c12fe103711ad6edb",
  measurementId: "G-2P1CR8NWTF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };