import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolDropdownSyncfusionComponent } from './mol-dropdown-syncfusion.component';

describe('MolDropdownSyncfusionComponent', () => {
  let component: MolDropdownSyncfusionComponent;
  let fixture: ComponentFixture<MolDropdownSyncfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolDropdownSyncfusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolDropdownSyncfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
