import React from 'react';
import user from '@/assets/images/userinfo.png';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Udash = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex justify-center items-center flex-col gap-5">
          <img src={user} className="h-36 w-36 mt-4 rounded-full shadow-lg" alt="User profile" />
          <h6 className="text-3xl font-semibold">User Name</h6>
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
                    defaultValue="Sanjay"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    defaultValue="Coimbatore"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="age" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="age"
                    defaultValue="20"
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
          <div className="flex"><h6 className="text-2xl font-bold">User Name:</h6><h6 className="text-2xl ml-2">Sanjay</h6></div>
          <div className="flex"><h6 className="text-2xl font-bold">Location:</h6><h6 className="text-2xl ml-2">Coimbatore</h6></div>
          <div className="flex"><h6 className="text-2xl font-bold">Age:</h6><h6 className="text-2xl ml-2">20</h6></div>
          <div className="flex"><h6 className="text-2xl font-bold">Email Id:</h6><h6 className="text-2xl ml-2">Sanjayraghuraman11@gmail.com</h6></div>
          <div className="flex"><h6 className="text-2xl font-bold">Role:</h6><h6 className="text-2xl ml-2">Customer</h6></div>
        </div>
      </div>
      
      <hr className="my-8 border-t-2 border-gray-300" />
      
      <div>
        <h2 className="text-3xl font-bold mb-4">My Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Example property card */}
          <div className="border rounded-lg p-4 shadow-md flex flex-row">
            <div>
            <img src="https://ik.imagekit.io/1in7nqs7x/aj-alao-cstkc_42P7M-unsplash.jpg?updatedAt=1722225230967" alt="Property" className="rounded-t-lg mb-3" />
            </div>
            <div className='ml-5 flex flex-col gap-1'>
            <h3 className="text-xl font-semibold">Property Title</h3>
            <p className="text-gray-700">Location: Example City</p>
            <p className="text-gray-700">Value: 7 lakhs</p>
            <Button className="mt-4">View Details</Button>
            </div>
          </div>
          <div className="border rounded-lg p-4 shadow-md flex flex-row">
            <div>
            <img src="https://ik.imagekit.io/1in7nqs7x/kane-taylor-02fRawxKwbA-unsplash.jpg?updatedAt=1722225230315" alt="Property" className="rounded-t-lg mb-3" />
            </div>
            <div className='ml-5 flex flex-col gap-1'>
            <h3 className="text-xl font-semibold">Property Title</h3>
            <p className="text-gray-700">Location: Example City</p>
            <p className="text-gray-700">Value: 7 lakhs</p>
            <Button className="mt-4">View Details</Button>
            </div>
          </div>
          {/* Repeat for more properties */}
        </div>
      </div>
    </div>
  );
}
