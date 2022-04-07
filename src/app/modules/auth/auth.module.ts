import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthenticationComponent } from './pages/authentication/authentication.component';

@NgModule({
    declarations: [
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(
            [
                { path: '', component: AuthenticationComponent, data: { title: 'Sign In Account' } }
            ]
        ),
        SharedModule
    ]
})
export class AuthModule { }
