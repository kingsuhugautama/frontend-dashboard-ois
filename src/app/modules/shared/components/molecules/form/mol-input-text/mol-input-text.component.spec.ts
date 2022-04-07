import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputTextComponent } from './mol-input-text.component';

describe('AppInputTextComponent', () => {
    let component: MolInputTextComponent;
    let fixture: ComponentFixture<MolInputTextComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolInputTextComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolInputTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
