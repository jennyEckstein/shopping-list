import { Injectable } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingListItemsService } from './shopping-list-items.service';


@Injectable()
export class ShoppingListService{

  shoppingList: ShoppingItem[] = [
  new ShoppingItem(
    'Girls Night',
    'Jewlery Making Party',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '11/21/2016',
    this.shoppingListItemsService.getItems()),
  new ShoppingItem(
    'New Years Bar Crowl',
    'Around NYC',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '12/31/2016',
    this.shoppingListItemsService.getItems()),
  new ShoppingItem(
    'Jenny B-Day',
    'Rollercoasters',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '07/28/2016',
    []),
  new ShoppingItem(
    'Marks B-Day',
    'Home Dinner',
    'http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg',
    '06/13/2016',
    [])
  ];

  constructor(private shoppingListItemsService: ShoppingListItemsService) { }

  getShoppingList(){
  	return this.shoppingList;
  }

}
