import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmInputGroupComponentAtom } from './atm-input-group.component';

describe('AppInputGroupComponent', () => {
    let component: AtmInputGroupComponentAtom;
    let fixture: ComponentFixture<AtmInputGroupComponentAtom>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmInputGroupComponentAtom]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmInputGroupComponentAtom);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
