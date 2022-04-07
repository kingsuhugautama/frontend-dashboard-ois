import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolInputGroupKodeComponent } from './mol-input-group-kode.component';

describe('AppInputGroupKodeComponent', () => {
    let component: MolInputGroupKodeComponent;
    let fixture: ComponentFixture<MolInputGroupKodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolInputGroupKodeComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolInputGroupKodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
