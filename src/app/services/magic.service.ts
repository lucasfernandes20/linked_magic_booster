import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MagicService {
	private _httpClient: HttpClient;

	constructor(private httpClient: HttpClient) {
		this._httpClient = httpClient;
	}
}
