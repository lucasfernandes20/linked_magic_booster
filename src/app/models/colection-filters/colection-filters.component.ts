import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-colection-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './colection-filters.component.html',
})
export class ColectionFiltersComponent {
  private formBuilderService = inject(FormBuilder);

  protected form = this.formBuilderService.group({
    name: [''],
    block: ['', Validators.required],
  });
}
