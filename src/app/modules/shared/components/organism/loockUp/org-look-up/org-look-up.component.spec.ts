import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLookUpComponent } from './org-look-up.component';

describe('OrgLookUpComponent', () => {
  let component: OrgLookUpComponent;
  let fixture: ComponentFixture<OrgLookUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgLookUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLookUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
