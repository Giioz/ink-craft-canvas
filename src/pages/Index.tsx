import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import StickyBookingButton from "@/components/StickyBookingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Portfolio />
      <Services />
      <Reviews />
      <BookingForm />
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
