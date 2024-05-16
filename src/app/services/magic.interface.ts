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
