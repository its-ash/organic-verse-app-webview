import {initializeApp} from 'firebase/app'

export const firebaseConfig = {
  apiKey: "AIzaSyCiEsV9ltkdqcVq0b7BaxUacoNIuZroYrk",
  authDomain: "the-organic-verse.firebaseapp.com",
  databaseURL: "https://the-organic-verse-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-organic-verse",
  storageBucket: "the-organic-verse.appspot.com",
  messagingSenderId: "654120641472",
  appId: "1:654120641472:web:1b65edca9c8a7ae7ad9e25",
  measurementId: "G-6N7Z1EE75G"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
