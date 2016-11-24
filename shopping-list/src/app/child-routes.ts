import { Routes,RouterModule } from '@angular/router';
import { ShoppingListDetailStartComponent } from './shopping-list-item/shopping-list-detail-start.component';
import { ShoppingItemDetailComponent } from './shopping-list-item/shopping-item-detail.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

const APP_CHILD_ROUTES: Routes = [
	{path: '', component: ShoppingListDetailStartComponent},
	{path: 'new', component: ShoppingListEditComponent},
	{path: ':id', component: ShoppingItemDetailComponent},
	{path: ':id/edit', component: ShoppingListEditComponent}
];

export const child_routing = RouterModule.forRoot(APP_CHILD_ROUTES);