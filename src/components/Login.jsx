import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        alert(`Errore: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Errore nel login:", error);
      alert("Errore nel login");
    }
  };*/

  return (
    <section className='flex justify-center items-center min-h-screen bg-gray-100 relative'>
      <Link to="/" className="absolute top-4 left-4 text-4xl text-blue-500 hover:text-blue-700">
        &larr;
      </Link>

      <div className='w-[500px] p-8 bg-white rounded-lg shadow-2xl'>
        <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
              type='email' 
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='w-full p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary' 
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
              type='password' 
              id='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className='w-full p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary' 
              placeholder='Enter your password'
              required
            />
          </div>

          <button 
            type='submit' 
            className='w-full py-3 bg-blue-500 border border-primary text-primary font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary'>
            Submit
          </button>
        </form>
        <div className='mt-8 flex justify-start'>
          <p className='text-sm'>
            Don't have an account? 
            <Link to="/register" className='text-blue-500 underline ml-1'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;