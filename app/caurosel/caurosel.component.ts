import { Component,ElementRef, Renderer2, ViewChild } from '@angular/core';



@Component({
  selector: 'app-caurosel',
  templateUrl: './caurosel.component.html',
  styleUrl: './caurosel.component.css'
})
export class CauroselComponent {
addToCart:number = 0;
isDropdownVisible: boolean=true;
name:string = '';
Epassword:string = '';
firstName: string = '';
firstNameDisplay: string = '';
password: string = "mypassword";
namesList: string[]=[];
stock: boolean | undefined;
inStock: number = 10;
title = 'welcome to my world';
constructor() {
  // 3. Set the boolean property based on the function's return value
  this.stock = this.determineValue();
}
product = {
  item: 'Iphone',
  model: '13 pro max',
  price: 9000,
  quantity : 10
};

// onClick(){
//   if (this.name !== '') { // Check if the input is not empty
//     this.namesList.push(this.name); // Add the name to the list
//     this.name = ''; // Clear the input field
//   }
// }
quantityIncrement(){
  
 this.addToCart<10?this.addToCart++:this.addToCart;

}
quantityDecrement(){
  
  this.addToCart>0? this.addToCart--: this.addToCart;
 
 }

determineValue(){
  return (this.product.quantity)>0? true: false;
}
onClick2(): string{
 return this.firstNameDisplay = this.firstName;
}
onEnterPass(event:any){
 return this.Epassword = event.target.value;
}
}

