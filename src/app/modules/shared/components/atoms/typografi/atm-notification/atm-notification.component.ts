import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Component({
    selector: 'atm-notification',
    templateUrl: './atm-notification.component.html',
    styleUrls: ['./atm-notification.component.css'],
    host: { '[class.ngb-toasts]': 'true' }
})
export class AtmNotificationComponent implements OnInit {

    Toasts: any;

    constructor(
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.Toasts = this.notificationService.toasts;
    }

    onHideNotification(toast: any, index: number): void {
        return this.notificationService.onRemoveToast(toast, index);
    }
}
