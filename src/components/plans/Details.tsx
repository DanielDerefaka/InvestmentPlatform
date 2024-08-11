import React from "react";
import { Separator } from "../ui/separator";

interface Props {}

const Details = (props: Props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      <div className=" rounded-lg flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-cream dark:bg-muted md:w-fit w-full">
        <div className=" gap-3 text-center">
          <h1 className="font-bold text-2xl"> Mecury</h1>
          <p className="text-sm text-slate-400">
            Investment for long term & earn money.
          </p>
        </div>

        <div className="flex text-center flex-row justify-between  mt-5">
          <div>
            <p className="text-2xl"> 0.45%</p>
            <p className="text-sm text-slate-400">Hourly Interest</p>
          </div>
          <div>
            <p className="text-2xl"> 1 </p>
            <p className="text-sm text-slate-400">Term Days</p>
          </div>
        </div>
        <Separator />

        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Amount</p>
          </div>

          <div>
            <p className="text-sm font-bold"> 100.00 USD </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Type</p>
          </div>

          <div>
            <p className="text-sm "> Fixed </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Capital Return</p>
          </div>

          <div>
            <p className="text-sm "> Each Term </p>
          </div>
        </div>
      </div>
      <div className=" rounded-lg flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-cream dark:bg-muted md:w-fit w-full">
        <div className=" gap-3 text-center">
          <h1 className="font-bold text-2xl"> Mecury</h1>
          <p className="text-sm text-slate-400">
            Investment for long term & earn money.
          </p>
        </div>

        <div className="flex text-center flex-row justify-between  mt-5">
          <div>
            <p className="text-2xl"> 0.45%</p>
            <p className="text-sm text-slate-400">Hourly Interest</p>
          </div>
          <div>
            <p className="text-2xl"> 1 </p>
            <p className="text-sm text-slate-400">Term Days</p>
          </div>
        </div>
        <Separator />

        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Amount</p>
          </div>

          <div>
            <p className="text-sm font-bold"> 100.00 USD </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Type</p>
          </div>

          <div>
            <p className="text-sm "> Fixed </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Capital Return</p>
          </div>

          <div>
            <p className="text-sm "> Each Term </p>
          </div>
        </div>
      </div>
      <div className=" rounded-lg flex flex-col gap-3 pr-10 pl-10 py-10 md:pl-10 md:pr-20 border-[1px] border-border bg-cream dark:bg-muted md:w-fit w-full">
        <div className=" gap-3 text-center">
          <h1 className="font-bold text-2xl"> Mecury</h1>
          <p className="text-sm text-slate-400">
            Investment for long term & earn money.
          </p>
        </div>

        <div className="flex text-center flex-row justify-between  mt-5">
          <div>
            <p className="text-2xl"> 0.45%</p>
            <p className="text-sm text-slate-400">Hourly Interest</p>
          </div>
          <div>
            <p className="text-2xl"> 1 </p>
            <p className="text-sm text-slate-400">Term Days</p>
          </div>
        </div>
        <Separator />

        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Amount</p>
          </div>

          <div>
            <p className="text-sm font-bold"> 100.00 USD </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Deposit Type</p>
          </div>

          <div>
            <p className="text-sm "> Fixed </p>
          </div>
        </div>
        <div className="flex text-center md:flex-row justify-between  mt-5">
          <div>
            <p className="text-sm"> Capital Return</p>
          </div>

          <div>
            <p className="text-sm "> Each Term </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
