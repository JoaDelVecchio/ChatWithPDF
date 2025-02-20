import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1beQE6BiZknD8BiHlURwVwRVer7qWsQA",
  authDomain: "chat-with-pdf-b2533.firebaseapp.com",
  projectId: "chat-with-pdf-b2533",
  storageBucket: "chat-with-pdf-b2533.firebasestorage.app",
  messagingSenderId: "33489719798",
  appId: "1:33489719798:web:91c5bedaec01df071e37d7",
  measurementId: "G-XZ8P9CHZCC",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db };
