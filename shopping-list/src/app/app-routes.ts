import { Routes, RouterModule } from '@angular/router';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ItemListComponent } from './item-list/item-list.component';
import { APP_CHILD_ROUTES } from './child-routes';

const APP_ROUTES_PROVIDERS: Routes = [
	{path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
	{path: 'shopping-list', component: ShoppingListsComponent, children: APP_CHILD_ROUTES},
	{path: 'all_items', component: ItemListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);