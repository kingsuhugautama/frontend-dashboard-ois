import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTreeviewMenuComponent } from './atm-treeview-menu.component';

describe('TreeviewMenuComponent', () => {
    let component: AtmTreeviewMenuComponent;
    let fixture: ComponentFixture<AtmTreeviewMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmTreeviewMenuComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmTreeviewMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
