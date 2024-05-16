import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '@services/magic.interface';

@Component({
	selector: 'app-booster-card',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './booster-card.component.html',
	styleUrl: './booster-card.component.css',
})
export class BoosterCardComponent {
	@Input() card!: Card;
}
