import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolButtonNavComponent } from './mol-button-nav.component';

describe('MolButtonNavComponent', () => {
  let component: MolButtonNavComponent;
  let fixture: ComponentFixture<MolButtonNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolButtonNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolButtonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
