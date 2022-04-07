import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTabsComponentComponent } from './org-tabs-component.component';

describe('OrgTabsComponentComponent', () => {
  let component: OrgTabsComponentComponent;
  let fixture: ComponentFixture<OrgTabsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTabsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
