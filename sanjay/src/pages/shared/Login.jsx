import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleLogo from '@/assets/images/google.png'; // Adjust the path as necessary
// import GridPattern from '@/components/magicui/animated-grid-pattern';
// import RetroGrid from '@/components/magicui/retro-grid';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <>
    
    <div className='flex justify-center items-center min-h-[92vh] bg-gray-300 overflow-y-hidden'> 
      <Card className="w-1/4 max-w-sm mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <NavLink to='www.google.com'>
          <Button className="w-[21rem] flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600">
            <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
            Continue with Google
          </Button>
          </NavLink>
          <h3 className='ml-[35%] text-gray-500'>or login with</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="username" className='bg-gray-100' required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="******"  className='bg-gray-100' required/>
          </div>
          <div className="flex items-center gap-2">
            <input id="remember-me" type="checkbox" className="h-4 w-4" />
            <Label htmlFor="remember-me" className="cursor-pointer">Remember me</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <NavLink to='/udash'>
          <Button className="w-[20rem]">Login</Button>
          </NavLink>
          <p className='text-gray-500'>Dont have an account?<a href=""><NavLink to="/register">register</NavLink></a></p>
        </CardFooter>
      </Card>
    </div>
    
    </>
  );
};
