import '@styles/globals.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
import Breadcrumb from '@components/breadcrumb';
import Footer from '@components/footer';
import Hero from '@components/hero';
import Navbar from '@components/navbar';
import PartnerLogos from '@components/partnerLogos';


export const metadata = {
  title: 'GoGirls ICT Initiative',
  description: 'GoGirls South Sudan',
};

//#e8dde0
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app bg-[#e8dde0] min-h-screen flex flex-col">
          <Navbar />
          {/* <Breadcrumb /> */}
          <div className="app bg-[#e8dde0] min-h-screen p-8 z-10 relative">
            {children}
          </div>
          <PartnerLogos />
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
