import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmValidatorsComponent } from './atm-validators.component';

describe('ValidatorsComponent', () => {
    let component: AtmValidatorsComponent;
    let fixture: ComponentFixture<AtmValidatorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmValidatorsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmValidatorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
