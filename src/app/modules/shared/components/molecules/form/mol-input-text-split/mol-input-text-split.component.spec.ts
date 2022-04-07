import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputTextSplitComponent } from './mol-input-text-split.component';

describe('MolInputTextSplitComponent', () => {
  let component: MolInputTextSplitComponent;
  let fixture: ComponentFixture<MolInputTextSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolInputTextSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolInputTextSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
