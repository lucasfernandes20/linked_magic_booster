import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Set } from '@services/magic.interface';

@Component({
	selector: 'app-set-card',
	standalone: true,
	imports: [CommonModule, RouterLinkActive, RouterLink],
	templateUrl: './set-card.component.html',
})
export class SetCardComponent {
	@Input()
	set!: Set;

	releaseDateBrazillianFormat: string = '';

	ngOnChanges() {
		this.updateReleaseDate();
	}

	updateReleaseDate() {
		this.releaseDateBrazillianFormat = new Date(
			this.set.releaseDate
		).toLocaleDateString('pt-BR');
	}
}
