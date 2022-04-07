import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolDatepickerSyncfusionComponent } from './mol-datepicker-syncfusion.component';

describe('MolDatepickerSyncfusionComponent', () => {
  let component: MolDatepickerSyncfusionComponent;
  let fixture: ComponentFixture<MolDatepickerSyncfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolDatepickerSyncfusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolDatepickerSyncfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
