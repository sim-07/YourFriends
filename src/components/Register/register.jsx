import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = true;
    if (!email) newErrors.email = true;
    if (!password) newErrors.password = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3001/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
          setIsModalOpen(true);
        } else {
          const errorData = await response.json();
          alert(`Errore: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Errore nella registrazione:", error);
        alert("Errore nella registrazione");
      }
    }
  };

  return (
    <section className='flex justify-center items-center min-h-screen bg-gray-100 relative'>
      <Link to="/" className="absolute top-4 left-4 text-4xl text-blue-500 hover:text-blue-700">
        &larr;
      </Link>

      <div className='w-[500px] p-8 bg-white rounded-lg shadow-2xl'>
        <h2 className='text-2xl font-semibold text-center mb-6'>Sign up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
            <input 
              type='text' 
              id='username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className={`w-full p-3 mt-2 rounded-md focus:outline-none focus:ring-2 ${errors.username ? 'border-red-500' : 'focus:ring-primary'}`} 
              placeholder='Create a username'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
              type='email' 
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={`w-full p-3 mt-2 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-primary'}`} 
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
              className={`w-full p-3 mt-2 rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'focus:ring-primary'}`} 
              placeholder='Enter your password'
              required
            />
          </div>

          <button 
            type='submit' 
            className='w-full py-3 bg-blue-500 text-primary font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary'>
            Submit
          </button>
        </form>

        <div className='mt-8 flex justify-start'>
          <p className='text-sm'>
            Already have an account?
            <Link to="/login" className='text-blue-500 underline ml-1'>
              Log in
            </Link>
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">Confirmation Email Sent</h3>
            <p className="mb-6">An email has been sent to {email} to confirm your registration. One confirmed log in here.</p>
            <a href="/login"><button 
              className="py-2 px-4 bg-blue-500 text-primary rounded-md hover:bg-blue-600">
              Log In
            </button></a>
          </div>
        </div>
      )}
    </section>
  );
}

export default SignUpPage;