import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolOffcanvasSingleFilterComponent } from './mol-offcanvas-single-filter.component';

describe('MolOffcanvasSingleFilterComponent', () => {
  let component: MolOffcanvasSingleFilterComponent;
  let fixture: ComponentFixture<MolOffcanvasSingleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolOffcanvasSingleFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolOffcanvasSingleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
