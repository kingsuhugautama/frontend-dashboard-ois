import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSingleMenuComponent } from './single-menu.component';

describe('SingleMenuComponent', () => {
    let component: AtmSingleMenuComponent;
    let fixture: ComponentFixture<AtmSingleMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmSingleMenuComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmSingleMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
