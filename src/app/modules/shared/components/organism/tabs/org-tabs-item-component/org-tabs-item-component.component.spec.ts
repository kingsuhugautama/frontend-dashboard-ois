import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTabsItemComponentComponent } from './org-tabs-item-component.component';

describe('OrgTabsItemComponentComponent', () => {
  let component: OrgTabsItemComponentComponent;
  let fixture: ComponentFixture<OrgTabsItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTabsItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTabsItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
