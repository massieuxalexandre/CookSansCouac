from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from models import Recipe, IngredientRecipe

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
            IngredientRecipe(name="oeuf", type="unite", quantity=2),
            IngredientRecipe(name="farine", type="solide", quantity=25)
        ],
        duration=25,
        steps=[
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre.",
            "Battre les oeufs et le sucre."
        ]
    )
]

# route test (home)
@app.get("/")
def test():
    return {"test": "test api"}

# new route 
@app.get("/api/recipes", response_model=List[Recipe])
def get_recipes():
    return recipes_db
