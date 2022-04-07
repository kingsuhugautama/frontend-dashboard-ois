import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCardComponent } from './atm-card.component';

describe('AtmCardComponent', () => {
  let component: AtmCardComponent;
  let fixture: ComponentFixture<AtmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
