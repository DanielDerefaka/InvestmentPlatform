import React from "react";
import { DailyInsightChart } from "./dailychats";
import { dataDatabase, getAdminDashboardData } from "@/lib/queries";

const AdminCard = async () => {
  const databaseData = dataDatabase()

  const dashdata = await getAdminDashboardData()
  const data = [
    { date: "01 Aug", value: 1000 },
    { date: "02 Aug", value: 2000 },
    { date: "03 Aug", value: 3000 },
    { date: "04 Aug", value: 4000 },
    { date: "05 Aug", value: 5000 },
  ];
  return (
    <div className="p-3 flex flex-col items-center h-full">
      <div></div>

      {/* <div className="w-full grid grid-cols-1  gap-4 lg:grid-cols-2 py-10"> */}

      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-white dark:bg-muted md:w-full w-full">
          <div>
            <h1 className="font-bold"> Daily Insight</h1>
            <p className="text-sm text-slate-400">
              Daywise overall deposit & withdraw.
            </p>
            <div>
              <DailyInsightChart
                data={data}
                deposit={(await databaseData).deposits._sum.amount}
                withdraw={(await databaseData).withdrawals._sum.amount}
                lastMonthDeposit={(await databaseData).lastMonthDeposits._sum.amount}
                lastMonthWithdraw={(await databaseData).withdrawals._sum.amount}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[800px] w-full">
          <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-white dark:bg-muted ">
            <div>
              <p className="text-sm font-bold text-slate-700">Total Deposit</p>
              <h1 className="text-2xl font-semibold mt-2"> {(await databaseData).deposits._sum.amount} USDT</h1>
              <div className="flex gap-5 mt-5 ">
                <div>
                  <p className="text-sm text-gray-400">This Month</p>
                  <p>{(await databaseData).deposits._sum.amount}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">This Week</p>
                  <p>0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-sm flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-white dark:bg-muted ">
            <div>
              <p className="text-sm font-bold text-slate-700">Total Withdraw</p>
              <h1 className="text-2xl font-semibold mt-2"> {(await databaseData).withdrawals._sum.amount} USDT</h1>

              <div className="flex gap-5 mt-5">
                <div>
                  <p className="text-sm text-gray-400">This Month</p>
                  <p>{(await databaseData).withdrawals._sum.amount}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">This Week</p>
                  <p>0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
