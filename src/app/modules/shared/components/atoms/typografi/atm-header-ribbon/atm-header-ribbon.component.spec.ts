import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmHeaderRibbonComponent } from './atm-header-ribbon.component';

describe('HeaderRibbonComponent', () => {
    let component: AtmHeaderRibbonComponent;
    let fixture: ComponentFixture<AtmHeaderRibbonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmHeaderRibbonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmHeaderRibbonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
