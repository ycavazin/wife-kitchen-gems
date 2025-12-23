import { X, Clock, Users, ChefHat, Heart } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden bg-card">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            <div className="aspect-video bg-muted relative">
              <div 
                className="absolute inset-0 bg-sage/30 flex items-center justify-center"
                style={{
                  backgroundImage: recipe.imageUrl ? `url(${recipe.imageUrl})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {!recipe.imageUrl && (
                  <ChefHat className="w-16 h-16 text-foreground/20" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            
            {recipe.isFavorite && (
              <div className="absolute top-4 right-4">
                <Heart className="w-6 h-6 fill-primary text-primary" />
              </div>
            )}
          </div>

          <div className="p-6 -mt-12 relative">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
              {recipe.category}
            </span>
            
            <DialogHeader className="mt-4">
              <DialogTitle className="font-display text-3xl font-semibold text-foreground">
                {recipe.title}
              </DialogTitle>
            </DialogHeader>
            
            <p className="text-muted-foreground mt-2">{recipe.description}</p>
            
            <div className="flex items-center gap-6 mt-6 py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Ingredients
              </h4>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Instructions
              </h4>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-foreground pt-0.5">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
