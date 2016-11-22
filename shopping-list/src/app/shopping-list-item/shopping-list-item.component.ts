import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from '../shopping-item';


@Component({
  selector: 'shop-shopping-list-item',
  templateUrl: './shopping-list-item.component.html'
})
export class ShoppingListItemComponent implements OnInit {
	@Input() item: ShoppingItem;
	itemId: number;

  constructor() { }

  ngOnInit() {
  }
}