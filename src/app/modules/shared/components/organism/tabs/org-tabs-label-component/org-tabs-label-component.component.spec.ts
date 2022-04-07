import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTabsLabelComponentComponent } from './org-tabs-label-component.component';

describe('OrgTabsLabelComponentComponent', () => {
  let component: OrgTabsLabelComponentComponent;
  let fixture: ComponentFixture<OrgTabsLabelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTabsLabelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTabsLabelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
