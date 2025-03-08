import NavBar from "@components/navbar";
import HeroVideo from "@components/heroVideo";
import Reach from "@components/reach";
import TextImageLeft from "@components/textImageLeft";
import VisionMissionFocus from "@components/visionMissionFocus";
import ContactForm from "@components/contact";
import PartnerLogos from "@components/partnerLogos";

const Home = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar and top-level components */}
      <div className="w-full">
        <NavBar />
        <HeroVideo />
        <Reach />
        <TextImageLeft />
        <VisionMissionFocus />
        <ContactForm />
      </div>

      {/* Main content area */}
      <main className="bg-white-100 flex-grow">
        {children}
      </main>

      {/* Footer section */}
      <div className="w-full">
        <PartnerLogos />
      </div>
    </div>
  );
};

export default Home;