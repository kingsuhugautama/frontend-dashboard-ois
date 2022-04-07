import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonEditComponent } from './atm-button-edit.component';

describe('AtmButtonEditComponent', () => {
  let component: AtmButtonEditComponent;
  let fixture: ComponentFixture<AtmButtonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmButtonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmButtonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
