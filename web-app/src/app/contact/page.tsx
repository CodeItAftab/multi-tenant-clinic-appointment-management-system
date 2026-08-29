import HeroSection from "@/components/Contact/HeroSection";
import ContactFormSection from "@/components/Contact/ContactformSection";
import ContactMethodsSection from "@/components/Contact/ContactmethodsSection";
import DepartmentSection from "@/components/Contact/DepartmentSection";
import FaqSection from "@/components/Contact/Faqsection";
import CtsSection from "@/components/Contact/CtsSection";
function Page() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <DepartmentSection />
      <FaqSection />
      <CtsSection />
    </main>
  );
}

export default Page;