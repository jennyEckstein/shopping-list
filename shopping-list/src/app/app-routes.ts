import { Routes, RouterModule } from '@angular/router';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ShoppingListDetailStartComponent } from './shopping-list-item/shopping-list-detail-start.component';
import { ShoppingItemDetailComponent } from './shopping-list-item/shopping-item-detail.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingComponent } from './shopping/shopping.component';

const APP_ROUTES_PROVIDERS: Routes = [
	{path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
	{path: 'shopping-list', component: ShoppingComponent},
	{path: 'shopping-list/new', component: ShoppingListEditComponent},
	{path: 'shopping-list/:id', component: ShoppingListDetailStartComponent},
	{path: 'shopping-list/:id/edit', component: ShoppingListEditComponent},
	{path: 'all_items', component: ItemListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);