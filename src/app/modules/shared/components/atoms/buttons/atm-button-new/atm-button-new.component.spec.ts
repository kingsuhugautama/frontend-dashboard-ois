import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonNewComponent } from './atm-button-new.component';

describe('AtmButtonNewComponent', () => {
  let component: AtmButtonNewComponent;
  let fixture: ComponentFixture<AtmButtonNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmButtonNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmButtonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
