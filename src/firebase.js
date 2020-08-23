import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDQxAvZd14TX8MY9QngLsx5WUPwac-5dcE',
  authDomain: 'twitter-clone-6894c.firebaseapp.com',
  databaseURL: 'https://twitter-clone-6894c.firebaseio.com',
  projectId: 'twitter-clone-6894c',
  storageBucket: 'twitter-clone-6894c.appspot.com',
  messagingSenderId: '137016357299',
  appId: '1:137016357299:web:3fc682437ef696454adbc6',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

export { db, storage }
