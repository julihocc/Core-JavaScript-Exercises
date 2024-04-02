export default class Food {
  name: string;
  ingredients: string[];
  constructor(name: string, ingredients: string[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}
