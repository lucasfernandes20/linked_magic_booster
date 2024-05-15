import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionFiltersComponent } from './colection-filters.component';

describe('ColectionFiltersComponent', () => {
  let component: ColectionFiltersComponent;
  let fixture: ComponentFixture<ColectionFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectionFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColectionFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
