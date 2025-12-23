import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  if (!recipe || !recipe.nome) {
    return null;
  }

  const imageUrl = recipe.fotoUrl;

  return (
    <article
      onClick={onClick}
      className="recipe-card cursor-pointer group"
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent z-10" />
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={recipe.nome}
            className="absolute inset-0 w-full h-full object-cover object-top z-20"
            onError={(e) => {
              // Hide image on error and show fallback
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-sage/30 flex items-center justify-center"
        >
          <span className="font-display text-5xl text-foreground/20">
            {recipe.nome.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <span className="bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            {recipe.categoria}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {recipe.nome}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {recipe.modoPreparo?.substring(0, 100) || ''}...
        </p>
      </div>
    </article>
  );
};

export default RecipeCard;
