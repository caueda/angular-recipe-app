import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A Test1 Recipe', 'This is simply a test1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A Test2 Recipe', 'This is simply a test2', 'https://cdn.pixabay.com/photo/2020/01/28/13/18/noodles-4799804_960_720.jpg')
      ];

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes() {
          return this.recipes.slice();
      }

      onSelect(recipe: Recipe) {
          console.log('Notifying listeners');
          this.recipeSelected.emit(recipe);
      }
}