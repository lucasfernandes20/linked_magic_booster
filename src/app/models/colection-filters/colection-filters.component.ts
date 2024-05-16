import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-colection-filters',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './colection-filters.component.html',
})
export class ColectionFiltersComponent {
	private formBuilderService = inject(FormBuilder);

	@Output() formSubmitted = new EventEmitter<{
		name: string | null;
		block: string;
	}>();

	protected form = this.formBuilderService.group({
		name: [''],
		block: [null, Validators.required],
	});

	submitForm() {
		if (this.form.valid) {
			const emitter = {
				name: this.form.value.name || null,
				block: this.form.value.block || '',
			};
			this.formSubmitted.emit(emitter);
			this.form.reset();
		} else {
			this.form.controls['block'].markAsTouched();
		}
	}
}
