import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebase/firebaseConfig';


const app = firebase.initializeApp(firebaseConfig.firebaseConfig);
export const auth = firebase.auth();
export default getFirestore(app);
