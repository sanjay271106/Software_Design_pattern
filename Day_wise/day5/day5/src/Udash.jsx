import React, { useState, useEffect } from 'react';
import { authService } from '@/services/Auth';
import user from '@/assets/images/userinfo.png';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Udash = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await authService.getUserDetails(userId);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {userData ? (
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="flex justify-center items-center flex-col gap-5">
            <img src={user} className="h-36 w-36 mt-4 rounded-full shadow-lg" alt="User profile" />
            <h6 className="text-3xl font-semibold">{userData.username}</h6>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border border-blue-500 hover:bg-blue-500 hover:text-white">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="name"
                      value={userData.username}
                      placeholder="Username"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={userData.location}
                      placeholder="Location"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                      Age
                    </Label>
                    <Input
                      id="age"
                      value={userData.age}
                      placeholder="Age"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <div className="flex"><h6 className="text-2xl font-bold">User Name:</h6><h6 className="text-2xl ml-2">{userData.username}</h6></div>
            <div className="flex"><h6 className="text-2xl font-bold">Location:</h6><h6 className="text-2xl ml-2">{userData.location}</h6></div>
            <div className="flex"><h6 className="text-2xl font-bold">Age:</h6><h6 className="text-2xl ml-2">{userData.age}</h6></div>
            <div className="flex"><h6 className="text-2xl font-bold">Email Id:</h6><h6 className="text-2xl ml-2">{userData.email}</h6></div>
            <div className="flex"><h6 className="text-2xl font-bold">Role:</h6><h6 className="text-2xl ml-2">{userData.role}</h6></div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
