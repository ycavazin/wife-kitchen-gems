const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://drive.google.com/uc?export=view&id=17HjNapTpv-PB6wf5cBtbTI9mH5NzkFyx')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <p className="text-primary font-medium mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Feito com Amor
        </p>
        <h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Receitas da Juzinha
        </h2>
        <p 
          className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Uma coleção de receitas queridas passadas de geração em geração, 
          cada uma contando uma história de amor, tradição e refeições deliciosas.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
