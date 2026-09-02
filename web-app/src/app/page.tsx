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
      <Reviews/>
    </div>
  );
}
