import { createUserWithEmailAndPassword,getAuth } from '@firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Singup = () => {
  const {email,password,setEmail,setPassword, signInUsingGoogle,error,setError}=useAuth();
  



  const handleEmailChange = e => {
    setEmail(e.target.value)

  }

  const handlePassword = e =>{
    setPassword(e.target.value)

    
  }

  const handleRegistration = e =>{
    e.preventDefault(); 
    console.log(email,password);
    if(password.length < 6){
      setError("Password Must be at least 6 characters long.")
      return; 
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setError("Password Must to upper case");
      return;
    }

    const auth =getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then (result => {
      const user =result.user;
      setError('');
      console.log(user);
    })
    .catch(error=>{
      setError(error.message);
    })
   
  }

    return (
        <div>
             <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <span className="mx-auto h-12  w-auto text-yellow-500 text-5xl"><i className="fas fa-star-of-david"></i></span>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
    <p className="mt-2 text-center text-sm text-gray-600 max-w font-semibold">
      Already registered?
      <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Log in</Link>
    </p>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form onSubmit={handleRegistration} className="mb-0 space-y-6" action="#" method="POST">
        <div>
          <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <div className="mt-1">
            <input  id="name" name="name" type="name" autocomplete="name" required className="bg-gray-200 rounded-full py-3 px-6" />
          </div>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <div className="mt-1">
            <input onBlur={handleEmailChange} id="email" name="email" type="email" autocomplete="email" required className="bg-gray-200 rounded-full py-3 px-6" />
          </div>
        </div>

        <div>
          <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input onBlur={handlePassword}  id="password" name="password" type="password" autocomplete="current-password" required className="bg-gray-200 rounded-full py-3 px-6" />
          </div>
        </div>

        
        <div className="flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
          <label for="terms-and-privacy" className="ml-2 block text-sm text-gray-900 font-semibold text-xl"
            >I agree
            
          </label>
         
        </div>
        <div className="text-2xl text-red-400">{error}</div>
        
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
        
       <h1 className="text-gray-500"> ------------or------------</h1>

        <div>
          <Link to="/signup">
          <button onClick={signInUsingGoogle} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in with Google</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singup;