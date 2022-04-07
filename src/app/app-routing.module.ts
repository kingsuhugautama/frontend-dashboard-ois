import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/guard/auth.guard';
import { LoggedInGuard } from './helpers/guard/logged-in.guard';

const routes: Routes = [
    {
        path: "",
        canActivate: [LoggedInGuard],
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
    },
    {
        path: "dashboard",
        canActivate: [AuthGuard],
        loadChildren: () => import("./modules/core/core.module").then(m => m.CoreModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
