import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6E9gJPDzZOBGERvq2RXFn6dpO6QsxzBQ',
  authDomain: 'my-subscriptions-c9ca5.firebaseapp.com',
  projectId: 'my-subscriptions-c9ca5',
  storageBucket: 'my-subscriptions-c9ca5.appspot.com',
  messagingSenderId: '155759865047',
  appId: '1:155759865047:web:24f16b6afd5cf446b69492'
}

const db = firebase.initializeApp(firebaseConfig)
export default db.firestore()
