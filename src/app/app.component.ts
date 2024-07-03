import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from "./food/food.component";
import { MenuComponent } from "./menu/menu.component";
import { FoodCardComponent } from './food/components/food-card/food-card.component';
import { AddFoodFormComponent } from './food/components/add-food-form/add-food-form.component';
import { FoodContainerComponent } from './food/components/food-container/food-container.component';
import { SearchComponent } from "./shared/components/search/search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AddFoodFormComponent, FoodCardComponent, FoodContainerComponent, MenuComponent, FoodComponent, SearchComponent]
})
export class AppComponent {
  title = 'superfoods';
}