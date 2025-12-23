import { Search } from "lucide-react";
import { categorias } from "@/data/recipes";

interface RecipeFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const RecipeFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}: RecipeFiltersProps) => {
  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar receitas..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => onCategoryChange(categoria)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === categoria
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-muted border border-border"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilters;
