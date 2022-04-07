import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TimelineVertical {
    Id: number
    Subject: string
    StartTime: string
    EndTime: string
    IsAllDay: boolean
    TopicId: number
    TopicName: string
    CustomerId: number
    Icon: string
    Location: string
    CategoryColor: string
}

@Component({
    selector: 'mol-vertical-timeline',
    templateUrl: './mol-vertical-timeline.component.html',
    styleUrls: ['./mol-vertical-timeline.component.css']
})
export class MolVerticalTimelineComponent implements OnInit {

    Datasource$ = new BehaviorSubject<TimelineVertical[]>([]);

    constructor() { }

    ngOnInit(): void {
        this.Datasource$.subscribe((result) => {
            console.log(result);
        });
    }

}
