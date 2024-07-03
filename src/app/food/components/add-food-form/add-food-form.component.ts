import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Foods } from '../../../shared/models/foodStructure';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../../shared/components/search/search.component";

@Component({
    selector: 'app-add-food-form',
    standalone: true,
    templateUrl: './add-food-form.component.html',
    styleUrl: './add-food-form.component.scss',
    imports: [ReactiveFormsModule, CommonModule, SearchComponent]
})

export class AddFoodFormComponent {
  @Input() foodForm!: FormGroup;
  @Output() sentForm = new EventEmitter <Foods>();
  isVisible: boolean = false;

  showForm(){
    this.isVisible = true;
  }

  hideForm(){
    this.isVisible = false;
  }

  submit() {
    const food: Foods = {
      name: this.foodForm.controls['name'].value,
      calories: this.foodForm.controls['calories'].value,
      image: this.foodForm.controls['image'].value,
      quantity: this.foodForm.controls['quantity'].value,
      id: 0
    }
    this.sentForm.emit(food);
    this.hideForm();
  }
}

// isVisible = false;

//   constructor (private foodService: FoodsService){}


//   @Output() formSent = new EventEmitter();

//   openForm () {
//     this.isVisible = true;
//   }

//   closeForm() {
//     this.isVisible = false;
//   }

//   submit (foodForm: NgForm){
//     const food: Foods = {
//       id: this.foodService.getLastId() + 1,
//       name: foodForm.controls['foodName'].value,
//       calories: foodForm.controls['foodCalories'].value,
//       image: foodForm.controls['foodImageUrl'].value,
//       quantity: 0
//     }

//     this.formSent.emit(food);
//     foodForm.resetForm();

//     this.closeForm();
//   }