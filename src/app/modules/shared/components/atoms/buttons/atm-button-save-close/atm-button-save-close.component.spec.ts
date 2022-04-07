import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonSaveCloseComponent } from './atm-button-save-close.component';

describe('AtmButtonSaveCloseComponent', () => {
  let component: AtmButtonSaveCloseComponent;
  let fixture: ComponentFixture<AtmButtonSaveCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmButtonSaveCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmButtonSaveCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
