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
    },
    {
        id: 2,
        title: "Pancakes",
        ingredients: [
            {name: "oeuf", type: "unite", quantity: 1},
            {name: "lait", type: "liquide", quantity: 200},
            {name: "farine", type: "solide", quantity: 150}
        ],
        duration: 20,
        steps: [
            "Dans un bol, mélanger la farine, le sucre et la levure.",
            "Ajouter l'oeuf et le lait, puis mélanger jusqu'à obtenir une pâte lisse.",
        ]
    }
];
