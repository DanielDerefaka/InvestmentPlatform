import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className=" rounded-lg   flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border  md:w-[60%] w-full">
        <div className="">
          <div className=" flex justify-center ">
            <Avatar className="w-20 h-20">
              <AvatarFallback>DE</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-5 ">
            <Button className="bg-grandis text-gray-700  font-semibold">
              Verification
            </Button>
          </div>

          <div className="mt-5">
            <p className="text-sm md:text-2xl ">Personal Information</p>
            <Separator className="mt-2" />
            <div className="mt-5 ">
              <div className="flex md:flex-row md:justify-between flex-col">
                <div>
                  <p className="font-bold"> Full Name </p>
                  <p> Daniel Owen </p>
                </div>
                <div>
                  <p className="font-bold"> Email </p>
                  <p> danielowendere@gmail.com </p>
                </div>
              </div>
              <div className="flex mt-5 justify-between">
                <div>
                  <p className="font-bold"> Phone Number </p>
                  <p> 08166271623 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-lg  flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border   md:w-full w-full">
        <p className="text-sm md:text-2xl ">Address Information</p>
        <Separator className="mt-2" />

        <div className="mt-5 ">
          <div className="flex gap-4 md:flex-row md:justify-between flex-col">
            <div className="w-full">
              <p className="text-sm"> Country </p>
              <Input />
            </div>
            <div className="w-full">
              <p className="text-sm"> State </p>
              <Input />
            </div>
          </div>
          <div className="flex mt-5 gap-4 md:flex-row md:justify-between flex-col">
            <div className="w-full">
              <p className="text-sm"> City </p>
              <Input />
            </div>
            <div className="w-full">
              <p className="text-sm"> Zip Code </p>
              <Input />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm mb-2"> Address </p>

            <Input />

            <div className="mt-5">
              <Button className="bg-grandis   font-semibold">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
