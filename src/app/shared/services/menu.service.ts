import { Injectable, signal } from '@angular/core';
import { Foods } from '../models/foodStructure';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = signal<Foods[]>([]);

  addToMenu(food: Foods) {
    this.menu.update(v => 
      [food].concat(v))
  }
}