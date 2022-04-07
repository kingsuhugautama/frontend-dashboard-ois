import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { MolGridComponent } from '../../../molecules/grid/grid/grid.component';
import { Columns } from '../../../molecules/grid/grid/grid.model';

@Component({
    selector: 'org-input-look-up-static-filter',
    templateUrl: './org-input-look-up-static-filter.component.html',
    styleUrls: ['./org-input-look-up-static-filter.component.css']
})
export class OrgInputLookUpStaticFilterComponent implements OnInit, OnDestroy {

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

    @Input('ParameterTambahan') ParameterTambahan: any;

    constructor(
        private modalService: BsModalService,
        private httpOperationService: HttpOperationService
    ) { }

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
            (<HTMLInputElement>document.getElementById("searchValueId")).focus();
        }, 200);
    }

    onCloseModal() {
        setTimeout(() => {
            this.gridDataSource = [];
        }, 200);

        this.modalRef.hide();
    }

    onFetchDataSource(params: any) {

        const parameter = {
            "filters": params,
            ...this.ParameterTambahan
        };

        this.httpOperationService.defaultPostRequest(this.lookupUrl, parameter)
            .subscribe((_result) => {
                this.gridDataSource = _result.data;

                setTimeout(() => {
                    if (_result.data.length > 0) {
                        this.GridData.Grid.selectedRowIndex = 0;
                    }
                }, 200);

            }, (pesanError) => {
                console.log(pesanError);
            })
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
        this.titleValue = data[this.idTitle];
        this.onGetSelectedData.emit(data);
        this.onCloseModal();
    }

    onDoubleClicked(args: any) {
        this.onKeyPressedUtility(args);
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
