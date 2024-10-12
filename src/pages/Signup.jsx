import React, { useState} from 'react'



const Signup = () => {




  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('endpoint', {userName , password})

    

  }

  



  return (
    <div className='flex flex-row justify-center items-center align-middle gap-0 w-screen h-screen border-y-cyan-500 bg-white'>

      <div className='w-64 h-96 bg-green-500 border-cyan-500 rounded flex flex-col justify-center gap-5 text-center align-middle text-white '>
        <h2 className='text-3xl font-serif'>Hello!!!</h2>
        <button className='bg-white w-32 h-10 text-xl rounded-lg text-black items-center ml-16'>Login</button>
      </div>
      <form className='bg-white rounded w-96 h-96 border-2 border-green-500  flex flex-col gap-3 justify-center align-middle items-center' action="">
        <h2 className='font-mono p-4 text-3xl'>Signup form</h2>
        <input className='border-b-emerald-400 w-60 h-10 rounded pl-4 text-blue-400 bg-slate-300 active:bg-neutral-500' type="text" placeholder='UserName' value={userName}  name='userName' onChange={(e)=>{setUserName(e.target.value)}} />
        <input className='border-b-emerald-400 w-60 h-10 rounded pl-4 text-blue-400 bg-slate-300 active:bg-neutral-500' type="email" placeholder='Email' value={email}  name='email' onChange={(e)=>{setEmail(e.target.value)}} />
        <input className='border-b-emerald-400 w-60 h-10 rounded pl-4 text-blue-400 bg-slate-300 active:bg-neutral-500' type="password" placeholder='Password' value={password}  name='password' onChange={(e)=>{setPassword(e.target.value)}} />

        <button className='bg-green-500 w-60 rounded text-white m-4 h-10'  onClick={handleClick}>Signup</button>

        

      </form>

      
    </div> 
  )
}
 
export default Signup
