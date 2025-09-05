import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initial: "S",
    rating: 5,
    review: "Absolutely incredible experience at InkHouse! The artist was professional, the space was immaculate, and my custom tattoo exceeded all expectations. The attention to detail is unmatched.",
    service: "Custom Tattoo",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Marcus Chen",
    initial: "M",
    rating: 5,
    review: "Had a challenging cover-up done here and I'm blown away by the results. They transformed what I thought was impossible into a beautiful piece of art. Highly recommend!",
    service: "Cover-up",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    initial: "E",
    rating: 5,
    review: "From consultation to aftercare, everything was perfect. The studio is clean, professional, and the staff makes you feel comfortable throughout the entire process. Worth every penny!",
    service: "Touch-up",
    date: "3 weeks ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-secondary">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-lg font-semibold">5.0 Average Rating</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their InkHouse experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={review.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {review.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.service} • {review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient-primary">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient-secondary">8</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient-primary">100%</div>
            <div className="text-muted-foreground">Sterile Environment</div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            See more reviews on Google, Yelp, and Facebook
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors">
              Google Reviews
            </button>
            <button className="px-6 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors">
              Yelp Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;