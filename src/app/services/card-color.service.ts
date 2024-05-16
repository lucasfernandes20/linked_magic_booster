import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CardColorService {
	constructor() {}

	private colors: { [key: string]: string } = {
		W: 'white',
		U: 'blue',
		B: 'black',
		R: 'red',
		G: 'green',
		C: 'colorless',
	};

	private colorToHex: { [key: string]: string } = {
		white: '#f8f9fa',
		blue: '#007bff',
		black: '#343a40',
		red: '#dc3545',
		green: '#28a745',
		colorless: '#6c757d',
	};

	public convertColorToHex(cardColor?: string[]): string[] {
		return cardColor
			? cardColor.map((color) => this.colorToHex[this.colors[color]])
			: [];
	}
}
