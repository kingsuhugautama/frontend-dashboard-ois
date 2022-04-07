import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingMarketingPerCustomerComponent } from './tracking-marketing-per-customer.component';

describe('TrackingMarketingPerCustomerComponent', () => {
  let component: TrackingMarketingPerCustomerComponent;
  let fixture: ComponentFixture<TrackingMarketingPerCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingMarketingPerCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingMarketingPerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
