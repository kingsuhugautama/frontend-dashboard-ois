import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolMainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
    let component: MolMainMenuComponent;
    let fixture: ComponentFixture<MolMainMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolMainMenuComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolMainMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
