import { Routes, RouterModule } from '@angular/router';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ItemListComponent } from './item-list/item-list.component';

const APP_ROUTES_PROVIDERS: Routes = [
	{path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
	{path: 'shopping-list', component: ShoppingListsComponent},
	{path: 'all_items', component: ItemListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);