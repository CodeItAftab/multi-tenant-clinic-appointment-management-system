"use client";

import { useState } from "react";
import HeroSection from "@/components/Servicespage/HeroSection";
import ServicesSection from "@/components/Servicespage/ServicesSection";
import WhyUsSection from "@/components/Servicespage/WhyusSection";
import TestimonialsSection from "@/components/Servicespage/TestimonialsSection";
import InsuranceSection from "@/components/Servicespage/InsuranceSection";
import FaqSection from "@/components/Servicespage/FaqSection";
import CtaSection from "@/components/Servicespage/CtaSection";
import PatientbenefitsSection from "@/components/Servicespage/PatientbenefitsSection";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection />

      <ServicesSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <WhyUsSection />
      <PatientbenefitsSection />
      <TestimonialsSection />
      <InsuranceSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}

export default Page;