"use client";
import Hero1 from "../components/herosection/Hero1";
import HealthcareSections from "@/components/herosection/HealthcareSection";
import Reviews from "@/components/herosection/Reviews";

export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <HealthcareSections />
      <Reviews />
    </div>
  );
}
