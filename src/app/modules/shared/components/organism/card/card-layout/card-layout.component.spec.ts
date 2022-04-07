import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCardLayoutComponent } from './card-layout.component';

describe('CardLayoutComponent', () => {
    let component: OrgCardLayoutComponent;
    let fixture: ComponentFixture<OrgCardLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrgCardLayoutComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrgCardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
