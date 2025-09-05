import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import studioInterior from "@/assets/studio-interior.jpg";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Book Your <span className="text-gradient-primary">Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Schedule a free consultation with our artists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center">
                Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom Tattoo</SelectItem>
                      <SelectItem value="coverup">Cover-up</SelectItem>
                      <SelectItem value="touchup">Touch-up</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="size">Estimated Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (2-4 inches)</SelectItem>
                      <SelectItem value="medium">Medium (4-8 inches)</SelectItem>
                      <SelectItem value="large">Large (8+ inches)</SelectItem>
                      <SelectItem value="session">Full Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Idea</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Tell us about your tattoo idea, style preferences, placement, etc."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Free Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Studio Info & Image */}
          <div className="space-y-8">
            {/* Studio Image */}
            <div className="relative overflow-hidden rounded-xl shadow-elegant">
              <img 
                src={studioInterior}
                alt="InkHouse tattoo studio interior"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Our Studio
                </h3>
                <p className="text-muted-foreground">
                  Clean, professional, and welcoming environment
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-xl">
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">123 Art Street</p>
                    <p className="text-muted-foreground text-sm">Creative District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">(555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">hello@inkhouse.studio</p>
                    <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Tue - Sat: 11am - 8pm</p>
                    <p className="text-muted-foreground text-sm">Closed Sunday & Monday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="p-6 bg-accent rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Emergency Aftercare</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Need help with healing? We're here for you 24/7.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Emergency Contact: (555) 987-6543
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;