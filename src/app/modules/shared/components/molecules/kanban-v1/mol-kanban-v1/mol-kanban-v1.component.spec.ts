import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolKanbanV1Component } from './mol-kanban-v1.component';

describe('MolKanbanV1Component', () => {
  let component: MolKanbanV1Component;
  let fixture: ComponentFixture<MolKanbanV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolKanbanV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolKanbanV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
