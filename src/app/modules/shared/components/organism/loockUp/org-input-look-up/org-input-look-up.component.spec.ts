import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInputLookUpComponent } from './org-input-look-up.component';

describe('OrgInputLookUpComponent', () => {
  let component: OrgInputLookUpComponent;
  let fixture: ComponentFixture<OrgInputLookUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgInputLookUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgInputLookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
