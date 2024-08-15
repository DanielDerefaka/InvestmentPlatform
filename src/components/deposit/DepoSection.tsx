// components/DepositForm.tsx

"use client";
import React, { useEffect, useState } from "react";
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
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { DepositCall } from "@/lib/queries";
import { v4 } from "uuid";
import { Deposit } from "@prisma/client";
import { Spinner } from "../spinner";
import { currentUser } from "@clerk/nextjs";
import { UserId } from "@/actions/auth";

type Props = {
  data?: Partial<Deposit>;
};

const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
  currency: z.string().min(1, "Currency is required"),
});

const DepositForm: React.FC<Props> = ({ data }) => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: data?.amount?.toString() || "",
      currency: data?.currency || "USD",
    },
  });

  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    if (data) {
      form.reset({
        amount: data.amount?.toString() || "",
        currency: data.currency || "USD",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    const user = await UserId();
    console.log(user?.user?.clerkId)

    try {
      await DepositCall({
        id: v4(),
        amount: values.amount,
        currency: values.currency,
        status: "PENDING",
        createdAt: new Date(),
        userId: user?.user?.clerkId || null ,
      });

      toast({
        title: "Deposit Successful",
      });

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Could not make a deposit",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
          <>
            <div className="flex md:flex-row flex-col gap-5 w-full">
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
                          className="text-sm"
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
              className="bg-grandis text-gray-700 font-semibold"
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

              <div className="bg-white rounded-md p-6">
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
                type="button"
                onClick={() => setStep(3)}
              >
                Continue
              </Button>
            </div>
          </>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <div className="bg-white rounded-md p-6 mt-5">
                <div className="flex justify-between mb-4">
                  <p className="text-sm text-gray-500">
                    Pay {form.getValues("currency")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date().toLocaleString()}
                  </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-4">
                  <div className="">
                    <div className="flex flex-col justify-center items-center">
                      <Image src="/qr.webp" width={100} height={100} alt="qr" />

                      <p className="font-bold text-2xl">
                        {form.getValues("amount")}.00
                      </p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-10">
                      <p className="text-sm font-bold uppercase">
                        {form.getValues("currency")} Address
                      </p>

                      <div className="flex flex-col w-[50%]">
                        <CopyBox value="wallet_address_here" />
                      </div>
                    </div>
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
            </div>

            <Button disabled={isLoading} type="submit">
              {isLoading ? <Spinner /> : "Confirm and Pay"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};

export default DepositForm;