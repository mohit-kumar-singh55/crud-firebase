import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkjtEImsxRcBvC0UUndx3G-QSkOchqriI",
    authDomain: "crud-237d9.firebaseapp.com",
    projectId: "crud-237d9",
    storageBucket: "crud-237d9.appspot.com",
    messagingSenderId: "137659961424",
    appId: "1:137659961424:web:b90e3cf8e89f72bb740155"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);