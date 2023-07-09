import React, { useState } from 'react';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Fake login authentication
      if (email === 'example@example.com' && password === 'password') {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid email or password.');
      }
    } else {
      // Fake signup authentication
      setMessage('Signup successful!');
    }
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>{message}</p>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={toggleAuthMode}>{isLogin ? 'Sign Up' : 'Login'}</button>
      </p>
    </div>
  );
}

export default AuthForm;
