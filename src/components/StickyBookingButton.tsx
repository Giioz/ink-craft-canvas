import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const triggerHeight = 300; // Show after scrolling 300px
      
      if (scrolled > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isHidden || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-gradient-card backdrop-blur-md border border-border/50 rounded-full shadow-glow p-2 pr-4">
        <div className="flex items-center gap-3">
          <Button
            variant="hero"
            size="sm"
            onClick={scrollToBooking}
            className="rounded-full px-6"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </Button>
          
          <button
            onClick={() => setIsHidden(true)}
            className="p-1 hover:bg-accent rounded-full transition-colors"
            aria-label="Close booking button"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingButton;