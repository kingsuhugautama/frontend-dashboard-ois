import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWarningComponent } from './button-warning.component';

describe('ButtonWarningComponent', () => {
  let component: ButtonWarningComponent;
  let fixture: ComponentFixture<ButtonWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
