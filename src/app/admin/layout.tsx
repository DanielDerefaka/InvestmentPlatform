import { AdminLoginUser } from "@/actions/auth";
import SideBar from "@/components/admin/sidebar";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {

    const authenticated = await AdminLoginUser();

    if (!authenticated) return null;

  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <div className="w-full h-screen flex flex-col py-3 pr-10 pl-20 md:px-10">
        <div className="md:p-10  ">
        {children}
        </div>
      
      </div>
    </div>
  );
};

export default layout;
