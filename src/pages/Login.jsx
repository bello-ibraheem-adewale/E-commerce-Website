import {useState } from 'react'
// import DataContext from 'DataContext'


const Login = () => {
  // const {userName, setUserName} = useContext(DataContext)
  // const {password, setPassword} = useContext(DataContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  


  const handleMe = (e) => {
    e.preventDefault()
    axios.post('endpoint', {userName , password})
  }




  return (
    // <div>
    //   <button onClick={()=>{setUserName()}}></button>
    // </div>
    <div className='flex flex-row justify-center items-center align-middle gap-0 w-screen h-screen border-y-cyan-500 bg-white'>
      

      <div className='w-64 h-96 bg-blue-500 border-cyan-500 rounded flex flex-col justify-center gap-5 text-center align-middle text-white '>
        <h2 className='text-3xl font-serif'>Hello!!!</h2>
        <button className='bg-white w-32 h-10 text-xl rounded-lg text-black items-center ml-16'>Signup</button>
      </div>

      <form className='bg-white rounded w-96 h-96 border-2 border-blue-500  flex flex-col gap-3 align-middle items-center justify-center' action="">
        <h2 className='font-mono p-4 text-3xl'>Signup form</h2>
        <input className='border-2 border-b-emerald-400 w-60 h-10 rounded pl-4 text-blue-400 bg-slate-300 active:bg-neutral-500' type="text" placeholder='UserName' value={userName}  name='userName' onChange={(e)=>{setUserName(e.target.value)}} />
        <input className='border-2 border-b-emerald-400 w-60 h-10 rounded pl-4 text-blue-400 bg-slate-300 active:bg-neutral-500' type="password" placeholder='Password' value={password}  name='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handleMe} className='bg-blue-500 w-60 rounded text-white m-4 h-10'>Login</button>
        
      </form>

    </div> 
  )
}

export default Login
