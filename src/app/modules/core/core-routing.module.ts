import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const coreRoutes: Routes = [
    {
        path: "", component: DashboardComponent, children: [
            { path: "beranda", component: BerandaComponent, data: { title: "Beranda" } },
            { path: "ganti-password", component: ChangePasswordComponent, data: { title: "Ganti Password" } },
            {
                path: "marketing",
                loadChildren: () => import("../marketing/marketing.module").then(m => m.MarketingModule)
            },
        ]
    },
    { path: "**", component: PageNotFoundComponent, data: { title: 'Page Not Found' } },
]

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }