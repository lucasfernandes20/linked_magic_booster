import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Set } from '@services/magic.interface';

@Component({
	selector: 'app-set-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './set-card.component.html',
})
export class SetCardComponent {
	@Input()
	set!: Set;

	boosterArray: string[] = [];

	ngOnChanges() {
		this.updateBoosterArray();
	}

	private updateBoosterArray() {
		if (typeof this.set.booster === 'string') {
			this.boosterArray = [this.set.booster || 'Sem booster'];
		} else if (Array.isArray(this.set.booster)) {
			this.boosterArray = this.set.booster.filter(
				(item, index) => this.set.booster?.indexOf(item) === index
			);
		}
	}
}
