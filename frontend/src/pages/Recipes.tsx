import { useState, useEffect } from 'react';

interface IngredientRecipe {
    name: string;
    unit: string;
    quantity: number;
}

interface Recipe {
    id: number;
    title: string;
    ingredients: IngredientRecipe[];
    duration: number;
    steps: string[];
}

export default function Recipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [availableRecipes, setAvailableRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/recipes")
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error("API connection error:", error));
    }, []);
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/available_recipies")
        .then(response => response.json())
        .then(data => setAvailableRecipes(data))
        .catch(error => console.error("API connection error:", error));
    }, []);

    return (
        <div>
            <h2>Recettes disponibles</h2>
            {availableRecipes.map((availableRecipe) => (
                <div key={availableRecipe.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
                    <h3>{availableRecipe.title}</h3>
                    <p>{availableRecipe.duration} minutes</p>

                    <h4>Ingrédients :</h4>
                    <ul>
                        {availableRecipe.ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing.name} : {ing.quantity} {ing.unit}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <h2>Toutes les recettes</h2>
            {recipes.map((recipe) => (
                <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.duration} minutes</p>
                    
                    <h4>Ingrédients :</h4>
                    <ul>
                        {recipe.ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing.name} : {ing.quantity} {ing.unit}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {recipes.length === 0 && <p style={{ color: 'red' }}>Aucune recette trouvée.</p>}
        </div>
    );
}