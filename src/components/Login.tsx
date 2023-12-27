import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const data = { email, password, confirmPassword };
    console.log(data);
  };
  const handleSignin = () => {
    const data = { email, password };
    console.log(data);
  };

  return (
    <div className=' h-[100vh] flex items-center justify-center p-10'>
      <div className='w-full md:w-[450px] '>
        <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
          {login ? 'Login' : 'Register'}
        </h1>
        <div className='bg-white p-6 min-h-[150px] flex flex-col gap-3 w-full rounded-xl drop-shadow-xl'>
          <Input
            name='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {!login && (
            <Input
              name='Confirm Password'
              type='password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          )}
          {login ? (
            <>
              <Button text='Login' onClick={handleSignin} />
              <Button
                text='Register'
                secondary
                onClick={() => setLogin(false)}
              />
            </>
          ) : (
            <>
              <Button text='Register' onClick={handleSignup} />
              <Button text='Login' secondary onClick={() => setLogin(true)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
