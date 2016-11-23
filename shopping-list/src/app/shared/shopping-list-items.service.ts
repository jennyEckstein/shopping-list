import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ShoppingListItemsService {

	shoppingListItems: Item[] = [
    new Item('Coca-Cola', 1),
    new Item('Water', 2)
  ];
  constructor() { }

  getItems(){
  	return this.shoppingListItems;
  }

  addItems(items: Item[]){
  	Array.prototype.push.apply(this.shoppingListItems, items);
  }

}
