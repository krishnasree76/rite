import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
// import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        {/* <Careers /> */}
        <Contact />
        <Map />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default Index;
