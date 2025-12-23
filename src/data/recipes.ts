export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
  isFavorite?: boolean;
}

export const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Grandmother's Tomato Soup",
    description: "A rich, comforting tomato soup passed down through generations. Perfect for cold evenings.",
    category: "Soups",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      "2 lbs fresh tomatoes",
      "1 large onion, diced",
      "4 cloves garlic, minced",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Roast tomatoes at 400°F for 25 minutes until slightly charred.",
      "Sauté onion and garlic in olive oil until softened.",
      "Add roasted tomatoes and broth, simmer for 20 minutes.",
      "Blend until smooth, stir in cream.",
      "Season and garnish with fresh basil."
    ],
    isFavorite: true
  },
  {
    id: "2",
    title: "Herb-Crusted Salmon",
    description: "Tender salmon with a crispy herb crust. A family favorite for special occasions.",
    category: "Main Dishes",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      "4 salmon fillets",
      "1 cup breadcrumbs",
      "2 tbsp fresh dill, chopped",
      "2 tbsp fresh parsley, chopped",
      "Zest of 1 lemon",
      "3 tbsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Mix breadcrumbs with herbs, lemon zest, and olive oil.",
      "Season salmon with salt and pepper.",
      "Press herb mixture onto salmon fillets.",
      "Bake at 375°F for 18-20 minutes until golden.",
      "Serve with lemon wedges."
    ]
  },
  {
    id: "3",
    title: "Classic Apple Pie",
    description: "The quintessential dessert with a flaky crust and spiced apple filling.",
    category: "Desserts",
    prepTime: "30 min",
    cookTime: "55 min",
    servings: 8,
    ingredients: [
      "6 medium apples, sliced",
      "3/4 cup sugar",
      "2 tbsp flour",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "Pastry for double-crust pie",
      "2 tbsp butter"
    ],
    instructions: [
      "Prepare pie crust and line 9-inch pie dish.",
      "Mix apples with sugar, flour, and spices.",
      "Fill crust with apple mixture, dot with butter.",
      "Cover with top crust, crimp edges, cut vents.",
      "Bake at 425°F for 45-55 minutes until golden."
    ],
    isFavorite: true
  },
  {
    id: "4",
    title: "Mediterranean Pasta Salad",
    description: "Fresh and vibrant pasta salad with olives, feta, and sun-dried tomatoes.",
    category: "Salads",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 6,
    ingredients: [
      "1 lb rotini pasta",
      "1 cup cherry tomatoes, halved",
      "1/2 cup kalamata olives",
      "1 cup feta cheese, crumbled",
      "1/2 cup sun-dried tomatoes",
      "1/4 cup olive oil",
      "Fresh oregano and basil"
    ],
    instructions: [
      "Cook pasta al dente, rinse with cold water.",
      "Combine all vegetables and cheese in large bowl.",
      "Whisk olive oil with herbs for dressing.",
      "Toss pasta with vegetables and dressing.",
      "Chill for at least 1 hour before serving."
    ]
  },
  {
    id: "5",
    title: "Rustic Garlic Bread",
    description: "Crusty bread with a garlic butter spread, perfect alongside any meal.",
    category: "Sides",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 8,
    ingredients: [
      "1 large French baguette",
      "1/2 cup butter, softened",
      "4 cloves garlic, minced",
      "2 tbsp fresh parsley, chopped",
      "1/4 cup Parmesan cheese",
      "Pinch of salt"
    ],
    instructions: [
      "Slice baguette in half lengthwise.",
      "Mix butter with garlic, parsley, and salt.",
      "Spread generously on bread halves.",
      "Top with Parmesan cheese.",
      "Bake at 400°F for 12-15 minutes until golden."
    ]
  },
  {
    id: "6",
    title: "Lemon Herb Roasted Chicken",
    description: "Juicy whole roasted chicken with crispy skin and aromatic herbs.",
    category: "Main Dishes",
    prepTime: "20 min",
    cookTime: "90 min",
    servings: 6,
    ingredients: [
      "1 whole chicken (4-5 lbs)",
      "2 lemons",
      "Fresh thyme and rosemary",
      "6 cloves garlic",
      "4 tbsp butter",
      "Salt and pepper"
    ],
    instructions: [
      "Pat chicken dry and season inside and out.",
      "Stuff cavity with lemon, herbs, and garlic.",
      "Rub butter under and over skin.",
      "Roast at 425°F for 1.5 hours until juices run clear.",
      "Rest 15 minutes before carving."
    ],
    isFavorite: true
  }
];

export const categories = ["All", "Soups", "Main Dishes", "Salads", "Sides", "Desserts"];
