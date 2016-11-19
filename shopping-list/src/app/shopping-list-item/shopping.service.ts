import { Injectable } from '@angular/core';
import { ShoppingItem } from './shopping-item';

@Injectable()
export class ShoppingService {

	shopping_lists: ShoppingItem[] = [
		{name: 'Party Supplies', 
		description: 'Hola GAY Christmass Party',
		imagePath: 'C:/Users/Jenny/Downloads.GilSpitzer.jpg', 
		date: new Date('12/10/2016')},
		{name: 'LA Trip', 
		description: 'Friends Cali Weekend',
		imagePath: 'C:/Users/Jenny/Downloads.GilSpitzer.jpg', 
		date: new Date('02/01/2017')},
		{name: 'Weekly Food Restock', 
		description: 'Weekly Food I need to buy',
		imagePath: 'C:/Users/Jenny/Downloads.GilSpitzer.jpg', 
		date: new Date('11/18/2016')}

	];


  constructor() { }

  getAllShoppingLists(){
  	return this.shopping_lists;
  }

  getShopingList(id: number){
  	return this.shopping_lists[id];
  }


}
