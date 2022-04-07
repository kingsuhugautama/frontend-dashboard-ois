import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let component: MolSidebarComponent;
    let fixture: ComponentFixture<MolSidebarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MolSidebarComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MolSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
