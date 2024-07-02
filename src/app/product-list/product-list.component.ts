import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  // name : string = 'Iphone 15 Pro';
  // price: Number = 10000;
  // description: string = 'This is a Iphone';
  // color:string = 'Black';
  // name : String = 'Subramanyam';
  addToCart:number = 0;
  product ={
    name : 'Iphone 15 Pro',
    price: 450000,
    description: 'This is a Iphone',
    color: 'Black',
    discount: 40,
    imagePath : '../assets/images/image1.jpg',
    stock:10 
  }
  isProductInStock(){
    if(this.product.stock > 0){
      return false;
    }
    return true;
  }
  getDiscountedPrice(){
    return this.product.price + (this.product.price * this.product.discount/100);
  }

  onIncrement(){
    if(this.addToCart < this.product.stock){
      this.addToCart += 1;
    }

  }
  onDecrement(){
    if(this.addToCart > 0){
      this.addToCart -= 1;
    }

  }
}
