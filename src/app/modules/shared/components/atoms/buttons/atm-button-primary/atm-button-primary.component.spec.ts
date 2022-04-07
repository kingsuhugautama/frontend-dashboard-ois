import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonPrimaryComponent } from './atm-button-primary.component';

describe('ButtonPrimaryComponent', () => {
    let component: AtmButtonPrimaryComponent;
    let fixture: ComponentFixture<AtmButtonPrimaryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmButtonPrimaryComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmButtonPrimaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
