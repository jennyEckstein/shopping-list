import { Injectable } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { Item } from './item';


@Injectable()
export class ShoppingListService{

shoppingListItems: Item[] = [
    new Item('Coca-Cola', 1),
    new Item('Water', 2)
  ];

  shoppingList: ShoppingItem[] = [
  new ShoppingItem(
    'Girls Night',
    'Jewlery Making Party',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '11/21/2016',
    this.shoppingListItems),
  new ShoppingItem(
    'New Years Bar Crowl',
    'Jewlery Making Party',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '12/31/2016',
    this.shoppingListItems),
  new ShoppingItem(
    'Jenny B-Day - Rollercoasters',
    'Jewlery Making Party',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '07/28/2016',
    []),
  new ShoppingItem(
    'Marks B-Day - Home Dinner',
    'Jewlery Making Party',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '06/13/2016',
    [])
  ];

  constructor() { }

  getShoppingList(){
  	return this.shoppingList;
  }

}