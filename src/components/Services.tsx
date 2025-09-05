import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, RefreshCw, Sparkles, Clock, DollarSign, Star } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Tattoo",
    description: "Original artwork designed specifically for you. From concept to completion, we bring your vision to life with precision and artistry.",
    duration: "2+ hours",
    price: "Price on request",
    features: ["Free consultation", "Custom design", "Touch-up included"],
    popular: true
  },
  {
    icon: RefreshCw,
    title: "Cover-up",
    description: "Transform old or unwanted tattoos into beautiful new artwork. We specialize in creative solutions for challenging cover-ups.",
    duration: "3+ hours",
    price: "Starting at $200",
    features: ["Design consultation", "Multiple sessions if needed", "Before/after care"],
    popular: false
  },
  {
    icon: Sparkles,
    title: "Touch-up",
    description: "Refresh and enhance your existing tattoos. Keep your ink looking vibrant and sharp with professional touch-up services.",
    duration: "1-2 hours",
    price: "Starting at $80",
    features: ["Color restoration", "Line work enhancement", "Quick healing"],
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-gradient-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tattoo services tailored to your unique style and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`relative bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up ${
                  service.popular ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-6 bg-gradient-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-display text-2xl text-gradient-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  
                  {/* Pricing Info */}
                  <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <DollarSign className="w-4 h-4 text-secondary" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full mt-6"
                  >
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center p-8 bg-muted/30 rounded-xl">
          <h3 className="font-display text-2xl font-semibold mb-4">
            All Services Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>• Sterile equipment & environment</div>
            <div>• Aftercare instructions & products</div>
            <div>• Free touch-up within 6 months</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;