import { useState, useEffect, use } from 'react';

interface Ingredient {
    id: number;
    name: string;
    expiration: string; 
    unit: string;
    quantity: number;
}

export default function Ingredients() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/ingredients")
        .then(response => response.json())
        .then(data => setIngredients(data))
        .catch(error => console.error("API connection error:", error));
    }, []);

    

    return (
        <div>
            <h2>Mes ingrédients</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {ingredients.map((ingredient) => (
                    <div key={ingredient.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
                        <h3>{ingredient.name}</h3>
                        <p>Quantité : {ingredient.quantity} {ingredient.unit}</p>
                        <p>Date d'expiration : {ingredient.expiration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}