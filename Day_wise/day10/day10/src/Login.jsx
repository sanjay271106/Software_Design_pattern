import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleLogo from '@/assets/images/google.png';
import toast, { Toaster } from 'react-hot-toast';
import { authService } from '@/services/Auth';
import { NavLink, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  // const checkRedirect = async () => {
  //   if (authService.getToken() !== null && authService.isLoggedIn()) {
  //     const userRole = authService.getUserRole();
  //     if (userRole !== null) {
  //       if (userRole === 'Admin') {
  //         navigate('/admin/dashboard');
  //       } else if (userRole === 'User') {
  //         navigate('/user/dashboard');
  //       } else {
  //         toast.error('Something went wrong');
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkRedirect();
  // }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
      console.log(res.data);

      if (res.status === 200) {
        authService.setToken(res.data.accessToken);
        const userRole = res.data.role; 
        const userId = res.data.id; 

        localStorage.setItem('userId', userId);
        
        toast.success('Welcome');
        navigate('/udash')
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials and try again.');
    }

  };

  return (
    <>
      <div className='flex justify-center items-center min-h-[92vh] bg-gray-300 overflow-y-hidden'>
        <Card className='w-1/4 max-w-sm mx-auto'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Enter your email below to login</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
            </div>
            <Button
              className='w-[100%] flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600'
              onClick={() => window.location.href = 'https://www.google.com'} // Redirect to Google
            >
              <img src={GoogleLogo} alt='Google' className='w-5 h-5' />
              Continue with Google
            </Button>
            <h3 className='ml-[35%] text-gray-500'>or login with</h3>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='username'
                className='bg-gray-100'
                ref={emailRef}
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='******'
                className='bg-gray-100'
                ref={passwordRef}
                required
              />
            </div>
            <div className='flex items-center gap-2'>
              <input id='remember-me' type='checkbox' className='h-4 w-4' />
              <Label htmlFor='remember-me' className='cursor-pointer'>Remember me</Label>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-[80%]' onClick={handleLogin}>
              Login
            </Button>
            <p className='text-gray-500'>
              Don’t have an account?{' '}
              <NavLink to='/register' className='text-blue-500'>
                Register
              </NavLink>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </>
  );
};
