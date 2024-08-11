"use server";

import { clerkClient, currentUser } from "@clerk/nextjs";
import { client } from "./prisma";
import { redirect } from "next/navigation";





export const getBalance = async () => {
    try {
      const user = await currentUser();

      if (!user) {
        throw new Error('Current user not found.');
      }
  
      const getbal = await client.user.findUnique({
        where: {
          clerkId: user.id
        }
        });
      
  
      return getbal;
    } catch (error) {
      console.error('Error creating deposit:', error);
      throw error;
    }
  };