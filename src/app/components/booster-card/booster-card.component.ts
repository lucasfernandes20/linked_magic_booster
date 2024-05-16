import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardColorService } from '@services/card-color.service';
import { Card } from '@services/magic.interface';

@Component({
	selector: 'app-booster-card',
	standalone: true,
	imports: [NgOptimizedImage, CommonModule],
	templateUrl: './booster-card.component.html',
	styleUrl: './booster-card.component.css',
})
export class BoosterCardComponent implements OnInit {
	@Input() card!: Card;

	constructor(private cardColorService: CardColorService) {}

	ngOnInit(): void {
		this.card.colors = this.cardColorService.convertColorToHex(
			this.card.colorIdentity
		);
	}
}
