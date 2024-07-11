import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {
  listOfString = ['Apple', 'Banana', 'Orange'];
  searchText:string = '';

  @ViewChild('ProductListComponent', {static:true})  productListComponent : ProductListComponent;


  setSearchText(event:string){
    this.searchText=event
  }


}

