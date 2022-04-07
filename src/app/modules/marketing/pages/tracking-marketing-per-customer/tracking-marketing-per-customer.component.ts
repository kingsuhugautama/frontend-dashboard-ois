import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EventRenderedArgs, EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { remove } from '@syncfusion/ej2-base';
import { MolVerticalTimelineComponent } from 'src/app/modules/shared/components/molecules/timeline/mol-vertical-timeline/mol-vertical-timeline.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Data from '../../data/fake.datasource.json';
import { ITimelineMarketingModel } from '../../model/timeline.model';

@Component({
    selector: 'app-tracking-marketing-per-customer',
    templateUrl: './tracking-marketing-per-customer.component.html',
    styleUrls: ['./tracking-marketing-per-customer.component.css']
})
export class TrackingMarketingPerCustomerComponent implements OnInit, AfterViewInit {

    Data = Data;

    FormSearch: FormGroup;

    @ViewChild('DropdownCustomer') DropdownCustomer: DropDownListComponent;
    DropdownCustomerDatasource: any[] = [];
    DropdownCustomerField: Object = { text: 'nama_customer', value: 'id_customer' };
    SelectedDataCustomer: any;

    @ViewChild('ScheduleTimelineComp') ScheduleTimelineComp: ScheduleComponent;
    ScheduleDatasource: ITimelineMarketingModel[] = this.Data['timeline-per-customer'];
    ScheduleEventSettings: EventSettingsModel = { dataSource: this.ScheduleDatasource };
    ScheduleSelectedData: ITimelineMarketingModel;

    CurrentDate: Date = new Date();

    @ViewChild('VerticalTimelineComp') VerticalTimelineComp: MolVerticalTimelineComponent;

    FormDetail: FormGroup;

    @ViewChild('DatepickerYearComp') DatepickerYearComp: DatePickerComponent;

    @ViewChild('DatepickerMonthComp') DatepickerMonthComp: DatePickerComponent;
    DatepickerValueMonth: Date = new Date();
    DatepickerMonthMin: Date;
    DatepickerMonthMax: Date;

    @ViewChild('DatepickerDayComp') DatepickerDayComp: DatePickerComponent;
    DatepickerValueDay: Date = new Date();
    DatepickerDayMin: Date;
    DatepickerDayMax: Date;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.DropdownCustomerDatasource = [
            { id_customer: 1, nama_customer: 'PT. MERBABU' },
            { id_customer: 2, nama_customer: 'PT. SEMERU' },
        ];

        this.FormDetail = this.formBuilder.group({
            Id: [0, []],
            Subject: [0, []],
            Description: [0, []],
            StartTime: [0, []],
            EndTime: [0, []],
            TopicId: [0, []],
            TopicName: [0, []],
            CustomerId: [0, []],
            Icon: [0, []],
            CategoryColor: [0, []],
            Latitude: [0, []],
            Longitude: [0, []],
            PIC: [0, []],
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            const year = this.utilityService.onFormatDate(this.CurrentDate, 'yyyy');
            const month = this.utilityService.onFormatDate(this.CurrentDate, 'MM');
            this.DatepickerMonthMin = new Date(`${year}-01-01`);
            this.DatepickerMonthMax = new Date(`${year}-12-01`);
            this.DatepickerMonthComp.value = new Date(`${year}-${month}-01`);
        }, 150);
    }

    handleChangeDropdownCustomer(args: any): void {
        const data = args.itemData;

        const scheduleDatasource = this.ScheduleDatasource.filter((item) => { return item['CustomerId'] === data.id_customer })

        this.ScheduleTimelineComp.eventSettings.dataSource = scheduleDatasource;

        this.SelectedDataCustomer = data;
    }

    onManipulateScheduleDatasource(nama_customer: string): void {

    }

    onScheduleEventRendered(args: EventRenderedArgs): void {
        const CategoryColor: string = args.data.CategoryColor as string;

        if (!args.element || !CategoryColor) {
            return;
        }

        if (this.ScheduleTimelineComp.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = CategoryColor;
        } else {
            args.element.style.backgroundColor = CategoryColor;
        }
    }

    onScheduleNavigatingView(args: any): void {
        if (this.ScheduleTimelineComp.currentView === 'Month' && args.action === 'view') {
            args.cancel = true;
        } else {
            args.cancel = false;
        }

        if (args.currentView === 'TimelineMonth' && args.action === 'view') {
            const btnTimeline = document.getElementById('btnTimeline') as HTMLElement;
            btnTimeline.click();

            this.VerticalTimelineComp.Datasource$.next(this.ScheduleTimelineComp.eventSettings.dataSource as any);
        }
    }

    onScheduleClickDetail(data: any): void {
        delete data.Guid;
        delete data.elementType;

        data.StartTime = this.utilityService.onFormatDate(data.StartTime, 'Do MMM yyyy HH:mm:ss');
        data.EndTime = this.utilityService.onFormatDate(data.EndTime, 'Do MMM yyyy HH:mm:ss');

        const btnModalDetail = document.getElementById('btnModalDetail') as HTMLElement;
        btnModalDetail.click();

        this.ScheduleSelectedData = data;

        this.FormDetail.setValue(data);
    }

    handleChangeDatepickerYear(args: any): void {
        const year = this.utilityService.onFormatDate(args.value, 'yyyy');

        this.DatepickerMonthMin = new Date(`${year}-01-01`);
        this.DatepickerMonthMax = new Date(`${year}-12-01`);

        this.DatepickerMonthComp.value = this.DatepickerMonthMin;
    }

    handleChangeDatepickerMonth(args: any): void {
        this.DatepickerDayComp.value = null;

        const year = this.utilityService.onFormatDate(args.value, 'yyyy');
        const month = this.utilityService.onFormatDate(args.value, 'MM');

        this.DatepickerDayMin = new Date(`${year}-${month}-01`);

        const lastday = new Date(year, month + 1, 0).getDate();
        this.DatepickerDayMax = new Date(`${year}-${month}-${lastday}`);

        this.DatepickerDayComp.value = this.DatepickerDayMin;
    }

    get Id(): AbstractControl { return this.FormDetail.get('Id') as AbstractControl }
    get Subject(): AbstractControl { return this.FormDetail.get('Subject') as AbstractControl }
    get Description(): AbstractControl { return this.FormDetail.get('Description') as AbstractControl }
    get StartTime(): AbstractControl { return this.FormDetail.get('StartTime') as AbstractControl }
    get EndTime(): AbstractControl { return this.FormDetail.get('EndTime') as AbstractControl }
    get TopicId(): AbstractControl { return this.FormDetail.get('TopicId') as AbstractControl }
    get TopicName(): AbstractControl { return this.FormDetail.get('TopicName') as AbstractControl }
    get CustomerId(): AbstractControl { return this.FormDetail.get('CustomerId') as AbstractControl }
    get Icon(): AbstractControl { return this.FormDetail.get('Icon') as AbstractControl }
    get CategoryColor(): AbstractControl { return this.FormDetail.get('CategoryColor') as AbstractControl }
    get Latitude(): AbstractControl { return this.FormDetail.get('Latitude') as AbstractControl }
    get Longitude(): AbstractControl { return this.FormDetail.get('Longitude') as AbstractControl }
    get PIC(): AbstractControl { return this.FormDetail.get('PIC') as AbstractControl }
}
