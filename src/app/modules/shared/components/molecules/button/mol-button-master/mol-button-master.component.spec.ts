import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolButtonMasterComponent } from './mol-button-master.component';

describe('MolButtonMasterComponent', () => {
  let component: MolButtonMasterComponent;
  let fixture: ComponentFixture<MolButtonMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolButtonMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolButtonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
