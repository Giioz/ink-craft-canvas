import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional tattoo artist at work in InkHouse studio"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient-primary">Ink</span>{" "}
          <span className="text-foreground">That</span>{" "}
          <span className="text-gradient-secondary">Speaks</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
          Professional tattoo artistry with a personal touch. Book your free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:0.4s]">
          <Button variant="hero" size="lg" className="group">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline-light" size="lg" className="group">
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground animate-fade-in-up [animation-delay:0.6s]">
          <div className="flex items-center gap-2">
            <Instagram className="h-5 w-5" />
            <span>@inkhouse_studio</span>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div>
            <span className="font-semibold text-foreground">500+</span> Happy Clients
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;