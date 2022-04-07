import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonDangerComponent } from './atm-button-danger.component';

describe('ButtonDangerComponent', () => {
    let component: AtmButtonDangerComponent;
    let fixture: ComponentFixture<AtmButtonDangerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmButtonDangerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmButtonDangerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
