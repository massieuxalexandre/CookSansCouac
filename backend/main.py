from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from models import Recipe, Ingredient, IngredientRecipe
import numpy as np

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # L'adresse de ton serveur React/Vite
    allow_credentials=True,
    allow_methods=["*"], # Autorise tout (GET, POST, etc.)
    allow_headers=["*"], # Autorise tout
)

# fake data base (2 examples)
recipes_db = [
    Recipe(
        id=1,
        title="Coulant au chocolat",
        ingredients=[
            IngredientRecipe(name="oeuf", unit="", quantity=2),
            IngredientRecipe(name="farine", unit="g", quantity=25)
        ],
        duration=25,
        steps=[
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre.",
            "Battre les oeufs et le sucre."
        ]
    ),
    Recipe(
        id=2,
        title="Salade de fruits",
        ingredients=[
            IngredientRecipe(name="pomme", unit="g", quantity=1),
            IngredientRecipe(name="banane", unit="g", quantity=1),
            IngredientRecipe(name="orange", unit="g", quantity=1)
        ],
        duration=10,
        steps=[
            "Éplucher et couper les fruits.",
            "Mélanger les fruits dans un saladier.",
            "Servir frais."
        ]
    )
]

ingredients_db = [
    Ingredient(id=1, name="oeuf", expiration="2024-06-30", unit="", quantity=12),
    Ingredient(id=2, name="farine", expiration="2024-07-15", unit="g", quantity=1000),
    Ingredient(id=3, name="pomme", expiration="2024-06-25", unit="g", quantity=5),
]

# route test 
@app.get("/")
def test():
    return {"test": "test api"}

# new route 
@app.get("/api/recipes", response_model=List[Recipe])
def get_recipes():
    return recipes_db

@app.get("/api/available_recipies", response_model=List[Recipe])
def get_available_recipes():
    recipes_db = np.array(recipes_db)
    ingredients_db = np.array(ingredients_db)

    return [recipe for recipe in recipes_db if all(
        any(ingredient.name == recipe_ingredient.name and ingredient.quantity >= recipe_ingredient.quantity
            for ingredient in ingredients_db)
        for recipe_ingredient in recipe.ingredients
    )]

@app.get("/api/ingredients", response_model=List[Ingredient])
def get_ingredients():
    return ingredients_db