import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolTopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
    let component: MolTopMenuComponent;
    let fixture: ComponentFixture<MolTopMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolTopMenuComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolTopMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
