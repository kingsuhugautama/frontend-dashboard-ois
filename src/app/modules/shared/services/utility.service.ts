import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/id';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor(private navigationService: NavigationService) { }

    // ** Showing Alert with Timer
    onShowingCustomAlert(icon: any, title: string, message: string, customClass?: string): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true,
            customClass: {
                popup: customClass
            }
        });
    }

    onShowingMultipleMessageAlert(icon: any, title: string, message: any): Promise<any> {
        let text = "";

        message.forEach((item) => {
            text += `<li class="text-danger mb-1">${item}</li>`;
        });

        return Swal.fire({
            icon,
            title,
            html: `<ul>${text}</ul>`,
            showCloseButton: false,
            showConfirmButton: true,
            customClass: {
                popup: 'swal-wide',
                htmlContainer: 'text-justify'
            }
        })
    }

    onShowCustomAlertWithTimer(icon: any, title: string, message: string, timer?: number): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            timer,
            showCloseButton: false,
            showConfirmButton: false
        });
    }

    onShowLoading(): Promise<any> {
        let timerInterval: any;

        return Swal.fire({
            title: 'Loading...',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            willOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b: any = content.querySelector('b');

                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((alertResponse) => {
            if (alertResponse.dismiss === Swal.DismissReason.timer) {

            }
        });
    }

    onShowingConfirmationAlert(icon: any, title: string, message: string, actionYes: () => any, actionNo: () => any): Promise<any> {
        return Swal.fire({
            icon,
            title,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
        }).then((result) => {
            if (result.isConfirmed) {
                actionYes();
            } else if (result.isDenied) {
                actionNo();
            }
        });
    }

    onShowLoadingBeforeSend(): void {
        Swal.fire({
            title: 'Loading...',
            showCancelButton: false,
            showConfirmButton: false,
            showDenyButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
    }

    // ** Generate Custom Hex Color for Border
    onGenerateCustomColor(): any {
        const numberHex = (Math.random() * 0xfffff * 1000000).toString(16);

        return '#' + numberHex.slice(0, 6);
    }

    onDeleteDetailResepFromCardBody(data: any): any {
        const deletedDetailResep: any[] = [];

        for (let i = 0; i < data.length; i++) {
            deletedDetailResep.push(Object.keys(data[i]).filter(key =>
                key !== 'DetailResep' && key !== 'Waktu').reduce((obj, key) => {
                    obj[key] = data[i][key];

                    return obj;
                }, {}));
        }

        return deletedDetailResep;
    }

    /**
     * @onFormatDate Formatting Date Menggunakan Moment 
     * @param date Wajib type data Date
     * @param format Wajib type data string
     * @keterangan format day   -> dddd = Rabu, Do = 15
     * @keterangan format month -> MMM = Sep, MMMM = September
     * @keterangan format year  -> yy = 21, yyyy = 2021
    */
    onFormatDate(date: any, format?: string): any {
        moment.locale('id')

        let date_now = format ? moment(date).format(format) : moment(date).format();

        return date_now;
    }

    onFormatStringToDate(data: string, format?: string): any {
        moment.locale('id');

        let date = format ? moment(data).format(format) : moment(data).toDate();

        return date;
    }

    onFixingDatepickerSyncfusion(date: any): any {
        let current_date = new Date(date);

        current_date = new Date(date.setDate(current_date.getDate() + 1));

        return current_date.toISOString();
    }

    onValidateForm(form: FormGroup): any {
        let formControls = form.controls;

        let formControlInvalid = [];

        for (let key in formControls) {
            if (formControls.hasOwnProperty(key)) {
                if (formControls[key].invalid) {
                    formControlInvalid.push(key);
                }
            }
        }

        let newArr = formControlInvalid.map((item: string) => {
            return item.replace(/[_]/g, ' ').toUpperCase();
        });

        return newArr;
    }

    setInputNumericElement(textbox: Element, inputFilter: (value: string) => boolean): void {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                    this.value = this.oldValue;
                    if (this.oldSelectionStart !== null &&
                        this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                } else {
                    this.value = "";
                }
            });
        });
    }

    validasiDataDetail(data: any[], message: string = ''): boolean {

        let data_error = data.filter(function (el) {
            return el.validasi == false;
        });
        // console.log('data',data);
        // console.log('error',data_error);
        let htmlSelection = '';
        if (data_error.length > 0) {

            htmlSelection = '<div class="text-danger"><ul>';
            data_error.forEach((value: any, index) => {
                htmlSelection += `<li>${value.nama_item} (${(value.message) ? value.message : ''})</li>`;
            })
            htmlSelection += `</ul><br/><h3>${message}</h3></div>`;

            Swal.fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            }).then(() => {
                return false;
            })
        } else {
            return true;
            // return (data_error.length==0)?false:true;
        }

    }

    alertError(message: string) {
        return Swal.fire({
            icon: 'error',
            title: message,
        })
    }
}
