import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MolGridComponent } from '../../../molecules/grid/grid/grid.component';
import { Columns } from '../../../molecules/grid/grid/grid.model';


@Component({
    selector: 'org-input-look-up-kode',
    templateUrl: './org-input-look-up-kode.component.html',
    styleUrls: ['./org-input-look-up-kode.component.css'],
    providers: [BsModalService]

})
export class OrgInputLookUpKodeComponent implements OnInit {

    constructor(
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private httpOperationService: HttpOperationService
    ) { }

    @Input('label') label: string

    modalRef: BsModalRef;

    @Input('modal-id') modalId: string;
    @Input('modal-title') modalTitle: string;
    @Input('modal-button') modalButton: string;
    @Input('filter-lookup') filters: any;
    @Input('lookup-url') lookupUrl: string;
    @Input('static-filter') staticFilters: any = [];
    @Input('hide-button') isButtonHidden: boolean = false;
    @Input('button-id') buttonLookup: string;
    @Input('columns') columns: Columns[];
    @Input('sourceGrid') sourceGrid: any;

    @Input('idKode') idKode: string;
    @Input('idTitle') idTitle: string;
    @Input('disabled') disabled: boolean;
    items: any;

    @ViewChild('GridData') GridData: MolGridComponent;
    gridId: string = 'GridModal';
    gridWidth: any = 'auto';
    gridHeight: any = 300;
    gridDataSource: any;
    gridLines: string = 'Both';
    gridPaging: boolean = true;
    gridPageSettings: Object;
    searchValueId: string;
    currentFilters: any;

    kodeValue: string = '';
    titleValue: string = '';

    currentData: any;
    @Output('onGetSelectedData') onGetSelectedData = new EventEmitter<any>();
    @Output('onOpenModal') openModal = new EventEmitter<any>();

    @Input("SelectedInputId") SelectedInputId: string;
    @ViewChild('template') template: TemplateRef<any>;

    ngOnInit(): void {
        this.gridPageSettings = { pageSizes: true, pageCount: 4, pageSize: 11 };
    }

    onOpenModal() {
        this.modalRef = this.modalService.show(
            this.template,
            Object.assign({}, { class: 'modal-lg' })
        );

        setTimeout(() => {
            (<HTMLInputElement>document.getElementById("searchValueId")).focus();
        }, 500);
    }

    onCloseModal() {
        setTimeout(() => {
            this.gridDataSource = [];
        }, 200);

        this.modalRef.hide();
    }

    onFetchDataSource(params: any) {
        this.httpOperationService.defaultPostRequest(this.lookupUrl, params)
            .subscribe((_result) => {
                this.gridDataSource = _result.data;

                setTimeout(() => {
                    if (_result.data.length > 0) {
                        this.GridData.Grid.selectedRowIndex = 0;
                    }
                }, 200);

            }, (pesanError) => {
                console.log(pesanError);
            });
    }

    onChangeFilters(args: any) {
        this.currentFilters = args;
    }

    onSearchLookup(value: string) {
        let columnName: string;
        let filter: string;

        if (this.currentFilters) {
            columnName = this.currentFilters.field;
            filter = this.currentFilters.filter;
        } else {
            columnName = "";
            filter = "";
        }

        let search = [{
            "columnName": columnName,
            "filter": filter,
            "searchText": value,
            "searchText2": ""
        }];

        if (this.staticFilters.length > 0) {
            for (let i = 0; i < this.staticFilters.length; i++) {
                search.push(this.staticFilters[i]);
            }
        } else {
            //... do nothing
        }
        this.onFetchDataSource(search);
    }

    onInitialized(component: MolGridComponent) {
        this.GridData = component;
    }

    onRowSelected(args: any) {
        this.currentData = args.data;
    }

    onKeyPressed(args: any) {
        let keycode = args.keyCode;

        if (keycode == 13) {
            args.cancel = true;
            this.onKeyPressedUtility(this.currentData);
        }
    }

    onKeyPressedUtility(data: any) {
        // (<HTMLInputElement>document.getElementById(this.SelectedInputId)).value = data[this.SelectedInputId];
        this.kodeValue = data[this.idKode];
        this.titleValue = data[this.idTitle];
        this.onGetSelectedData.emit(data);
        this.onCloseModal();

        setTimeout(() => {
            (<HTMLInputElement>document.getElementById(`atm${this.idKode}`)).focus();
        }, 500);
    }

    onDoubleClicked(args: any) {
        this.onKeyPressedUtility(args);
    }

    handlePressEnter($event: KeyboardEvent) {
        let param = [
            {
                "columnName": this.filters[0].field,
                "filter": this.filters[0].filter,
                "searchText": $event.srcElement['value'],
                "searchText2": ""
            }
        ];

        this.httpOperationService.defaultPostRequest(this.lookupUrl, param)
            .subscribe((_result) => {
                if (_result.data.length == 1) {
                    this.titleValue = _result.data[0][this.idTitle];

                    this.onGetSelectedData.emit(_result.data)
                }

                if (_result.data.length > 1) {
                    this.onOpenModal();

                    setTimeout(() => {
                        (<HTMLInputElement>document.getElementById("searchValueId")).value = $event.srcElement['value'];
                        this.onFetchDataSource(param);
                    }, 500);
                }

                if (_result.data.length < 1) {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', 'Data Tidak Ditemukan')
                        .then(() => {
                            this.onOpenModal();

                            setTimeout(() => {
                                (<HTMLInputElement>document.getElementById("searchValueId")).value = "";
                            }, 500);
                        })
                }
            });
    }

    resetValue() {
        this.kodeValue = ''
        this.titleValue = ''
        this.currentData = null
    }

    ngOnDestroy() {
        this.gridDataSource = [];
    }
}
