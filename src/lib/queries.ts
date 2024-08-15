"use server";

import { clerkClient, currentUser } from "@clerk/nextjs";
import { client } from "./prisma";
import { redirect } from "next/navigation";
import { Deposit, KYCVerification, Profile, Withdrawal } from "@prisma/client";
import bcrypt from 'bcrypt'


interface UpdateUserInput {
  country?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  address?: string;
  // Add any other fields you want to be able to update
}


interface Kyc {
  fullName?: String,
  dateOfBirth?:String,
  nationality?: String,
  streetAddress?: String,
  city?: String,
  postalCode?: String,
  country?: String,
  idFrontUrl?: String,
  idBackUrl?: String,
  selfieUrl?: String,

}


interface AdminSignUp {
  username: String,
  email : String,
  password: String,
}
export const getBalance = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Current user not found.");
    }

    const getbal = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    return getbal;
  } catch (error) {
    console.error("Error creating deposit:", error);
    throw error;
  }
};

export const DepositCall = async (newUser: Deposit) => {
  console.log("Starting createDeposit function");
  console.log("Input newUser:", JSON.stringify(newUser, null, 2));

  try {
    console.log("Attempting to get current user");
    const user = await currentUser();
    if (!user) {
      console.error("Current user not found");
      throw new Error("Current user not found.");
    }
    console.log("Current user found:", user.id);

    console.log("Preparing deposit data");
    const depositData = {
      id: newUser.id,
      amount: newUser.amount,
      currency: newUser.currency,
      status: "PENDING",
      userId: newUser.userId,
    };
    console.log("Deposit data:", JSON.stringify(depositData, null, 2));

    console.log("Attempting to create deposit in database");
    const userData = await client.deposit.create({
      data: depositData,
    });

    console.log(
      "Deposit created successfully:",
      JSON.stringify(userData, null, 2)
    );

    if (userData) {
      const depositData = {};

      try {
        const transactionDetails = await client.transaction.create({
          data: {
            id: newUser.id,
            amount: newUser.amount,
            currency: newUser.currency,
            status: "PENDING",
            userId: newUser?.userId,
            type: "DEPOSIT",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    return userData;
  } catch (error) {
    console.error("Error in createDeposit function:", error);
    console.error("Error stack:", (error as Error).stack);
    throw error;
  } finally {
    console.log("Exiting createDeposit function");
  }
};

export const createWithdraw = async (newUser: Withdrawal) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("Current user not found.");
    }

    const userData = await client.withdrawal.create({
      data: {
        id: newUser.id,
        amount: newUser.amount,
        walletAddress: newUser.walletAddress,
        userId: user.id,
        status: "PENDING",
      },
    });

    return userData;
  } catch (error) {
    console.error("Error creating deposit:", error);
    throw error;
  }
};

export const getAllTransaction = async ( ) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('Current user not found.');
    }

    const getTransaction = await client.transaction.findMany({
      where: {
        userId: user.id
      }
      });
    

    return getTransaction;
  } catch (error) {
    console.error('Error creating deposit:', error);
    throw error;
  }
};

export const TotalDepo = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("Current user not found.");
    }

    const totalDeposits = await client.deposit.count({
      where: {
        userId: user.id,
      },
    });

   

    return totalDeposits;
  } catch (error) {
    console.error("Error creating deposit:", error);
    throw error;
  }
};

export const TotalWithdraw = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("Current user not found.");
    }

    const totalDeposits = await client.withdrawal.count({
      where: {
        userId: user.id,
      },
    });

   

    return totalDeposits;
  } catch (error) {
    console.error("Error creating deposit:", error);
    throw error;
  }
};


export const updateUser = async (userData: UpdateUserInput) => {
  try {
    // Get the current user
    const user = await currentUser();
    if (!user) {
      throw new Error("Current user not found.");
    }

    // Update the user's profile
    const updatedProfile = await client.profile.update({
      where: { id: user.id },
      data: {
        ...userData,
        updatedAt: new Date(), 
      },
    });

    return updatedProfile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const getProfileDetails = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('Current user not found.');
    }

    const getProfille = await client.profile.findUnique({
      where: {
        id: user.id
      }

      
      
      });
    

    return getProfille;
  } catch (error) {
    console.error('Error getting profile:', error);
    throw error;
  }
};

export const KycVerification = async (userData: Kyc) => {
  try {
    // Get the current user
    const user = await currentUser();
    if (!user) {
      throw new Error("Current user not found.");
    }

    // Update the user's profile
    const updateKyc = await client.kYCVerification.create({
     
      data: {
        ...userData,
        userId: user.id,
        id: user.id,
        clerkId: user.id,
        updatedAt: new Date(), 
      },
    });

    return updateKyc;
  } catch (error) {
    console.error('Error Uploading Kyc:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const getKyc = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('Current user not found.');
    }

    const getProfille = await client.kYCVerification.findUnique({
      where: {
        id: user.id
      }

    
      });
    

    return getProfille;
  } catch (error) {
    console.error('Error getting kyc:', error);
    throw error;
  }
};

export const CreateWithdraw = async (newUser: Withdrawal) => {
  console.log("Starting createDeposit function");
  console.log("Input newUser:", JSON.stringify(newUser, null, 2));

  try {
    console.log("Attempting to get current user");
    const user = await currentUser();
    if (!user) {
      console.error("Current user not found");
      throw new Error("Current user not found.");
    }
    console.log("Current user found:", user.id);

    console.log("Preparing deposit data");
    const withdrawData = {
      id: newUser.id,
      amount: newUser.amount,
      walletAddress: newUser.walletAddress,
      status: "PENDING",
      userId: user.id,
    };
    console.log("Deposit data:", JSON.stringify(withdrawData, null, 2));

    console.log("Attempting to create deposit in database");
    const userData = await client.withdrawal.create({
      data: withdrawData,
    });

    console.log(
      "Deposit created successfully:",
      JSON.stringify(userData, null, 2)
    );

    if (userData) {
      const depositData = {};

      try {
        const transactionDetails = await client.transaction.create({
          data: {
            id: newUser.id,
            amount: newUser.amount,
            status: "PENDING",
            userId: user.id,
            type: "WITHDRAWAL",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    return userData;
  } catch (error) {
    console.error("Error in createDeposit function:", error);
    console.error("Error stack:", (error as Error).stack);
    throw error;
  } finally {
    console.log("Exiting createDeposit function");
  }
};


// ADMIN LOGICS 

export async function createAdmin(userData:AdminSignUp) {
  const hashedPassword = await bcrypt.hash(userData.password, 10)
  
  return client.admin.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  })
}

export async function findAdminByEmail(email: string) {
  return client.admin.findUnique({
    where: { email },
  })
}

export async function validateAdminPassword(admin: any, password: string) {
  return bcrypt.compare(password, admin.password)
}

export async function updateAdminPassword(adminId: string, newPassword: string) {
  const hashedPassword = await bcrypt.hash(newPassword, 10)
  
  return client.admin.update({
    where: { id: adminId },
    data: { password: hashedPassword },
  })
}

export async function deleteAdmin(adminId: string) {
  return client.admin.delete({
    where: { id: adminId },
  })
}
