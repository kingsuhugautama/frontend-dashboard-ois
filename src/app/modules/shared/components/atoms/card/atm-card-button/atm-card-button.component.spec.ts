import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCardButtonComponent } from './atm-card-button.component';

describe('AtmCardButtonComponent', () => {
  let component: AtmCardButtonComponent;
  let fixture: ComponentFixture<AtmCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
