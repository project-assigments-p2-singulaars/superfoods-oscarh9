import { Component, EventEmitter, Output, input } from '@angular/core';
import { FoodCardComponent } from "../food-card/food-card.component";
import { FormsModule } from '@angular/forms';
import { Foods } from '../../../shared/models/foodStructure';

@Component({
    selector: 'app-food-container',
    standalone: true,
    templateUrl: './food-container.component.html',
    styleUrl: './food-container.component.scss',
    imports: [FoodCardComponent, FormsModule]
})

export class FoodContainerComponent {
    foods = input <Foods[]>();

    @Output() sentFoodToMenu = new EventEmitter<Foods>();
  
    addToMenu(food: Foods) {
      this.sentFoodToMenu.emit(food)
    }
}