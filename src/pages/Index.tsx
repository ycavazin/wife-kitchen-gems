import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecipeFilters from "@/components/RecipeFilters";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";
import { fetchRecipes, Recipe } from "@/data/recipes";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetchRecipes().then(setRecipes).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = urlParams.get('recipe');
      if (recipeId) {
        const recipeFromUrl = recipes.find(r => r.id === recipeId);
        if (recipeFromUrl) {
          setSelectedRecipe(recipeFromUrl);
        }
      }
    }
  }, [recipes]);

  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = urlParams.get('recipe');
      const recipeFromUrl = recipes.find(r => r.id === recipeId);
      setSelectedRecipe(recipeFromUrl || null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [recipes]);

  const handleSelectRecipe = (recipe: Recipe) => {
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', recipe.id);
    window.history.pushState({}, '', url);
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('recipe');
    window.history.replaceState({}, '', url);
    setSelectedRecipe(null);
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredientes.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || recipe.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, recipes]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <RecipeFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {loading ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Carregando receitas...
            </p>
          </div>
        ) : (
          <>
            <p className="text-center text-muted-foreground mt-6 mb-2">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => handleSelectRecipe(recipe)}
                  />
                </div>
              ))}
            </div>
            
            {filteredRecipes.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhuma receita encontrada. Tente outra busca ou categoria.
                </p>
              </div>
            )}
          </>
        )}
      </main>
      
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Feito com amor para a Juzinha ❤️
          </p>
        </div>
      </footer>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
