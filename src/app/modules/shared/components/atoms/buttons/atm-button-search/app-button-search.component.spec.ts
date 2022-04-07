import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonSearchComponent } from './app-button-search.component';

describe('AppButtonSearchComponent', () => {
  let component: AppButtonSearchComponent;
  let fixture: ComponentFixture<AppButtonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppButtonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
