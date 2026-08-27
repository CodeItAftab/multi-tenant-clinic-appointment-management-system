
import Healthcare from "@/components/About/Healthcare";
import Info from "@/components/About/Info";
import Story from "@/components/About/Story";
import Choose from "@/components/About/Choose";
import Work from "@/components/About/Work";
import Verify from "@/components/About/Verify";
import Faq from "@/components/About/Faq";
import Partner from "@/components/About/Partner";
function AboutPage() {

    return (
        <div className="w-full bg-white">
            <Healthcare />
            <Info />
            <Story />
            <Choose />
            <Work />
            <Verify />
            <Faq />
            <Partner />
        </div>
    );
}

export default AboutPage;