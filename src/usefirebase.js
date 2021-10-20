import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./Component/Pages/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] =useState({});
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState('');
  const [error,setError] =useState('');
  const [isLoading,setIsLoading] =useState(true);

    const auth =getAuth();
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {setUser(result.user)
        
        setError('');
    })
    .finally(()=> setIsLoading(false))
    .catch(error => error.message)
        
        
    }
    
    
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    },[])


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then (()=>{})
        .finally(()=> setIsLoading(false));
    }
    return {
        user,
        signInUsingGoogle,
        email,
        setEmail,
        setPassword,
        password,
        createUserWithEmailAndPassword,
        error,setError,
        logOut,
        isLoading
    }
}
export default useFirebase;