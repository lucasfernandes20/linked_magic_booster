import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() idInput!: string;
  @Input() nameInput!: string;
  @Input() controlInput!: AbstractControl | null;
  @Input() labelInput?: string;
  @Input() placeholderInput?: string;
  @Input() requiredInput?: boolean;
}
