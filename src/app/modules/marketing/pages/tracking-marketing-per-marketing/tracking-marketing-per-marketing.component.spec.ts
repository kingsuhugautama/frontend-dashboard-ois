import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingMarketingPerMarketingComponent } from './tracking-marketing-per-marketing.component';

describe('TrackingMarketingPerMarketingComponent', () => {
  let component: TrackingMarketingPerMarketingComponent;
  let fixture: ComponentFixture<TrackingMarketingPerMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingMarketingPerMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingMarketingPerMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
