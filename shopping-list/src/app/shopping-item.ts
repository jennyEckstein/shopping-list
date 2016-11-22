import { Item } from './shared/item';

export class ShoppingItem {
	constructor(
			public name: string,
			public description: string,
			public imagePath: string,
			public date: string,
			public listItems: Item[]
		){}

}