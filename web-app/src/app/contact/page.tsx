import HeroSection from "@/components/Contact/HeroSection";
import ContactformSection from "@/components/Contact/ContactformSection";
import ContactmethodsSection from "@/components/Contact/ContactmethodsSection";
import Faqsection from "@/components/Contact/Faqsection";
import CtsSection from "@/components/Contact/CtsSection";
function Page() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection />
      <ContactmethodsSection />
      <ContactformSection />
      <Faqsection />
      <CtsSection />
    </main>
  );
}

export default Page;