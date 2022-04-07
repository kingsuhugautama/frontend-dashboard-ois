import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleMasterComponent } from './exmple-master.component';

describe('ExmpleMasterComponent', () => {
  let component: ExmpleMasterComponent;
  let fixture: ComponentFixture<ExmpleMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmpleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
