import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold mb-4 text-gradient-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! This page doesn't exist</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow underline underline-offset-4 transition-colors"
        >
          Return to InkHouse
        </a>
      </div>
    </div>
  );
};

export default NotFound;
