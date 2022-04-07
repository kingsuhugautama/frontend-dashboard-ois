import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInputLookUpKodeComponent } from './org-input-look-up-kode.component';

describe('AppInputLookUpComponent', () => {
    let component: OrgInputLookUpKodeComponent;
    let fixture: ComponentFixture<OrgInputLookUpKodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrgInputLookUpKodeComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrgInputLookUpKodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
