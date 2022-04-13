// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCcjyZEn1x3hwaPQ2HSFwXwBdv-ZcM6CI',
  authDomain: 'techgeek-firebase.firebaseapp.com',
  projectId: 'techgeek-firebase',
  storageBucket: 'techgeek-firebase.appspot.com',
  messagingSenderId: '946014395891',
  appId: '1:946014395891:web:5219966feabe4451020686',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
