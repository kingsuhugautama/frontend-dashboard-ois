import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLookUpHirarkiComponent } from './org-look-up-hirarki.component';

describe('OrgLookUpHirarkiComponent', () => {
  let component: OrgLookUpHirarkiComponent;
  let fixture: ComponentFixture<OrgLookUpHirarkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgLookUpHirarkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLookUpHirarkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
