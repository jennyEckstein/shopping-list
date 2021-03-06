import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingItemDetailComponent } from './shopping-list-item/shopping-item-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shared/shopping-list.service';
import { ShoppingListItemsService } from './shared/shopping-list-items.service';
import { ShoppingListDetailStartComponent } from './shopping-list-item/shopping-list-detail-start.component';
import { child_routing } from './child-routes';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListsComponent,
    ItemListComponent,
    ShoppingListItemComponent,
    ShoppingItemDetailComponent,
    DropdownDirective,
    ShoppingListDetailStartComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    child_routing
  ],
  providers: [
  ShoppingListService,
  ShoppingListItemsService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
