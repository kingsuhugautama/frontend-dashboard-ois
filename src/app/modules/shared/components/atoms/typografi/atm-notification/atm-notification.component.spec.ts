import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmNotificationComponent } from './atm-notification.component';

describe('NotificationComponent', () => {
    let component: AtmNotificationComponent;
    let fixture: ComponentFixture<AtmNotificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AtmNotificationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AtmNotificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
