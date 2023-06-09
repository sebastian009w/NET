/** @Firebase module */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";

/** @app */
export const app = initializeApp(firebaseConfig);

/**@Auth */
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
