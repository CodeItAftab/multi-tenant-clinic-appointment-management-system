import HeroSection from "@/components/Timing&Location/HeroSection"; 
import TimingsSection from "@/components/Timing&Location/TimingsSection";
import LocationSection from "@/components/Timing&Location/LocationSection";
import QuickInfoSection from "@/components/Timing&Location/QuickinfoSection";
import FaqSection from "@/components/Timing&Location/FaqSection";
import CtasSection from "@/components/Timing&Location/CtasSection";
function Page() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection />
      <TimingsSection />
      <LocationSection />
      <QuickInfoSection />
      <FaqSection />
      <CtasSection />
    </main>
  );
}

export default Page;