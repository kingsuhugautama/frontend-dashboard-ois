import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolOffcanvasFilterComponent } from './mol-offcanvas-filter.component';

describe('MolOffcanvasFilterComponent', () => {
  let component: MolOffcanvasFilterComponent;
  let fixture: ComponentFixture<MolOffcanvasFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolOffcanvasFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolOffcanvasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
