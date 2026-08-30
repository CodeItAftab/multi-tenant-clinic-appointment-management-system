"use client";

import React, { useState } from "react";
import HeroSection from "@/components/Servicespage/HeroSection";
import ServicesSection from "@/components/Servicespage/ServicesSection";
import WhyUsSection from "@/components/Servicespage/WhyusSection";
import PatientBenefitsSection from "@/components/Servicespage/PatientbenefitsSection";
import TestimonialsSection from "@/components/Servicespage/TestimonialsSection";
import InsuranceSection from "@/components/Servicespage/InsSection";
import FaqSection from "@/components/Servicespage/FaqSection";
import CtaSection from "@/components/Servicespage/CtaSection";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ServicesSection
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <WhyUsSection />

      <PatientBenefitsSection />

      <TestimonialsSection />

      <InsuranceSection />

      <FaqSection />

      <CtaSection />
    </main>
  );
}

export default Page;