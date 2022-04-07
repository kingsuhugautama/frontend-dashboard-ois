import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTabsBodyComponentComponent } from './org-tabs-body-component.component';

describe('OrgTabsBodyComponentComponent', () => {
  let component: OrgTabsBodyComponentComponent;
  let fixture: ComponentFixture<OrgTabsBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTabsBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTabsBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
