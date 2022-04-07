import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { MolGridComponent } from '../../../molecules/grid/grid/grid.component';
import * as Config from './json/dummy.json';

@Component({
    selector: 'org-look-up-checklist',
    templateUrl: './org-look-up-checklist.component.html',
    styleUrls: ['./org-look-up-checklist.component.css'],
    providers: [BsModalService]
})
export class OrgLookUpChecklistComponent implements OnInit {

    GridConfig = Config;

    modalRef: BsModalRef;
    @ViewChild('template') template: TemplateRef<any>;

    @Input('LookupUrl') LookupUrl: string;
    @Input('LookupTitle') LookupTitle: string;
    @Input('LookupFilters') LookupFilters: any;
    currentFilters: any;

    @Input('GridId') GridId: string;
    @Input('GridColumns') GridColumns: any;

    GridData: MolGridComponent = null;
    GridDataSource: any[];
    GridPagingSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };

    @Input('ParameterTambahan') ParameterTambahan: any;

    @Output('OnGetSelectedRecords') OnGetSelectedRecords = new EventEmitter<any>();

    constructor(
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private httpOperationService: HttpOperationService
    ) { }

    ngOnInit(): void {
    }

    hanldeOpenModalLookupChecklist(): void {
        this.GridDataSource = [];

        this.modalRef = this.modalService.show(
            this.template,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onChangeFilters(args: any): void {
        this.currentFilters = args;
    }

    onFetchDataSource(params: any) {
        this.httpOperationService.defaultPostRequest(this.LookupUrl, params)
            .subscribe((_result) => {
                this.GridDataSource = _result.data;

                setTimeout(() => {
                    if (_result.data.length > 0) {
                        this.GridData.Grid.selectedRowIndex = 0;
                    }
                }, 200);

            }, (pesanError) => {
                console.log(pesanError);
            });
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

        let parameter = [];

        if (this.ParameterTambahan && Object.keys(this.ParameterTambahan).length > 0) {
            parameter = {
                "filters": [
                    {
                        "columnName": columnName,
                        "filter": filter,
                        "searchText": value,
                        "searchText2": ""
                    }
                ],
                ...this.ParameterTambahan
            };
        } else {
            parameter = [
                {
                    "columnName": columnName,
                    "filter": filter,
                    "searchText": value,
                    "searchText2": ""
                }
            ];
        };

        console.log(parameter);

        this.onFetchDataSource(parameter);
    }

    onRowSelected(args: any): void {
        // console.log(args);
    }

    onInitialized(component: MolGridComponent): void {
        this.GridData = component;
    }

    handleSubmitLookupChecklist(): void {
        const SelectedRow = this.GridData.Grid.getSelectedRecords();

        this.OnGetSelectedRecords.emit(SelectedRow);

        this.handleCloseModalLookupChecklist();
    }

    handleCloseModalLookupChecklist(): void {
        this.modalRef.hide();
    }
}
