export interface IngredientRecipe{
    name: string;
    type: string;
    quantity: number;
}

export interface Recipe{
    id: number;
    title: string;
    ingredients: IngredientRecipe[];
    duration: number;
    steps: string[]
}

export const recipes: Recipe[] = [
    {
        id: 1,
        title: "Coulant au chocolat",
        ingredients: [
            {name: "oeuf", type: "unite", quantity: 2},
            {name: "farine", type: "solide", quantity: 25}
        ],
        duration: 25,
        steps: [
            "Préchauffer le four à 180°C.",
            "Faire fondre le chocolat et le beurre au bain-marie.",
            "Dans un bol, battre les oeufs et le sucre jusqu'à ce que le mélange blanchisse.",
        ]
    }
];
