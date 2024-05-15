import { Component } from '@angular/core';
import { HeaderComponent } from '@models/header/header.component';
import { ColectionFiltersComponent } from '@models/colection-filters/colection-filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ColectionFiltersComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
