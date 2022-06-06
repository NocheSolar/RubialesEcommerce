import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBfxD5EIowTAAjp_Gh69sMPQ7-CWbmgw_4",
    authDomain: "rubialesecommerce.firebaseapp.com",
    projectId: "rubialesecommerce",
    storageBucket: "rubialesecommerce.appspot.com",
    messagingSenderId: "394349714847",
    appId: "1:394349714847:web:af0adf2aaa3355931e31aa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;