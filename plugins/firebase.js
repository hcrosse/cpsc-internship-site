import * as firebase from 'firebase'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCqyaYnV8n0EJXvEYfMZt-nNZ7TQirj_80',
    authDomain: 'polack-internship.firebaseapp.com',
    databaseURL: 'https://polack-internship.firebaseio.com',
    projectId: 'polack-internship',
    storageBucket: 'polack-internship.appspot.com',
    messagingSenderId: '554234599348'
  }

  firebase.initializeApp(config)
//  firebase.firestore().settings({ timestampsInSnapshots: true })
}

export const db = firebase.firestore()
export const auth = firebase.auth()
