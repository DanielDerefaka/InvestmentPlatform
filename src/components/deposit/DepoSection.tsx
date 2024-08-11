// components/DepositForm.tsx

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import CopyBox from "./CopyWallet";

const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
  currency: z.string().min(1, "Currency is required"),
  walletAddress: z.string().min(1, "Wallet address is required"),
});

type FormData = z.infer<typeof formSchema>;

const DepositForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      currency: "USD",
      walletAddress: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    setStep(3); // Move to confirmation step
  };

  const handleConfirm = () => {
    // Here you would typically process the payment
    alert("Processing payment...");
    form.reset();
    setStep(1);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 && (
          <>
            <div className=" flex md:flex-row flex-col gap-5 w-full">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount to Deposit</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter amount"
                          {...field}
                          className="text-sm "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full">
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              className="bg-grandis text-gray-700  font-semibold"
              type="button"
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Confirm Your Deposit
              </h2>

              <div className="bg-white  rounded-md p-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">Transaction Receipt</p>
                  <p className="text-xs text-gray-400">
                    {new Date().toLocaleString()}
                  </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-800">
                      {form.getValues("amount")} {form.getValues("currency")}
                    </span>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mb-4">
                  <p>
                    You are about to deposit {form.getValues("amount")}{" "}
                    {form.getValues("currency")} in your account.
                  </p>
                  <p>Please review the information and confirm.</p>
                </div>
              </div>

              {/* <div className="text-center text-xs text-gray-400">
      <p>Transaction ID: {Math.random().toString(36).substr(2, 9)}</p>
    </div> */}
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                className="bg-orange"
                type="submit"
                onClick={() => setStep(3)}
              >
                Submit
              </Button>
            </div>
          </>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <div className="bg-white  rounded-md p-6 mt-5">
                <div className=" flex justify-between mb-4">
                  <p className="text-sm text-gray-500">
                    Pay {form.getValues("currency")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date().toLocaleString()}
                  </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-4">
                  <div className="">
                    <div className="flex flex-col justify-center items-center ">
                      <Image src="/qr.webp" width={100} height={0} alt="qr" />

                      <p className="font-bold text-2xl">
                        {" "}
                        {form.getValues("amount")}.00
                      </p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-10 ">
                      <p className="text-sm font-bold uppercase">
                        {" "}
                        {form.getValues("currency")} Address
                      </p>

                      <div className="flex flex-col w-[50%]">
                        <CopyBox value="ssssssssss" />
                      </div>
                    </div>

                    {/* <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-800">
                      {form.getValues("amount")} {form.getValues("currency")}
                    </span> */}
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mb-4">
                  <p>
                    You are about to deposit {form.getValues("amount")}{" "}
                    {form.getValues("currency")} in your account.
                  </p>
                  <p>Please review the information and confirm.</p>
                </div>
              </div>

              {/* <div className="text-center text-xs text-gray-400">
      <p>Transaction ID: {Math.random().toString(36).substr(2, 9)}</p>
    </div> */}
            </div>

            <Button onClick={handleConfirm}>Confirm and Pay</Button>
          </div>
        )}
      </form>
    </Form>
  );
};

export default DepositForm;
