import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src="/logo.png"
          alt="dx"
          sizes="100vw"
          style={{
            width: "10%",
            height: "auto",
          }}

          width={0}
          height={0}
        />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden
      relatable bg-cream flex-col pt-10 pl-24 gap-5">

        <h2 className="text-iridium md:text-4xl font-bold">
            Hi, Welcome to Broker Pro
       </h2>
       <p className="text-gray-400 md:text-sm mb-10">
       Get access to exclusive tour of our platform within 10 seconds,
       by simply submitting the following information.
       </p>
       <Image src="/images/app-ui.png" alt="app-ui" width={0} height={0} sizes="30" className="absolute shrink-0 !w-[1600px] top-48" />



      </div>
    </div>
  );
};

export default layout;
