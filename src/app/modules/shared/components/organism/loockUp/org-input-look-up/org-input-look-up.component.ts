import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { MolGridComponent } from '../../../molecules/grid/grid/grid.component';
import { Columns } from '../../../molecules/grid/grid/grid.model';

@Component({
    selector: 'org-input-look-up',
    templateUrl: './org-input-look-up.component.html',
    styleUrls: ['./org-input-look-up.component.css']
})
export class OrgInputLookUpComponent implements OnInit {

    constructor(
        private modalService: BsModalService,
        private httpOperationService: HttpOperationService
    ) { }

    @Input('label') label: string

    modalRef: BsModalRef;

    @Input('modal-id') modalId: string;
    @Input('modal-title') modalTitle: string;
    @Input('modal-button') modalButton: string;
    @Input('column-items') columnItems: any;
    @Input('filter-lookup') filters: any;
    @Input('lookup-url') lookupUrl: string;
    @Input('static-filter') staticFilters: any = [];
    @Input('hide-button') isButtonHidden: boolean = false;
    @Input('button-id') buttonLookup: string;
    @Input('button-shortcut') buttonShortcut: string;
    @Input('columns') columns: Columns[];
    @Input('sourceGrid') sourceGrid: any;

    @Input('idTitle') idTitle: string;

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

    titleValue: string = '';

    currentData: any;
    @Output('onGetSelectedData') onGetSelectedData = new EventEmitter<any>();
    @Output('onOpenModal') openModal = new EventEmitter<any>();

    @Input("SelectedInputId") SelectedInputId: string;

    @Input('divLabelClass') divLabelClass: string = "col-lg-4";
    @Input('divInputClass') divInputClass: string = "col-lg-8";

    @Input("exceptional-data") ExceptionalData: any;

    @Input('ResultArrayName') ResultArrayName: any;

    RealResultData: any;

    ngOnInit(): void {
        this.gridPageSettings = { pageSizes: true, pageCount: 4, pageSize: 11 };
    }

    onOpenModal(template: TemplateRef<any>, id: any) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.openModal.emit(id);

        setTimeout(() => {
            // (<HTMLInputElement>document.getElementById("searchValueId")).focus();
            const searchValueId = document.getElementById('searchValueId') as HTMLInputElement;
            searchValueId.focus();
        }, 200);
    }

    onCloseModal() {
        this.gridDataSource = [];
        this.GridData.Grid.refresh();

        setTimeout(() => {
            this.modalRef.hide();
        }, 200);
    }

    onFetchDataSource(params: any) {
        this.httpOperationService.defaultPostRequest(this.lookupUrl, params)
            .pipe(
                map((result) => {
                    if (this.ExceptionalData) {
                        let newArr = result.data.filter((item) => {
                            return item[this.ExceptionalData.field] !== this.ExceptionalData.value_1 && item[this.ExceptionalData.field] !== this.ExceptionalData.value_2;
                        });

                        return newArr;
                    } else {
                        return result.data;
                    }
                })
            )
            .subscribe((result) => {
                if (this.ResultArrayName) {

                    const data = [];

                    result.forEach((item: any) => {
                        data.push(item[this.ResultArrayName]);
                    });

                    this.gridDataSource = data;

                    this.RealResultData = result;

                    setTimeout(() => {
                        if (result > 0) {
                            this.GridData.Grid.selectedRowIndex = 0;
                        }
                    }, 200);

                } else {
                    this.gridDataSource = result;

                    setTimeout(() => {
                        if (result > 0) {
                            this.GridData.Grid.selectedRowIndex = 0;
                        }
                    }, 200);
                }

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

        let search = [];

        if (this.staticFilters.length > 0) {
            for (let i = 0; i < this.staticFilters.length; i++) {
                search.push(this.staticFilters[i]);
            }
        } else {
            search = [
                {
                    "columnName": columnName,
                    "filter": filter,
                    "searchText": value,
                    "searchText2": ""
                }
            ];
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

    onDoubleClicked(args: any) {
        this.onKeyPressedUtility(args);
    }

    onKeyPressedUtility(data: any) {
        this.titleValue = data[this.idTitle];

        if (this.RealResultData) {
            this.onGetSelectedData.emit({ data: data, realData: this.RealResultData });
        } else {
            this.onGetSelectedData.emit(data);
        }

        this.onCloseModal();
    }

    handlePressEnter($event) {
        console.log($event);
    }

    resetValue() {
        this.titleValue = '';
        this.currentData = null;
    }

    ngOnDestroy() {
        this.gridDataSource = [];
    }
}