import React from "react";
import { TransactionPanel } from "./TransactionFetch";
import Link from "next/link";
import InvestmentFetch from "./InvestmentFetch";
import { UsersIcon } from "@/icons/adminusers-icon";
import { ReferralsIcon } from "@/icons/Referral-icon";
import { getAdminDashboardData, getAllTransactions } from "@/lib/queries";

const AdminSection = async () => {
    const dashdata = await getAdminDashboardData()
    const transactions = await getAllTransactions()
//   const transactions = [
//     { type: "deposit", amount: 1000, date: "2023-08-01" },
//     { type: "withdraw", amount: 500, date: "2023-08-02" },
//     // ... more transactions
//   ];
  return (
    <div className=" flex flex-col  h-full">
      <div></div>

      {/* <div className="w-full grid grid-cols-1  gap-4 lg:grid-cols-2 py-10"> */}

      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className=" rounded-sm flex flex-col md:flex-row gap-5 md:pl-4  bg-white dark:bg-muted md:w-full w-full">
          <div className=" rounded-sm flex flex-col  gap-3 pr-10 pl-10 py-10 md:pl-5 md:pr-5 border-[1px] border-border bg-white dark:bg-muted  w-full">
            <TransactionPanel transactions={transactions} />
          </div>

          <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-white dark:bg-muted w-full ">
            <div className="flex justify-between ">
              <div>
                <h1 className=" font-semibold"> Investment Activities</h1>
              </div>

              <div>
                <Link
                  href="/admin/investments"
                  className="text-sm text-blue-500"
                >
                  All investments
                </Link>
              </div>
            </div>
            <InvestmentFetch />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[800px] w-full">
          <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-white h-full dark:bg-muted ">
            <div>
              <h1 className="text-2xl font-semibold"> User Activities </h1>
              <p className="text-sm text-slate-400">In last 30 days </p>
              <div className="flex gap-20 mt-5">
                <div className="flex gap-2">
                  <UsersIcon />
                  <h1 className="text-[20px]"> {dashdata.totalUsers} </h1>
                </div>

                <div className="flex gap-2">
                  <ReferralsIcon />
                  <h1 className="text-[20px]"> 0 </h1>
                </div>
              </div>
              <div className="flex gap-10 ">
                <p className="text-sm text-gray-400"> Directly Joined</p>
                <p className="text-sm text-gray-400"> Reffered Users</p>
              </div>
            </div>
          </div>

          <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 h-full border-[1px] border-border bg-white dark:bg-muted ">
            <div>
              <h1 className="text-2xl font-semibold"> Total Stats </h1>
              <div className="flex gap-10 md:gap-[120px] mt-5">
                <div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-blue-500" />
                    <div>
                      <h1 className=" text-gray-400">Deposits</h1>
                      <p className="text-[20px]">{dashdata.totalDeposits}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-red-500" />
                    <div>
                      <h1 className=" text-gray-400">Withdraws</h1>
                      <p className="text-[20px]">{dashdata.totalWithdrawals}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 md:gap-[90px] mt-5">
                <div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-purple-500" />
                    <div>
                      <h1 className=" text-gray-400">Transactions</h1>
                      <p className="text-[20px]">{dashdata.totalTransactions}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-orange" />
                    <div>
                      <h1 className=" text-gray-400">Users</h1>
                      <p className="text-[20px]">{dashdata.totalUsers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
