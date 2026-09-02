"use client";
import Hero1 from "../components/herosection/Hero1";
import HealthcareSections from "@/components/herosection/HealthcareSection";
import Reviews from "@/components/herosection/Reviews";
import Reschedule from "@/components/herosection/Reschedule";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <Reschedule />
      <HealthcareSections/>
      <div className="justify-center text-center items-center">
        <button className="text-xl font-poppins font-bold px-5 py-3 text-white bg-emerald-500 hover:bg-emerald-700 rounded-xl "><Link href={"/doctors"}>View All Doctors →</Link></button>
      </div>
      <Reviews/>
    </div>
  );
}
