import { Heart, Clock, Users } from "lucide-react";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <article
      onClick={onClick}
      className="recipe-card cursor-pointer group"
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent z-10" />
        {recipe.isFavorite && (
          <div className="absolute top-3 right-3 z-20">
            <Heart className="w-5 h-5 fill-primary text-primary" />
          </div>
        )}
        <div 
          className="absolute inset-0 bg-sage/30 flex items-center justify-center"
          style={{
            backgroundImage: recipe.imageUrl ? `url(${recipe.imageUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {!recipe.imageUrl && (
            <span className="font-display text-4xl text-foreground/20">
              {recipe.title.charAt(0)}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <span className="bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            {recipe.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
