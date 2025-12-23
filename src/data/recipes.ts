export interface Recipe {
  id: string;
  nome: string;
  categoria: string;
  ingredientes: string;
  modoPreparo: string;
  fotoUrl?: string;
}

export const receitas: Recipe[] = [
  {
    id: "1",
    nome: "Bolo Cenoura",
    categoria: "Doce",
    ingredientes: `• 3 cenouras médias
• 1 xícara de óleo
• 4 ovos
• 3 xícaras de farinha de trigo
• 2 xícaras de açúcar
• 3 colheres (chá) de fermento
Cobertura:
• 2 colheres (sopa) de nescau
• 2 colheres (sopa) de açúcar
• 1 colher (sopa) de manteiga
• 1 colher (sopa) de leite.`,
    modoPreparo: `Massa: Bater no liquidificador a cenoura, o óleo e os ovos. Em uma tigela separada, misture a farinha, o açúcar e o fermento aos poucos. Junte as duas misturas.
Cobertura: Levar ao fogo até engrossar e cobrir o bolo.`,
    fotoUrl: "https://drive.google.com/file/d/1UhqylOQYdU4n9rAcpT4RD_Fqdr67IFpT/view?usp=sharing"
  },
  {
    id: "2",
    nome: "Bolo Chiffon",
    categoria: "Doce",
    ingredientes: `• 1/2 xícara de chocolate em pó
• 1 xícara de água quente
• 3 claras em neve
• 2 xícaras de açúcar
• 2 xícaras de farinha de trigo
• 1/2 xícara de óleo
• Baunilha
• 2 Colheres (café) de pó royal
Cobertura:
• 1 ovo (clara em neve)
• 1 e 1/2 colher (chá) açúcar
• 2 e 1/2 colher (chá) chocolate
• 1 pacote de manteiga
• 1/2 copo de rum`,
    modoPreparo: `Misturar os ingredientes secos. Adicionar o óleo, a baunilha e a água quente (mencionada no topo). Incorporar as claras em neve por último. Assar em forma untada e enfarinhada.
Cobertura: Bata na batedeira e cubra o bolo`,
    fotoUrl: "https://drive.google.com/file/d/14fOHGahyxABptoXT-I6rhj81R3QCB8ws/view?usp=sharing"
  },
  {
    id: "3",
    nome: "Bolo de Banana",
    categoria: "Doce",
    ingredientes: `• 1 ovo
• 2 colheres de manteiga
• 1 xícara de açúcar
• 1 xícara de leite
• 1 pitada de sal
• 2 xícaras de farinha
• 1 colher de fermento
• 4 bananas
• Canela e açúcar para polvilhar`,
    modoPreparo: `Bater a massa normalmente. Colocar em forma untada, dispor as bananas por cima e polvilhar com açúcar e canela antes de assar.`,
    fotoUrl: "https://drive.google.com/file/d/1dTZCSIBcjd4v4BbpuR_bxwyPpZh35gyQ/view?usp=sharing"
  },
  {
    id: "4",
    nome: "Bolo de Cenoura (Cidinha)",
    categoria: "Doce",
    ingredientes: `Massa:
• 3 cenouras médias raladas
• 2 xícaras de açúcar
• 1 xícara de óleo
• 1 pitada de sal
• 3 ovos
• 1 colher de fermento em pó
Cobertura de chocolate:
• 1 xícara de achocolatado
• 1/2 xícara de açúcar
• 4 colheres de leite
• 1 colher de margarina`,
    modoPreparo: `Massa: Bater no liquidificador. Numa vasilha colocar 3 xícaras de farinha e acrescentar a mistura do liquidificador e o fermento em pó.
Cobertura: Levar ao fogo até engrossar.`,
    fotoUrl: "https://drive.google.com/file/d/1umGKBRoM1iuXyOTOwj4pVMtzTVSGXWLz/view?usp=sharing"
  },
  {
    id: "5",
    nome: "Bolo de Chocolate (Tia Angelica)",
    categoria: "Doce",
    ingredientes: `• 2 colheres (sopa) de manteiga
• 2 xícaras (chá) de açúcar
• 4 gemas
• 3 colheres (sopa) de chocolate
• 2 xícaras (chá) de farinha
• 1 vidro de leite de coco
• 1 colher (sopa) de pó royal
• 4 claras em neve
Cobertura:
• 2 xícaras (chá) de leite
• 2 colheres (sopa) de chocolate
• 1 xícara (chá) de açúcar
• 1 colher (sopa) de manteiga`,
    modoPreparo: `Massa: Bater bem a manteiga com as gemas e o açúcar. Adicionar a farinha aos poucos e o leite de coco. Juntar o chocolate e o pó royal. Por último, adicionar as claras em neve.
Cobertura: Levar os ingredientes ao fogo até ferver e jogar sobre o bolo.`,
    fotoUrl: "https://drive.google.com/file/d/1da8SU5Uwq1Qe3RA0LKjm0MZIcdB0_m2s/view?usp=sharing"
  },
  {
    id: "6",
    nome: "Bolo de Fubá",
    categoria: "Doce",
    ingredientes: `• 2 copos de fubá
• 2 copos de farinha de trigo
• 2 ovos
• 1 copo de óleo
• 2 copos de leite
• 1 e 1/2 copo de açúcar
• 1 colher (cheia) de fermento
• Canela em pó
• 1 pitada de sal`,
    modoPreparo: `Misturar os ingredientes secos (fubá, farinha, açúcar, canela, sal e fermento). Adicionar os ovos, o óleo e o leite. Misturar bem até ficar homogêneo e levar para assar em forma untada.`,
    fotoUrl: "https://drive.google.com/file/d/1KFJfg7ewDn5WD6tbvRQFCcaICsB8g-j-/view?usp=sharing"
  },
  {
    id: "7",
    nome: "Bolo Julia (Peteteco)",
    categoria: "Doce",
    ingredientes: `• 2 xícaras de açúcar
• 3/4 xícara de óleo
• 1 xícara de água fervendo
• 1 xícara de chocolate em pó
• 1 colher de fermento
• 3 xícaras de farinha
• 3 ovos`,
    modoPreparo: `Misturar ovos, açúcar e óleo. Adicionar chocolate, farinha e a água fervendo. Misturar bem e colocar o fermento. Cuidado para não bater demais para o bolo ficar bem fofo. Unte bem a forma. Se usar achocolatado, colocar menos açúcar.`,
    fotoUrl: "https://drive.google.com/file/d/1jWdvYjvzPMCmX4o9-iCCJ2gMw5_rv3RG/view?usp=sharing"
  },
  {
    id: "8",
    nome: "Bolo Nega Maluca",
    categoria: "Doce",
    ingredientes: `• 2 colheres de manteiga
• 2 xícaras de açúcar
• 3 xícaras de farinha de trigo
• 1 xícara de leite
• 5 colheres (sopa) de chocolate (Nescau)
• 3 ovos (claras em neve)
• 1 colher (sopa) de pó royal
• 1 pitada de sal
Cobertura: 
• 1 colher sopa de manteiga
• 1/2 xícara de açúcar
• 3 colheres sopa de nescau
• 1 colher de sopa de leite.`,
    modoPreparo: `Massa: Bater bem as gemas, o açúcar e a manteiga. Junte os ingredientes secos (nescau, fermento e sal) alternadamente com o leite. Adicionar as claras em neve. Assar em forno quente e forma untada e farinhada.
Cobertura: Levar os ingredientes ao fogo, mexendo bem, quando levantar fervura, retire e jogue sobre o bolo.`,
    fotoUrl: "https://drive.google.com/file/d/1LE61XRIYr2oZNGtBFKZUQ_vDBxnHlmmX/view?usp=sharing"
  },
  {
    id: "9",
    nome: "Bolo Simples",
    categoria: "Doce",
    ingredientes: `• 3 ovos
• 1 e 1/2 xícaras de açúcar
• 1 colher de margarina
• 1 pitada de sal
• 1 copo de leite
• Farinha (até dar o ponto)
• 1 colher de pó royal`,
    modoPreparo: `Bater os ovos, açúcar e margarina. Adicionar o leite e a farinha aos poucos. Por fim, o fermento.`,
    fotoUrl: "https://drive.google.com/file/d/1UOWO5NLVj22JFiTkkPXnWS72wa2ztDkS/view?usp=sharing"
  },
  {
    id: "10",
    nome: "Massa Esfirra / Calzone",
    categoria: "Salgado",
    ingredientes: `Massa:
• 30g de fermento biológico
• 1 copo americano de óleo (faltando uns dois dedos)
• 1 colher (sopa) de açúcar
• 1 copo americano de água morna
• 1 xícara de farinha de trigo
• Sal a gosto
Recheio:
• Carne moída crua
• Sal
• Pimenta do reino
• Tomate
• Salsinha
• Um toque de limão`,
    modoPreparo: `Desmanche o fermento na água morna com o açúcar. Adicione o sal e o óleo. Adicione a farinha aos poucos até a massa ficar homogênea. Abrir com o rolo, rechear e levar para assar. Passar gema por cima antes de ir ao forno com assadeira untada.`,
    fotoUrl: "https://drive.google.com/file/d/1VOeDrzFlNPEmdGQ1sAWquY_ZYG3dnnLr/view?usp=sharing"
  },
  {
    id: "11",
    nome: "Pão de Queijo",
    categoria: "Salgado",
    ingredientes: `• 4 copos (americano) de polvilho doce
• 2 copos de leite
• 3/4 copo de margarina ou óleo
• 2 ovos
• Queijo minas ou meia-cura ralado
• Sal a gosto`,
    modoPreparo: `Ferva a margarina e o leite, escaldando o polvilho doce. Amasse muito bem, acrescente o queijo e o sal. Se necessário, dê o ponto com água fria. Assar em forno a 180°.`,
    fotoUrl: "https://drive.google.com/file/d/1fJNBrLZA6lQmbqNoYRfdkC0il8AlL-7g/view?usp=sharing"
  },
  {
    id: "12",
    nome: "Pão Delícia",
    categoria: "Salgado",
    ingredientes: `• 2 colheres (sopa) de fermento de pão
• 2 colheres (sopa) de açúcar
• 1 colher (sopa) de manteiga
• Sal a gosto
• 1 xícara de leite
• 4 ovos batidos
• Farinha para dar ponto de massa de pão
• Presunto
• Queijo
• Creme de leite`,
    modoPreparo: `Amassar todos os ingredientes. Abrir a metade da massa, forrar a assadeira. Coloque 1 camada de creme de leite e outra de presunto e mussarela. Abrir a outra massa e cubra, pincele com ovo.`,
    fotoUrl: "https://drive.google.com/file/d/12LvZbMrtqFH006lJ4kowEGK6ojK1twcF/view?usp=sharing"
  },
  {
    id: "13",
    nome: "Pralinê",
    categoria: "Doce",
    ingredientes: `• 1 copo de amendoim cru
• 1 copo de açúcar
• 1/2 copo de água
• 1 ponta de colher de pó Royal`,
    modoPreparo: `Levar ao fogo mexendo sempre até açucarar e leve ao fogo até derreter`,
    fotoUrl: "https://drive.google.com/file/d/10Q5r2DkwXqMKaJF1GTjgSSyQiThFlJVK/view?usp=sharing"
  },
  {
    id: "14",
    nome: "Queijadinha",
    categoria: "Doce",
    ingredientes: `• 1 pote (100g) de coco (Sococo)
• 1 ovo
• 1 lata de leite condensado`,
    modoPreparo: `Bater tudo no liquidificador. Colocar nas forminhas de papel pela metade. Assar em assadeira grande.`,
    fotoUrl: "https://drive.google.com/file/d/1ovh8uXphUKXwDKu1FNHCMw80X9w3-m5V/view?usp=sharing"
  },
  {
    id: "15",
    nome: "Torta 3 Pingos",
    categoria: "Salgado",
    ingredientes: `Massa:
• 3 ovos
• 2 xícaras de farinha de trigo
• 1 colher de pó royal
• 2 xícaras de leite
• 1 xícara de óleo
• Sal a gosto
• Farinha de rosco para untar
Recheio:
• Frango ou palmito`,
    modoPreparo: `Bata tudo no liquidificador. Unte a forma com óleo e farinha de rosca.`,
    fotoUrl: "https://drive.google.com/file/d/1oST1XsgltFyTvkFkT5toSTqMAUMHcvH9/view?usp=sharing"
  },
  {
    id: "16",
    nome: "Torta de Limão",
    categoria: "Doce",
    ingredientes: `Massa:
• 1 xícara (chá) de açúcar
• 1 colher (sopa) de margarina
• 2 colheres (café) de fermento em pó
• 2 a 3 xícaras de farinha de trigo (até que a massa fique dura)

Recheio:
• 1 lata de leite condensado
• 1/2 xícara de caldo de limão
• 2 claras em neve
• 6 colheres (sopa) de açúcar`,
    modoPreparo: `Massa: Junte todos os ingredientes e faça uma massa, abrir com as mãos. Forrar um pirex untado, furar com garfo e levar ao forno para assar.
Recheio: Misturar o leite condensado com o caldo de limão, mexendo bem devagar até ficar firme. As claras em neve com açúcar tipo suspiro.
Finalização: Depois da massa corada, colocar o recheio na massa assada ainda quente, coloque o suspiro e espalhe sobre o recheio e fazer desenho com o garfo e levar ao forno para corar.`,
    fotoUrl: "https://drive.google.com/file/d/1ZWHtV_QympBu5EEeAY2D0EL1s10q5n7Y/view?usp=sharing"
  },
  {
    id: "17",
    nome: "Torta Paulista",
    categoria: "Doce",
    ingredientes: `• 250g de margarina
• 3 gemas passadas na peneira
• 2 xícaras de açúcar
• 1 lata de creme de leite
• 2 pacotes de bolacha maizena
• Meio pacote de amendoim torrado e moído
• 1 lata de leite condensado`,
    modoPreparo: `Creme: Bater na batedeira a margarina, gemas e açúcar. Adicionar o creme de leite por último (sem bater muito). Cozinhe 1 lata de leite condensado mais ou menos de 15 a 20 minutos.
Montagem: Alternar camadas de bolacha, creme e amendoim. Caso queira mais úmida, passe as bolachas no leite ou coloque no creme um pouco de leite.`,
    fotoUrl: "https://drive.google.com/file/d/1L-_X-9QMado3ev6O4Ry0dd9_gX6_X1q5/view?usp=sharing"
  }
];

export const categorias = ["Todas", "Doce", "Salgado"];
