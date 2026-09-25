"use client";
import FeaturedDoctors from "@/components/herosection/FeaturedDoctors";
import Hero1 from "../components/herosection/Hero1";
import Reschedule from "@/components/herosection/Reschedule";
import Reviews from "@/components/herosection/Reviews";
import FeaturedServices from "@/components/herosection/FeaturedServices";
import BookingGuidance from "@/components/herosection/BookingGuidance";
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
