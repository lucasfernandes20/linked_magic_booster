import { Component } from '@angular/core';
import { HeaderComponent } from '@models/header/header.component';
import { ColectionFiltersComponent } from '@models/colection-filters/colection-filters.component';
import { MagicService } from '@services/magic.service';
import { Set } from '@services/magic.interface';
import { CommonModule } from '@angular/common';
import { SetCardComponent } from '@components/set-card/set-card.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		HeaderComponent,
		CommonModule,
		ColectionFiltersComponent,
		SetCardComponent,
	],
	providers: [MagicService],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	sets: Set[] = [];

	constructor(private magicService: MagicService) {}

	handleFormSubmission(formData: { block: string; name: string | null }) {
		this.getSets(formData.block, formData.name || '');
	}

	getSets(block: string, name: string = '') {
		const request = {
			page: 1,
			pageSize: 100,
			name,
			block,
		};

		this.magicService
			.getSets(request)
			.subscribe((data) => (this.sets = data.sets));
	}
}
