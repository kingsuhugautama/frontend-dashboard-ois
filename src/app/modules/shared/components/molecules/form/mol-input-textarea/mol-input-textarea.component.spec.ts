import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputTextareaComponent } from './mol-input-textarea.component';

describe('AppInputTextareaComponent', () => {
    let component: MolInputTextareaComponent;
    let fixture: ComponentFixture<MolInputTextareaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolInputTextareaComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolInputTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
