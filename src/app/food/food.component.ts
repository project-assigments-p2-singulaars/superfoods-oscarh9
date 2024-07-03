import { Component, OnInit, inject } from '@angular/core';
import { FoodContainerComponent } from './components/food-container/food-container.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuService } from '../shared/services/menu.service';
import { FoodsService } from '../shared/services/foods.service';
import { Foods } from '../shared/models/foodStructure';
import { AddFoodFormComponent } from './components/add-food-form/add-food-form.component';

@Component({
    selector: 'app-food',
    standalone: true,
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss',
    imports: [FoodContainerComponent, AddFoodFormComponent]
})
export class FoodComponent implements OnInit {
  private foodService = inject(FoodsService);
  private formBuilder = inject(FormBuilder);
  private menuService = inject(MenuService);

  foods = this.foodService.filterArray;
  foodForm!: FormGroup;

  newFood: Foods= {
    name: "",
    calories: 0,
    image: "",
    quantity: 1,
    id: 0
  }

  ngOnInit(): void {
    this.foodForm = this.formBuilder.group(this.newFood)
  }

  onSubmit(food: Foods) {
    this.foodService.addFood(food);
  }

  onFoodMenu(food: Foods) {
    this.menuService.addToMenu(food);
  }
}