// script.js

export function enterIngredients(strPizza, strAdicional) {
    // Create an array of ingredients
    let ingredientsEN = [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      // "Toppings of your choice (e.g., pepperoni, mushrooms, onions)",
      "Toppings of your choice" + strPizza.slice(5),
      "Aditional of your choice" + strAdicional.slice(5),
      "Olive oil",
      "Italian seasoning",
      "Garlic powder",
      "Salt and pepper"
    ];
  
    let ingredientsES = [
        "Masa para pizza",
        "Salsa de tomate",
        "Queso mozzarella",
        //"Aderezos de su elección (por ejemplo, pepperoni, champiñones, cebolla)",
        "Aderezos de su elección " + strPizza.slice(5),
        "Adicionales de su eleccion " + strAdicional.slice(5),
        "Aceite de oliva",
        "Condimento italiano",
        "Polvo de ajo",
        "Sal y pimienta"
      ];

/*  
    var ingredientsList = document.createElement("ul");
    for (var i = 0; i < ingredients.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = ingredients[i];
      ingredientsList.appendChild(listItem);
    }
    recipeContainer.appendChild(ingredientsList);
  
    var stepsList = document.createElement("ol");
    for (var j = 0; j < steps.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = steps[j];
      stepsList.appendChild(listItem);
    }
    recipeContainer.appendChild(stepsList);
     */
    return ingredientsES;
  }

  export function enterSteps(strPizza, strAdicional) {
    // Create an array of steps
    let stepsEN = [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Transfer the dough to a baking sheet or pizza stone.",
      "Spread tomato sauce evenly over the dough, leaving a small border around the edges.",
      "Sprinkle mozzarella cheese over the sauce.",
      //"Add your desired toppings, such as pepperoni, mushrooms, and onions.",
      "Add your desired toppings for you pizza, such as " + strPizza.slice(5),
      "Add your desired toppings EXTRA for you pizza, such as  " + strAdicional.slice(5),
      "Drizzle a little olive oil over the pizza.",
      "Sprinkle Italian seasoning, garlic powder, salt, and pepper to taste.",
      "Bake in the preheated oven for about 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and slightly browned.",
      "Remove from the oven and let it cool for a few minutes.",
      "Slice and serve hot!"
    ];
  
    let stepsES = [
        "Precalienta el horno a 475°F (245°C).",
        "Extienda la masa de pizza sobre una superficie enharinada hasta obtener el espesor deseado.",
        "Transfiera la masa a una bandeja para hornear o piedra para pizza.",
        "Extienda la salsa de tomate uniformemente sobre la masa, dejando un pequeño borde alrededor de los bordes.",
        "Espolvorea queso mozzarella sobre la salsa.",
        //"Agregue los ingredientes que desee, como pepperoni, champiñones y cebollas.",
        "Agregue los ingredientes que desee para su pizza " + strPizza.slice(5),
        "Agregue los ingredientes EXTRA que desee para su pizza " + strAdicional.slice(5),
        "Rocíe un poco de aceite de oliva sobre la pizza.",
        "Espolvoree condimento italiano, ajo en polvo, sal y pimienta al gusto.",
        "Hornee en el horno precalentado durante unos 12-15 minutos, o hasta que la corteza esté dorada y el queso burbujee y ligeramente dorado.",
        "Retirar del horno y dejar enfriar unos minutos.",
        "¡Cortar y servir caliente!"
      ];
      return stepsES;
  }
  