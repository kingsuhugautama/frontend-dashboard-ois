import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLookUpChecklistComponent } from './org-look-up-checklist.component';

describe('OrgLookUpChecklistComponent', () => {
  let component: OrgLookUpChecklistComponent;
  let fixture: ComponentFixture<OrgLookUpChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgLookUpChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLookUpChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
