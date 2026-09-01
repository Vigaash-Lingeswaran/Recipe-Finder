const recipes = [ 
  { 
    name: "Scrambled Eggs", 
    ingredients: ["egg", "butter", "salt"],
    instructions: [
      "Whisk eggs and salt in a bowl.",
      "Melt butter in a pan over medium-low heat.",
      "Pour in eggs and stir gently until soft curds form."
    ],
    source: "https://incredibleegg.org"
  }, 
  { 
    name: "Cheese Omelet", 
    ingredients: ["egg", "cheese", "butter"],
    instructions: [
      "Beat eggs thoroughly in a bowl.",
      "Melt butter in a skillet and add eggs.",
      "When edges set, add cheese, fold in half, and slide onto a plate."
    ],
    source: "https://bonappetit.com"
  }, 
  { 
    name: "Tomato Salad", 
    ingredients: ["tomato", "onion", "salt"],
    instructions: [
      "Slice tomatoes and thinly dice onions.",
      "Toss them together in a serving bowl.",
      "Season generously with salt before serving."
    ],
    source: "https://allrecipes.com"
  }, 
  { 
    name: "Grilled Cheese", 
    ingredients: ["bread", "cheese", "butter"],
    instructions: [
      "Butter one side of each slice of bread.",
      "Place cheese between the unbuttered sides.",
      "Grill in a pan over medium heat until golden and cheese melts."
    ],
    source: "https://foodnetwork.com"
  },
    {
    name: "Classic French Omelette",
    ingredients: ["egg", "butter", "chives", "salt", "white pepper"],
    instructions: [
      "Whisk eggs vigorously until completely smooth and uniform.",
      "Melt butter in a non-stick pan over medium-low heat without browning.",
      "Add eggs, shaking the pan and stirring rapidly with a spatula until soft curds form, then roll neatly and slide onto a plate."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Mushroom Risotto",
    ingredients: ["arborio rice", "mushrooms", "chicken stock", "white wine", "parmesan", "shallot", "butter"],
    instructions: [
      "Sauté sliced mushrooms and minced shallots in butter until golden.",
      "Add arborio rice, toast lightly, then pour in white wine and reduce.",
      "Gradually add warm chicken stock one ladle at a time, stirring constantly until creamy, and finish with parmesan."
    ],
    source: "https://bonappetit.com"
  },
  {
    name: "Shakshuka",
    ingredients: ["egg", "canned tomatoes", "bell pepper", "onion", "garlic", "cumin", "paprika", "feta"],
    instructions: [
      "Sauté diced onions, bell peppers, and garlic in a skillet until soft.",
      "Add crushed tomatoes, cumin, and paprika, simmering until thickened.",
      "Create small wells in the sauce, crack eggs inside, cover, and cook until whites are set."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Chicken Piccata",
    ingredients: ["chicken breast", "lemon juice", "caper", "chicken broth", "flour", "butter", "olive oil"],
    instructions: [
      "Dredge chicken cutlets in flour and sear in a skillet with olive oil and butter until golden.",
      "Remove chicken and deglaze the pan with lemon juice, chicken broth, and capers.",
      "Simmer the sauce until reduced, then return chicken to coat and warm through."
    ],
    source: "https://foodnetwork.com"
  },
  {
    name: "Classic Carbonara",
    ingredients: ["spaghetti", "guanciale", "pecorino romano", "egg yolk", "black pepper"],
    instructions: [
      "Boil spaghetti in salted water until al dente while crisping diced guanciale in a pan.",
      "Whisk egg yolks and grated pecorino romano together with plenty of cracked black pepper.",
      "Toss hot pasta with guanciale fat off the heat, then stir in the egg mixture quickly with pasta water to create a glossy sauce."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["beef sirloin", "mushrooms", "onion", "sour cream", "beef broth", "dijon mustard", "egg noodles"],
    instructions: [
      "Sear sliced beef sirloin quickly in a hot pan and set aside.",
      "Sauté mushrooms and onions in the same pan, then add beef broth and dijon mustard.",
      "Stir in sour cream, return the beef, heat gently without boiling, and serve over egg noodles."
    ],
    source: "https://allrecipes.com"
  },
  {
    name: "Shrimp Scampi",
    ingredients: ["shrimp", "linguine", "garlic", "white wine", "lemon", "butter", "red pepper flakes"],
    instructions: [
      "Cook linguine until al dente and sauté peeled shrimp in olive oil until pink, then remove.",
      "Sauté minced garlic and red pepper flakes in butter, then add white wine and lemon juice.",
      "Toss the pasta and shrimp into the pan sauce until well combined and glossy."
    ],
    source: "https://foodnetwork.com"
  },
  {
    name: "Ratatouille",
    ingredients: ["eggplant", "zucchini", "bell pepper", "tomato", "onion", "garlic", "herbes de provence"],
    instructions: [
      "Dice eggplant, zucchini, bell peppers, and onions into uniform pieces.",
      "Sauté each vegetable separately in olive oil to develop distinct flavors.",
      "Combine everything in a pot with garlic and herbes de provence, simmering gently until tender."
    ],
    source: "https://epicurious.com"
  },
  {
    name: "Eggplant Parmesan",
    ingredients: ["eggplant", "marinara", "mozzarella", "parmesan", "flour", "egg", "breadcrumbs"],
    instructions: [
      "Slice eggplant, salt to draw out moisture, then dredge in flour, egg, and breadcrumbs.",
      "Fry eggplant slices until golden brown and crispy on both sides.",
      "Layer fried eggplant in a baking dish with marinara and cheeses, then bake until bubbly."
    ],
    source: "https://allrecipes.com"
  },
  {
    name: "Classic Pad Thai",
    ingredients: ["rice noodles", "shrimp", "tofu", "tamarind paste", "fish sauce", "bean sprouts", "peanut", "egg"],
    instructions: [
      "Soak rice noodles in warm water until pliable and prepare the sauce with tamarind and fish sauce.",
      "Stir-fry shrimp, tofu, and scrambled egg in a wok over high heat.",
      "Add noodles and sauce, tossing rapidly until absorbed, and garnish with bean sprouts and crushed peanuts."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "French Onion Soup",
    ingredients: ["onion", "beef broth", "gruyere", "baguette", "butter", "thyme", "dry white wine"],
    instructions: [
      "Slice onions thinly and caramelize slowly in butter for an hour until deeply browned.",
      "Deglaze the pot with white wine, add beef broth and thyme, and simmer for 30 minutes.",
      "Ladle into bowls, top with a baguette slice and gruyere cheese, and broil until melted."
    ],
    source: "https://bonappetit.com"
  },
  {
    name: "Chicken Marsala",
    ingredients: ["chicken cutlet", "marsala wine", "mushrooms", "chicken stock", "butter", "flour"],
    instructions: [
      "Dredge chicken in flour, sear in a skillet with butter, and set aside.",
      "Sauté mushrooms in the remaining pan juices until soft.",
      "Pour in marsala wine and chicken stock, reduce, and return chicken to simmer until cooked through."
    ],
    source: "https://foodnetwork.com"
  },
  {
    name: "Cioppino",
    ingredients: ["fish fillets", "shrimp", "mussels", "crushed tomatoes", "onion", "garlic", "white wine", "fish stock"],
    instructions: [
      "Sauté onion and garlic in a large pot, then add white wine and crushed tomatoes.",
      "Simmer the broth with fish stock and seasonings for 20 minutes.",
      "Add firm fish, shrimp, and mussels, cover, and steam until all shellfish open."
    ],
    source: "https://epicurious.com"
  },
  {
    name: "Classic Gazpacho",
    ingredients: ["tomato", "cucumber", "bell pepper", "onion", "garlic", "olive oil", "sherry vinegar", "bread"],
    instructions: [
      "Chop all vegetables and soak a piece of crusty bread in water.",
      "Blend tomatoes, cucumber, bell pepper, onion, garlic, and soaked bread until smooth.",
      "Whisk in olive oil and sherry vinegar, season to taste, and chill thoroughly before serving."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Beef Goulash",
    ingredients: ["beef chuck", "onion", "paprika", "bell pepper", "beef broth", "caraway seed", "garlic"],
    instructions: [
      "Brown diced beef chuck and sauté chopped onions until translucent.",
      "Stir in sweet Hungarian paprika, caraway seeds, and minced garlic.",
      "Add beef broth and diced bell peppers, then simmer covered until the meat is fork-tender."
    ],
    source: "https://allrecipes.com"
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: ["chicken thighs", "yogurt", "garam masala", "tomato puree", "heavy cream", "onion", "ginger", "garlic"],
    instructions: [
      "Marinate diced chicken in yogurt and spices, then char under a broiler.",
      "Sauté onion, ginger, and garlic, then add tomato puree and garam masala to simmer.",
      "Stir in heavy cream and the charred chicken, simmering until the sauce thickens."
    ],
    source: "https://bbcgoodfood.com"
  },
  {
    name: "Steak Diane",
    ingredients: ["beef tenderloin", "dijon mustard", "worcestershire", "heavy cream", "cognac", "butter", "shallot"],
    instructions: [
      "Sear beef tenderloin medallions in a hot skillet and set aside.",
      "Sauté minced shallots, add cognac to flame, then stir in dijon, worcestershire, and cream.",
      "Simmer the sauce until thickened and spoon it over the resting steaks."
    ],
    source: "https://epicurious.com"
  },
  {
    name: "Classic Beef Bourguignon",
    ingredients: ["beef chuck", "bacon", "pearl onion", "mushroom", "red wine", "beef broth", "carrot"],
    instructions: [
      "Brown bacon and use the fat to sear cubed beef chuck until deeply browned.",
      "Sauté pearl onions and mushrooms, then return meat and vegetables to a Dutch oven.",
      "Pour in red wine and beef broth, and braise in the oven at low heat for three hours."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Coq au Vin",
    ingredients: ["chicken", "bacon", "mushroom", "pearl onion", "burgundy wine", "chicken stock", "garlic"],
    instructions: [
      "Brown bacon pieces and sear chicken pieces in the rendered fat.",
      "Add mushrooms, pearl onions, and garlic to the pot.",
      "Pour in burgundy wine and chicken stock, then braise covered until the chicken is tender."
    ],
    source: "https://bonappetit.com"
  },
  {
    name: "Pork Carnitas",
    ingredients: ["pork shoulder", "orange juice", "lime juice", "garlic", "oregano", "cumin", "onion"],
    instructions: [
      "Cut pork shoulder into chunks and place in a pot with citrus juices, spices, and onion.",
      "Simmer gently on low heat until the meat is extremely tender and falls apart.",
      "Shred the pork and crisp it under a high broiler with some cooking liquid."
    ],
    source: "https://seriouseats.com"
  },
  {
    name: "Chicken Pot Pie",
    ingredients: ["chicken", "pie crust", "carrot", "celery", "pea", "chicken broth", "heavy cream", "flour"],
    instructions: [
      "Sauté diced carrots, celery, and onions, then stir in flour and broth to make a thick gravy.",
      "Add cooked diced chicken and green peas, seasoning with herbs.",
      "Pour filling into a baking dish, top with pie crust, and bake until golden brown."
    ],
      source: "https://allrecipes.com"
    }
]; 

function findRecipe() {
  const input = document.getElementById('ingredientInput').value;
  const userIngredients = input.toLowerCase().split(',').map(item => item.trim());
  const resultDiv = document.getElementById('result');

  const matchingRecipes = recipes
    .map(recipe => {
      const matchCount = recipe.ingredients.filter(ing => userIngredients.includes(ing.toLowerCase())).length;
      return { ...recipe, matchCount };
    })
    .filter(recipe => recipe.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  if (matchingRecipes.length > 0) {
    resultDiv.innerHTML = matchingRecipes.map(recipe => {
      const instructionsHTML = recipe.instructions.map(step => `<li>${step}</li>`).join('');
      
      return `
        <div class="recipe-card" style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
          <h3>Recommended Dish: ${recipe.name}</h3>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
          <p><em>Matches ${recipe.matchCount} ingredient${recipe.matchCount > 1 ? 's' : ''}</em></p>
          <h4>Instructions:</h4>
          <ol>${instructionsHTML}</ol>
          <p><a href="${recipe.source}" target="_blank" rel="noopener noreferrer">View Full Recipe Source</a></p>
        </div>
      `;
    }).join('');
  } else {
    resultDiv.innerHTML = `<p>No matching recipes found.</p>`;
  }
}