import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodsService } from '../../services/foods.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private foodService = inject (FoodsService);

  text = this.foodService.text;
}
