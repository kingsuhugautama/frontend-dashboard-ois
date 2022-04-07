import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolVerticalTimelineComponent } from './mol-vertical-timeline.component';

describe('MolVerticalTimelineComponent', () => {
  let component: MolVerticalTimelineComponent;
  let fixture: ComponentFixture<MolVerticalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolVerticalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolVerticalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
