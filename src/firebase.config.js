// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuG-Hy0NCZu19ploeg6JAEDdCtCqiATj8',
  authDomain: 'portafolio-jesusamg.firebaseapp.com',
  projectId: 'portafolio-jesusamg',
  storageBucket: 'portafolio-jesusamg.appspot.com',
  messagingSenderId: '847157516788',
  appId: '1:847157516788:web:b003308a7da59f4d1f81a1',
  measurementId: 'G-8YWKTPZ84T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

export { db };
