import heroImage from "@/assets/hero-cooking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <p className="text-primary font-medium mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Made with Love
        </p>
        <h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Family Recipes
        </h2>
        <p 
          className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          A collection of cherished recipes passed down through generations, 
          each one telling a story of love, tradition, and delicious meals.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
