import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

    // ** Form Group
    FormChangePassword: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
        this.FormChangePassword = this.formBuilder.group({
            id_user: [0, []],
            password_lama: ['', [Validators.required]],
            password_baru: ['', [Validators.required]],
            confirmation: ['', [Validators.required]],
        });
    }

    onTogglingSeePassword(ElementId: string): void {
        const elem = (document.getElementById(ElementId) as HTMLInputElement);

        const elemIcon = (document.getElementById(ElementId + 'Icon') as HTMLElement);

        if (elem.type === 'password') {
            elem.type = 'text';
            elemIcon.classList.remove('fa-eye');
            elemIcon.classList.add('fa-eye-slash');
        } else {
            elem.type = 'password';
            elemIcon.classList.remove('fa-eye-slash');
            elemIcon.classList.add('fa-eye');
        }
    }

    onClickButtonSubmit(FormChangePassword: any) {
        if (FormChangePassword.confirmation !== FormChangePassword.password_baru) {
            this.utilityService.onShowingCustomAlert('error', 'Oops', 'Konfirmasi Password Salah');
        } else {
            FormChangePassword.id_user = this.authenticationService.currentUserValue.id_user;

            this.authenticationService.onChangePassword(FormChangePassword)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                        .then(() => {
                            this.FormChangePassword.reset();
                        });
                });
        }
    }

    get password_lama(): AbstractControl { return this.FormChangePassword.get('password_lama'); }
    get password_baru(): AbstractControl { return this.FormChangePassword.get('password_baru'); }
    get confirmation(): AbstractControl { return this.FormChangePassword.get('confirmation'); }
}
