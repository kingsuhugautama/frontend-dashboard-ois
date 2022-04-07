import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputSelectComponent } from './mol-input-select.component';

describe('MolInputSelectComponent', () => {
  let component: MolInputSelectComponent;
  let fixture: ComponentFixture<MolInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
