import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    // public name: string;
    //public description: string;
    //public imagePath: string;
    //public ingredients: Ingredient[]

    constructor(public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[] = [],
        public id: string = '') { }
}