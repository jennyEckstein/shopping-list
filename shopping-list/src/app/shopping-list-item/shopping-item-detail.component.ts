import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from '../shopping-item';

@Component({
  selector: 'shop-shopping-item-detail',
  templateUrl: 'shopping-item-detail.component.html'
})
export class ShoppingItemDetailComponent implements OnInit {
  @Input() listItem: ShoppingItem;

  constructor() { }

  ngOnInit() {
  }
}
