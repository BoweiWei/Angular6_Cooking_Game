import { Component } from '@angular/core';
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cooking-Game';
  enternew = false;
  food_counter = 0;
  foods: Food[] = [];
  new_food = new Food("")
  receipt: Food[] = [new Food('meat'), new Food('apple'), new Food('tomato')].sort((a, b) => a.name.localeCompare(b.name));
  answer = true;
  show_answer = false;

  // Event Binding and record new food
  onUpdateFood(event: Event) {
    this.new_food = new Food((<HTMLInputElement>event.target).value);

  }

  // save the new food into food
  submit() {
    this.foods.push(this.new_food);
    this.foods.sort((a, b) => a.name.localeCompare(b.name));
    this.enternew = true;
    console.log(this.foods);
    this.food_counter ++;
    this.check();
  }

  reset() {
    this.foods = [];
    this.enternew = false;
    this.show_answer = false;
    this.answer = true;
    this.food_counter = 0;
    console.log(this.show_answer);
  }

  check() {
    if (this.food_counter >= 3) {
      this.show_answer = true;
      if (this.food_counter != this.receipt.length) {
        this.answer = false;
      } else {
        for (var i = 0; i < this.foods.length; i++) {
          if (this.foods[i].name != this.receipt[i].name) {
            console.log("correct")
            this.answer = false;
          } else {
            this.answer = true;
          }
        }
      }
    }
  }
}
