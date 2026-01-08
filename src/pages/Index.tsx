import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Lookbook />
      <EmailSignup />
      <Footer />
    </main>
  );
};

export default Index;
