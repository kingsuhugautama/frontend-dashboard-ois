import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonDeleteComponent } from './atm-button-delete.component';

describe('AtmButtonDeleteComponent', () => {
  let component: AtmButtonDeleteComponent;
  let fixture: ComponentFixture<AtmButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmButtonDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
