import React from 'react'

const Login = () => {
  const [currentState, setCurrentState] = React.useState("Sign Up");

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={onSubmitHandler}>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700'></hr>
      </div>
      {currentState === "Sign In" ?'':<input type="text" placeholder='Name' className='w-full border border-gray-700 p-2 rounded-md' required />}
      <input type="text" placeholder='Email' className='w-full border border-gray-700 p-2 rounded-md' required />
      <input type="password" placeholder='Password' className='w-full border border-gray-700 p-2 rounded-md' required />
      <div  className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-pink-500'>Forgot Password?</p>
        {
          currentState === "Sign In" ? <p className='cursor-pointer text-pink-500' onClick={() => setCurrentState("Sign Up")}>Don't have an account?</p> : <p className='cursor-pointer text-pink-500' onClick={() => setCurrentState("Sign In")}>Already have an account?</p>
        }
      </div>
      <button className='bg-pink-500 text-gray-100 py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300 w-full mt-4'>{currentState}</button>
    </form>
  )
}

export default Login