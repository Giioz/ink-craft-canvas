import { ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Instagram posts data - replace with actual Instagram API data
const instagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop",
    caption: "Fresh blackwork piece completed today! 🖤",
    permalink: "https://instagram.com/p/example1",
    timestamp: "2024-01-15"
  },
  {
    id: "2", 
    image: "https://images.unsplash.com/photo-1590246815177-c60003e65562?w=400&h=400&fit=crop",
    caption: "Geometric mandala in progress ⚡",
    permalink: "https://instagram.com/p/example2",
    timestamp: "2024-01-14"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
    caption: "Neo-traditional rose sleeve session 🌹",
    permalink: "https://instagram.com/p/example3", 
    timestamp: "2024-01-13"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1608020932051-56d6b5dd5dc1?w=400&h=400&fit=crop",
    caption: "Portrait realism coming together beautifully",
    permalink: "https://instagram.com/p/example4",
    timestamp: "2024-01-12"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop",
    caption: "Japanese koi and water elements 🐟",
    permalink: "https://instagram.com/p/example5",
    timestamp: "2024-01-11"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1590246815177-c60003e65562?w=400&h=400&fit=crop",
    caption: "Minimalist line work session ✨",
    permalink: "https://instagram.com/p/example6",
    timestamp: "2024-01-10"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Follow Our <span className="text-gradient-primary">Journey</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See our latest work and behind-the-scenes moments on Instagram
          </p>
          
          {/* Instagram Profile Link */}
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full"
            onClick={() => window.open('https://instagram.com/inkhouse_studio', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            @inkhouse_studio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(post.permalink, '_blank')}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                {/* Instagram Post Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Instagram Icon Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Post Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground text-sm line-clamp-2 font-medium">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-muted-foreground text-xs">
                      {new Date(post.timestamp).toLocaleDateString()}
                    </span>
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            className="rounded-full"
            onClick={() => window.open('https://instagram.com/inkhouse_studio', '_blank')}
          >
            View All Posts
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;