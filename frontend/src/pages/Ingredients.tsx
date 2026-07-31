import { useState, useEffect } from 'react';

interface Ingredient {
    id: number;
    name: string;
    expiration: string; 
    type: string;
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
            <h2>Mon Frigo</h2>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {ingredients.map((ingredient) => (
                    <div key={ingredient.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
                        <h3>{ingredient.name}</h3>
                        <p>Quantité: {ingredient.quantity} {ingredient.type === "unite" ? "" : ingredient.type}</p>
                        <p>Expire le: {ingredient.expiration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}