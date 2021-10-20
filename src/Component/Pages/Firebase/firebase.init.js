import { initializeApp } from "firebase/app";
import firebaseConfig from "./Sing up/firebase.config";


const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;