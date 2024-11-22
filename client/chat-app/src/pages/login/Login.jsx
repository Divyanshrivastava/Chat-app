import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className='text-cyan-500'>  HiApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
            </label>
            <input type="text" placeholder='username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label'></label>
            <input
             type="password"
             placeholder="password"
             className='w-full input input-bordered h-10'/>
          </div>

          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> {"Dont't"} have an account? </a>

          <div>
            <button className='btn btn-outline btn-info btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login