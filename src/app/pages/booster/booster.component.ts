import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoosterCardComponent } from '@components/booster-card/booster-card.component';
import { HeaderComponent } from '@models/header/header.component';
import { Card } from '@services/magic.interface';
import { MagicService } from '@services/magic.service';

@Component({
	selector: 'app-booster',
	standalone: true,
	imports: [HeaderComponent, CommonModule, BoosterCardComponent],
	providers: [MagicService],
	templateUrl: './booster.component.html',
})
export class BoosterComponent implements OnInit {
	setCode!: string;

	boosterCards: Card[] = [];

	isLoading = false;

	constructor(
		private route: ActivatedRoute,
		private magicService: MagicService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.setCode = params['get']('id') as string;
		});
	}

	openBooster() {
		this.isLoading = true;
		try {
			this.magicService.openBooster(this.setCode).subscribe((data) => {
				console.log(data);
				const { cards } = data;
				const onlyCreatures = cards
					.filter((card) => card.types.includes('Creature'))
					.splice(0, 15 - this.boosterCards.length);
				this.boosterCards.push(...onlyCreatures);
				if (this.boosterCards.length < 15) {
					this.openBooster();
				}
			});
		} catch (error) {
			console.log('erro');
			this.router.navigate(['/']);
		} finally {
			this.isLoading = false;
		}
	}
}
