import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgendaService, DayService, MonthAgendaService, MonthService, ResizeService, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from "@syncfusion/ej2-angular-schedule";
import { SharedModule } from "../shared/shared.module";
import { MarketingRoutingModule } from "./marketing-routing.module";
import { TrackingMarketingPerCustomerComponent } from "./pages/tracking-marketing-per-customer/tracking-marketing-per-customer.component";
import { TrackingMarketingPerMarketingComponent } from "./pages/tracking-marketing-per-marketing/tracking-marketing-per-marketing.component";

@NgModule({
    declarations: [
        TrackingMarketingPerCustomerComponent,
        TrackingMarketingPerMarketingComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MarketingRoutingModule,
        ScheduleModule
    ],
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
        ResizeService,
    ]
})
export class MarketingModule { }