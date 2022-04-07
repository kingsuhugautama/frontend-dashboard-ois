import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputGroupComponent } from './mol-input-group.component';

describe('AppInputGroupComponent', () => {
    let component: MolInputGroupComponent;
    let fixture: ComponentFixture<MolInputGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolInputGroupComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolInputGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
