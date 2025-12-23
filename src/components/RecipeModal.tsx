import { ChefHat } from "lucide-react";
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
              <div className="absolute inset-0 bg-sage/30 flex items-center justify-center">
                <ChefHat className="w-16 h-16 text-foreground/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
          </div>

          <div className="p-6 -mt-12 relative">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
              {recipe.categoria}
            </span>
            
            <DialogHeader className="mt-4">
              <DialogTitle className="font-display text-3xl font-semibold text-foreground">
                {recipe.nome}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-6">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Ingredientes
              </h4>
              <div className="bg-muted/50 rounded-lg p-4">
                <pre className="text-foreground text-sm whitespace-pre-wrap font-body leading-relaxed">
                  {recipe.ingredientes}
                </pre>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                Modo de Preparo
              </h4>
              <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                {recipe.modoPreparo}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
