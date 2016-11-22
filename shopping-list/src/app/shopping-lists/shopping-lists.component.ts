import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingItem } from '../shopping-item';

@Component({
  selector: 'shop-shopping-lists',
  templateUrl: './shopping-lists.component.html'
})
export class ShoppingListsComponent implements OnInit {
	shoppingList: ShoppingItem[] = [];
	@Output() listSelected = new EventEmitter<ShoppingItem>();
	list = new ShoppingItem(
		'Girls Night', 
		'Jewlery Making Party', 
		'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg', 
		'11/21/2016');

  constructor() { }

  ngOnInit() {
  	
  } 

  onSelected(item: ShoppingItem){    
  	this.listSelected.emit(item);  	
  }

}
