import { Component } from '@angular/core';
import { ShoppingItem } from './shopping-item';
import { ShoppingItemDetailComponent } from './shopping-list-item/shopping-item-detail.component';

@Component({
  selector: 'shop-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selected_item: ShoppingItem;

}
