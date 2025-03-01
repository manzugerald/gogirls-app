import Footer from "@components/footer"
import Hero from "@components/hero"
import ImageTextCard from "@components/imagecard"
import NavBar from "@components/navbar"
import TextButtonComponent from "@components/textButton"
import TextImageLeft from "@components/textImageLeft"
import TextImageRight from "@components/textImageRight"
import Reach from "@components/reach"
import ContactForm from "@components/contact"
import VisionMissionFocus from "@components/visionMissionFocus"
import PartnerLogos from "@components/partnerLogos"
import HeroVideo from "@components/heroVideo"

const Home = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar spans across the full width */}
      <div className="w-full">
        <NavBar />
        <HeroVideo />
        {/* <Hero /> */}
        <Reach />
        <TextImageLeft />
        <VisionMissionFocus />
        <ContactForm />
      </div>
    {/* Main content area */}
    <main className="bg-white-100 flex-grow"> 
        {/* Container for ImageTextCards */}
        
        {/* Placeholder for dynamic content */}
        {children}
      </main>
      {/* Footer spans across the full width */}
      <div className="w-full">
        <PartnerLogos />
        <Footer />
      </div>
    </div>
  )
}

export default Home
