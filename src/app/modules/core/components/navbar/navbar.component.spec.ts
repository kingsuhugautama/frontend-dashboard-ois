import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmNavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: AtmNavbarComponent;
    let fixture: ComponentFixture<AtmNavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmNavbarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
