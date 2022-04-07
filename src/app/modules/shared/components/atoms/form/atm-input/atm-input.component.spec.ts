import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmInputComponent } from './atm-input.component';

describe('AppInputComponent', () => {
    let component: AtmInputComponent;
    let fixture: ComponentFixture<AtmInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmInputComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
