import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmLabelComponent } from './atm-label.component';

describe('AppLabelComponent', () => {
    let component: AtmLabelComponent;
    let fixture: ComponentFixture<AtmLabelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmLabelComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
