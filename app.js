// Sample recipe data (you can replace this with an API call or a larger dataset)
const recipes = [
    {
        name: "Spaghetti Bolognese",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti and combine with sauce made from beef, tomato, and onion.",
        image: "https://via.placeholder.com/300x180?text=Spaghetti+Bolognese"
    },
    {
        name: "Vegetable Stir Fry",
        ingredients: ["carrot", "broccoli", "soy sauce", "garlic", "tofu"],
        instructions: "Stir-fry vegetables and tofu with soy sauce and garlic.",
        image: "https://via.placeholder.com/300x180?text=Vegetable+Stir+Fry"
    },
    {
        name: "Chicken Salad",
        ingredients: ["chicken", "lettuce", "tomato", "cucumber", "olive oil"],
        instructions: "Grill chicken and mix with veggies and olive oil.",
        image: "https://via.placeholder.com/300x180?text=Chicken+Salad"
    },
    {
        name: "Samosa",
        ingredients: ["carrot", "potato", "tomato", "masala", "onion"],
        instructions: "first make filling and then deep fry in oil in slow flam.",
        image:"https://via.placeholder.com/300x180?text=samosa"
    },
    {
        name: "fried  rice",
        ingredients: ["carrot", "masala","onion","tomato"],
        instructions: "first fry all vegetables then add plain rice to it.",
        image: "https://via.placeholder.com/300x180?text=fried+rice"
    },
    
];
// Function to display recipe cards
function displayRecipes(recipesToDisplay) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear previous search results

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
            <div class="card-body">
                <h5 class="card-title">${recipe.name}</h5>
                <p class="card-text">Ingredients: ${recipe.ingredients.join(", ")}</p>
                <button class="btn btn-primary" onclick="saveFavorite('${recipe.name}')">Save to Favorites</button>
            </div>
        `;

        recipeList.appendChild(card);
    });
}
// Function to filter recipes by ingredients
function searchRecipes() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });
    displayRecipes(filteredRecipes);
}

// Function to save favorite recipes to localStorage
function saveFavorite(recipeName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(recipeName)) {
        favorites.push(recipeName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
    }
}
// Function to display favorite recipes
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteList = document.getElementById("favorite-list");
    favoriteList.innerHTML = ""; // Clear previous favorites

    favorites.forEach(favorite => {
        const recipe = recipes.find(recipe => recipe.name === favorite);
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
            <div class="card-body">
                <h5 class="card-title">${recipe.name}</h5>
                <p class="card-text">Ingredients: ${recipe.ingredients.join(", ")}</p>
            </div>
        `;

        favoriteList.appendChild(card);
    });
}
// Event listener for the search bar
document.getElementById("search-bar").addEventListener("input", searchRecipes);
displayFavorites();
localStorage.removeItem("favorites");
// Display all recipes initially
displayRecipes(recipes);

