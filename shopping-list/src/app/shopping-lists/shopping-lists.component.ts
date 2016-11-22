import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { Item } from '../shared/item';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'shop-shopping-lists',
  templateUrl: './shopping-lists.component.html'
})
export class ShoppingListsComponent implements OnInit {
  shoppingList: ShoppingItem[] = [];

	@Output() listSelected = new EventEmitter<ShoppingItem>();
	

  constructor(private shoppingListService: ShoppingListService) { } 

  ngOnInit() {
  	this.shoppingList = this.shoppingListService.getShoppingList();
  } 

  onSelected(item: ShoppingItem){    
  	this.listSelected.emit(item);  	
  }

}
