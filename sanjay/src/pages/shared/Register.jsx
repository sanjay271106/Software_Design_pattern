import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleLogo from '@/assets/images/google.png'; // Adjust the path as necessary
import FacebookLogo from '@/assets/images/facebook.png'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='flex justify-center items-center min-h-[91vh]  bg-gray-300'>
      <Card className="w-[32rem] max-w-lg mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <CardHeader className=""> {/* Reduced space between title and description */}
          <CardTitle className="text-2xl">Create an account</CardTitle>
          {/* <CardDescription className="text-gray-600">
            Enter your email below to create your account
          </CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-4 p-4"> {/* Reduced padding */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button className="flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
              <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
              Register with Google
            </Button>
            <Button className="flex items-center justify-center gap-2 bg-blue-800 text-white hover:bg-blue-900 transition-colors duration-200">
              <img src={FacebookLogo} alt="Facebook" className="w-5 h-5" />
              Register with Facebook
            </Button>
          </div>
          <h3 className="text-center text-gray-600">or register with</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2 ml-[1rem]">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="user name" className="bg-gray-100 border border-gray-300 text-gray-900 w-[95%] " />
          </div>
          <div className="grid gap-2 ml-[1rem]">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" className="bg-gray-100 border border-gray-300 text-gray-900  w-[95%]" />
          </div>
          {/* <div className="grid gap-2 ml-[1rem]">
            <Label htmlFor="email">Location</Label>
            <Input id="location" type="text" placeholder="chennai,India" className="bg-gray-100 border border-gray-300 text-gray-900  w-[95%]" />
          </div> */}
          <div className="grid gap-2 ml-[1rem]">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="******" className="bg-gray-100 border border-gray-300 text-gray-900 w-[95%]"/>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-6">
          <NavLink to='/udash'>
          <Button className="w-[20rem]">Create account</Button>
          </NavLink>
          <p className='text-gray-500'>Already have an account?<a href=""><NavLink to="/login">Login</NavLink></a></p>
        </CardFooter>
      </Card>
    </div>
  );
};
