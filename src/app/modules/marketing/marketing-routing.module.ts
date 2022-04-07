import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrackingMarketingPerCustomerComponent } from "./pages/tracking-marketing-per-customer/tracking-marketing-per-customer.component";
import { TrackingMarketingPerMarketingComponent } from "./pages/tracking-marketing-per-marketing/tracking-marketing-per-marketing.component";

const marketingRoutes: Routes = [
    {
        path: 'timeline-per-customer', component: TrackingMarketingPerCustomerComponent, data: { title: 'Timeline Marketing per Customer' }
    },
    {
        path: 'timeline-per-marketing', component: TrackingMarketingPerMarketingComponent, data: { title: 'Timeline Marketing per User Marketing' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(marketingRoutes)],
    exports: [RouterModule]
})
export class MarketingRoutingModule { }