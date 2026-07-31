class Ingredient:

    def __init__(self,id,name,expiration,type,quantity):
        self.id = id
        self.name = name
        self.expiration = expiration
        self.type = type
        self.quantity = quantity

class Recipe:
    
    def __init__(self,id,title,ingredients,duration,steps):
        self.id = id
        self.title = title
        self.ingredients = ingredients
        self.duration = duration
        self.steps = steps

class IngredientRecipe:

    def __init__(self,name,type,quantity):
        self.name = name
        self.type =type
        self.quantity = quantity

        

