import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import portfolioCollection from "@/assets/portfolio-collection.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Geometric Mandala",
    category: "Geometric",
    image: portfolioCollection,
    description: "Intricate mandala design with perfect symmetry"
  },
  {
    id: 2,
    title: "Portrait Realism",
    category: "Realistic",
    image: portfolioCollection,
    description: "Photorealistic portrait capturing every detail"
  },
  {
    id: 3,
    title: "Japanese Koi",
    category: "Traditional",
    image: portfolioCollection,
    description: "Traditional Japanese koi with flowing water elements"
  },
  {
    id: 4,
    title: "Blackwork Floral",
    category: "Blackwork",
    image: portfolioCollection,
    description: "Bold blackwork botanical design"
  },
  {
    id: 5,
    title: "Neo-Traditional Rose",
    category: "Neo-Traditional",
    image: portfolioCollection,
    description: "Modern twist on classic rose tattoo"
  },
  {
    id: 6,
    title: "Minimalist Line Art",
    category: "Minimalist",
    image: portfolioCollection,
    description: "Clean, minimal line work with maximum impact"
  }
];

const categories = ["All", "Geometric", "Realistic", "Traditional", "Blackwork", "Neo-Traditional", "Minimalist"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real work. No filters. Just art.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge variant="outline" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <Badge variant="outline">
                      {item.category}
                    </Badge>
                    <h3 className="font-display text-3xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                    <Button variant="hero" className="w-full">
                      Book Similar Design
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;