import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string = ''

  //1. create an event
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()
  

  //optinal 2nd arugument of @ViewChild ()
  // 1. read : Use it to read the differance token from the queryed ElementSchemaRegistry.
  // 2. static : Detrimines whune the query is resolved
  //              True is when the view is initilazeed (before the first change detection ) for the first time.
  //              False if you want it to be resolved after every change detection.

    @ViewChild('searchInput', {static:true}) searchInputEl : ElementRef;
  
  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText)
  }

  // updateSearch(event:any){
  //   this.searchText = event.target.value
  // }

  // updateSearchText(inputEl : HTMLInputElement){
  //   // console.log(inputEl.value)
  //   this.searchText = inputEl.value
  //   this.searchTextChanged.emit(this.searchText)
  // }

  updateSearchText(){
    // console.log(inputEl.value)
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }
}
