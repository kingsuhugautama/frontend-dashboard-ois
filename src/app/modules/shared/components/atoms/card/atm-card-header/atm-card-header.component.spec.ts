import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCardHeaderComponent } from './atm-card-header.component';

describe('AtmCardHeaderComponent', () => {
  let component: AtmCardHeaderComponent;
  let fixture: ComponentFixture<AtmCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
