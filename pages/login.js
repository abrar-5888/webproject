import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { firestore } from '../firebase';
import { async } from "@firebase/util";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const router = useRouter();
  const auth = getAuth();

  const saveData = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
      
      sessionStorage.setItem("username", email);
      router.push('/home');
    } catch (error) {
        router.push('/home');
    }

  }
  return (
    
        
        
        
    <div >
        <form className='bg-green-700  flex items-center justify-center flex-col gap-4 py-5 px-10'>
    <h2 className='font-bold text-xl '>Login</h2>
          <input 
            type="text" 
            placeholder='Enter Email' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Enter Marks' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type='submit'
            className='bg-blue-500 text-white w-full p-2 rounded-full'
            onClick={saveData}
          >Login</button>
          <p>
            Dont have an account? 
            <Link href={'/register'} className='text-red-700'> Signup</Link>
          </p>
        
        
        
        
        
        </form></div>
    
  )
}

export default Login