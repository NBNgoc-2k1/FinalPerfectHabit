import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
// import * as auth from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyBxxqMsijwyRSaznzFITfvGIKTLTzcXC0E",
    authDomain: "perfecthabit-af8a6.firebaseapp.com",
    projectId: "perfecthabit-af8a6",
    storageBucket: "perfecthabit-af8a6.appspot.com",
    messagingSenderId: "73280241498",
    appId: "1:73280241498:web:b3860e126e95ed9f103d63",
    measurementId: "G-YJX1SQ1NY6"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// export const authentication = auth.getAuth(app);


