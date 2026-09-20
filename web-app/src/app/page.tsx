"use client";
import FeaturedDoctors from "@/components/Herosection/FeaturedDoctors";
import Hero1 from "../components/Herosection/Hero1";

import Reschedule from "@/components/Herosection/Reschedule";
import Reviews from "@/components/Herosection/Reviews";
import FeaturedServices from "@/components/Herosection/FeaturedServices";
import BookingGuidance from "@/components/Herosection/BookingGuidance";
export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <Reschedule />
      <BookingGuidance />
      <FeaturedDoctors />
      <FeaturedServices />
      <Reviews />
    </div>
  );
}
