from pydantic import BaseModel
from typing import List
from datetime import date

class Ingredient(BaseModel):
    id: int
    name: str
    expiration: date
    unit: str
    quantity: float


class Recipe(BaseModel):
    id: int
    title: str
    ingredients: List[IngredientRecipe]
    duration: int
    steps: List[str]

class IngredientRecipe(BaseModel):
    name: str
    unit: str
    quantity: float



