import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolLockUpFiltersComponent } from './mol-lock-up-filters.component';

describe('AppLockUpFiltersComponent', () => {
    let component: MolLockUpFiltersComponent;
    let fixture: ComponentFixture<MolLockUpFiltersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolLockUpFiltersComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolLockUpFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
