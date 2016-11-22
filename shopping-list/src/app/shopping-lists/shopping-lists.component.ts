import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingItem } from '../shopping-item';

@Component({
  selector: 'shop-shopping-lists',
  templateUrl: './shopping-lists.component.html'
})
export class ShoppingListsComponent implements OnInit {
	shoppingList: ShoppingItem[] = [
  new ShoppingItem('Girls Night','Jewlery Making Party','http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg','11/21/2016'),
  new ShoppingItem('New Years Bar Crowl','Jewlery Making Party','http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg','12/31/2016'),
  new ShoppingItem('Jenny B-Day - Rollercoasters','Jewlery Making Party','http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg','07/28/2016'),
  new ShoppingItem('Marks B-Day - Home Dinner','Jewlery Making Party','http://dcobbestateliquidators.com/wp-content/uploads/2016/06/GB-Jewlery-Borches-necklace-001-150x150.jpg','06/13/2016')
  ];
  
	@Output() listSelected = new EventEmitter<ShoppingItem>();
	

  constructor() { } 

  ngOnInit() {
  	
  } 

  onSelected(item: ShoppingItem){    
  	this.listSelected.emit(item);  	
  }

}
