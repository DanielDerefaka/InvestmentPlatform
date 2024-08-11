// import { onGetBlogPosts } from '@/actions/landing'
import NavBar from "@/components/navbar";
import { AppleCardsCarouselDemo } from "@/components/site/apple-ui";
import { BentoGridSecondDemo } from "@/components/site/grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MacbookScroll } from "@/components/ui/macbookscroll";
// import { pricingCards } from '@/constants/landing-page'
import clsx from "clsx";
import { ArrowRightCircleIcon, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import parse from 'html-react-parser'
// import { getMonthName } from '@/lib/utils'

export default async function Home() {
  //   const posts:
  //     | {
  //         id: string
  //         title: string
  //         image: string
  //         content: string
  //         createdAt: Date
  //       }[]
  //     | undefined = await onGetBlogPosts()
  //   console.log(posts)
  return (
    <main>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            For a New Era of Prop Trading Discover Trade Core
          </span>
          <h1 className="md:text-[80px] mt-10 text-4xl  font-bold text-orange">
            Trading Made Real.
          </h1>
          <p className="text-center max-w-[500px]  mt-5">
            Embrace the future of prop trading. Prove your trading skills in the
            real world with your live trading account or choose our traditional
            verification method. Your success is our commitment.
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Start For Free
          </Button>
          <Image
            src="/images/app-ui.png"
            width={300}
            height={100}
            alt="Logo"
            className=" w-full  md:w-[700px] object-contain"
          />
        </div>
      </section>


      <section className="md:mt-[10%]  mt-10">
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-orange  bg-orange/20 px-4 py-2 rounded-full text-sm">
          The Trade Core Difference
          </span>
          
          <h1 className="md:text-[40px] text-center mt-10 text-4xl  font-bold text-orange">
          We're Trade Core : We Make Profits
          </h1>
          <p className="text-center max-w-[500px]  mt-5">
            Embrace the future of Investments. Prove your trading skills in the
            real world with your live trading account or choose our traditional
            verification method. Your success is our commitment.
          </p>
         
        </div>


        <MacbookScroll/>
      </section>
     
     

      
    </main>
  );
}
