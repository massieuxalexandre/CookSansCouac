import { useState, useEffect } from 'react';

// On garde les interfaces utiles ici
interface IngredientRecipe {
    name: string;
    type: string;
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

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/recipes")
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error("API connection error:", error));
    }, []);

    return (
        <div>
            <h2>Mes Recettes</h2>
            {recipes.map((recipe) => (
                <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
                    <h3>{recipe.title}</h3>
                    <p>⏱️ {recipe.duration} minutes</p>
                    
                    <h4>Ingrédients :</h4>
                    <ul>
                        {recipe.ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing.quantity} {ing.type === "unite" ? "" : ing.type} de {ing.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {recipes.length === 0 && <p style={{ color: 'red' }}>Aucune recette trouvée.</p>}
        </div>
    );
}