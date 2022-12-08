import {database,app} from '../firebase'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const [username,setuserName]=useState("");

  
  const router = useRouter();
  const auth = getAuth();

  const saveData = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      
      // Save this user in firestore
      await setDoc(doc(database, "users", user.uid), {
        "email":email,                      
      })

      alert('user registered successfully');      
      setEmail('');
      setPassword('');
      router.push('/home');
      
      } 
      catch (error) {
        router.push('/home');
      }
  }

  return (
      <div >
        <form className='bg-green-700 flex items-center justify-center flex-col gap-4 py-5 px-10'>
          <h2 className='font-bold text-xl '>Register</h2>
          <input 
            type="text" 
            placeholder='Enter Name' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text" 
            placeholder='Enter UserName' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={username}
            onChange={(e) => setuserName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='Enter Email' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder='Enter Password' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type='submit'
            className='bg-blue-500 text-white w-full p-2 rounded-full'
            onClick={saveData}
          >Register</button>
          <p>
            Already have an account? 
            <Link href={'/login'} className='text-red-700'> Login</Link>
          </p>
        </form>

      </div>
  )
}

export default Register