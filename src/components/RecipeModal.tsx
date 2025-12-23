import { useState } from "react";
import { toast } from "sonner";
import { ChefHat, Expand, Minimize, Share } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!recipe) return null;

  const imageUrl = recipe.fotoUrl;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/?recipe=${recipe.id}`;
    const shareData = {
      title: recipe.nome,
      text: `Confira esta receita: ${recipe.nome}`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast("Link da receita copiado para a área de transferência!");
      }
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
      toast("Não foi possível compartilhar a receita.", {
        description: "Ocorreu um erro. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden bg-card" aria-describedby={undefined}>
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            <div className={`bg-muted relative ${expanded ? '' : 'overflow-hidden'}`}>
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt={recipe.nome}
                    className={`w-full h-auto ${expanded ? 'object-none' : 'object-contain'}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    title={expanded ? "Reduzir imagem" : "Expandir imagem"}
                  >
                    {expanded ? <Minimize className="w-5 h-5" /> : <Expand className="w-5 h-5" />}
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 bg-sage/30 flex items-center justify-center">
                  <ChefHat className="w-16 h-16 text-foreground/20" />
                </div>
              )}
            </div>
          </div>

          <div className="p-6 -mt-12 relative">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
              {recipe.categoria}
            </span>
            
            <DialogHeader className="mt-4 flex flex-row items-center justify-between">
              <DialogTitle className="font-display text-3xl font-semibold text-foreground">
                {recipe.nome}
              </DialogTitle>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share className="w-5 h-5" />
              </Button>
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
