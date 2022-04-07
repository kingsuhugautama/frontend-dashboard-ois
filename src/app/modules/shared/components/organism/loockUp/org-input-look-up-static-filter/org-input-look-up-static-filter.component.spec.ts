import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInputLookUpStaticFilterComponent } from './org-input-look-up-static-filter.component';

describe('OrgInputLookUpStaticFilterComponent', () => {
  let component: OrgInputLookUpStaticFilterComponent;
  let fixture: ComponentFixture<OrgInputLookUpStaticFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgInputLookUpStaticFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgInputLookUpStaticFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
