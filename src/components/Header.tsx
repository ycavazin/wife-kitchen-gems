import { ChefHat } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <ChefHat className="w-8 h-8 text-primary" />
          <h1 className="font-display text-2xl font-semibold text-foreground">
            Our Family Recipes
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
