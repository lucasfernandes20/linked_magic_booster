import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { SetsResponse, SetsRequest, CardsResponse } from './magic.interface';

@Injectable({
	providedIn: 'root',
})
export class MagicService {
	private url = environment.api;

	constructor(private httpClient: HttpClient) {}

	public getSets(request: SetsRequest) {
		return this.httpClient.get<SetsResponse>(
			this.url +
				`/v1/sets?page=${request.page}&pageSize=${
					request.pageSize
				}&name=${request.name || ''}&block=${request.block || ''}`
		);
	}

	public openBooster(setCode: string) {
		return this.httpClient.get<CardsResponse>(
			this.url + `/v1/sets/${setCode}/booster`
		);
	}
}
