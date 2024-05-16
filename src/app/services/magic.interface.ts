export interface SetsRequest {
	page: number;
	pageSize: number;
	name?: string;
	block?: string;
}

export interface Set {
	code: string;
	name: string;
	type: string;
	border: string;
	mkm_id: 1495;
	booster?: Array<string> | string;
	mkm_name: string;
	releaseDate: Date;
	magicCardsInfoCode: string;
	block: string;
}

export interface SetsResponse {
	sets: Set[];
}

interface Ruling {
	date: string;
	text: string;
}

interface ForeignName {
	name: string;
	text: string;
	type: string;
	flavor: any;
	imageUrl: string;
	language: string;
	multiverseid: number;
}

interface Legality {
	format: string;
	legality: string;
}

export interface Card {
	name: string;
	manaCost: string;
	cmc: number;
	colors: string[];
	colorIdentity: string[];
	type: string;
	types: string[];
	subtypes: string[];
	rarity: string;
	set: string;
	setName: string;
	text: string;
	artist: string;
	number: string;
	power: string;
	toughness: string;
	layout: string;
	multiverseid: string;
	imageUrl: string;
	watermark: string;
	rulings: Ruling[];
	foreignNames: ForeignName[];
	printings: string[];
	originalText: string;
	originalType: string;
	legalities: Legality[];
	id: string;
}

export interface CardsResponse {
	cards: Card[];
}
