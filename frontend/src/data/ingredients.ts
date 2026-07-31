export interface Ingredient{
    id: number;
    name: string;
    expiration: string; // format YYYY-MM-DD
    type: string;
    quantity: number
}

export const ingredients: Ingredient[] = [
    {id: 1, name: "oeuf", expiration: "2026-08-30", type: "unite", quantity: 12},
    {id: 2, name: "lait", expiration: "2026-08-30", type: "liquide", quantity: 1},
    {id: 3, name: "farine", expiration: "2026-08-30", type: "solide", quantity: 1},
]