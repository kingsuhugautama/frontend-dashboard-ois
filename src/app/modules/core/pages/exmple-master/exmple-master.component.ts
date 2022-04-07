declare var sum: any;

import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import exampleMasterModel from 'src/app/modules/core/models/example/exampleMaster.model';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { ExampleMasterService } from 'src/app/modules/core/services/example/example-master.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';

import GridDaftarBarangColumns from './json/GridDaftarBarang.json';

@Component({
    selector: 'app-exmple-master',
    templateUrl: './exmple-master.component.html',
    styleUrls: ['./exmple-master.component.css'],
})

export class ExmpleMasterComponent implements OnInit, AfterViewInit {

    formPasien: FormGroup;
    columns: Columns[];
    datatable: exampleMasterModel[];
    sourceGrid: any;

    @ViewChild('lookUpPasien')
    lookUpPasien: OrgInputLookUpKodeComponent;

    modalRef: BsModalRef;
    @ViewChild('modalDialogBatch') modalDialogBatch: TemplateRef<any>;

    // ** Grid Setup Role Button Properties
    private gridDaftarBarang: MolGridComponent = null;
    GridDaftarBarangEditSettings: EditSettingsModel = { allowAdding: true, allowEditing: true };
    GridDaftarBarangColums = GridDaftarBarangColumns;
    GridDaftarBarangToolbar = ["Add"];
    GridDaftarBarangDataSource: any;

    constructor(
        private fb: FormBuilder,
        private modalService: BsModalService,
        private exampleHttp: ExampleMasterService
    ) {

        this.formPasien = this.fb.group({
            name: [''],
            email: ['', Validators.required],
            example: ['', [Validators.maxLength(20), Validators.required]],
            lookup: ['', Validators.required],
        });

        this.columns = [
            {
                width: 10,
                headerText: 'Email',
                field: 'email',
                visible: true,
            },
            {
                width: 10,
                headerText: 'Example',
                field: 'example',
                visible: true,
            },
            {
                width: 10,
                headerText: 'Name',
                field: 'name',
                visible: true,
            },
            {
                width: 10,
                headerText: 'Lookup',
                field: 'lookup',
                visible: false,
            },
        ];

        this.sourceGrid = this.exampleHttp.getExample();
    }

    ngOnInit(): void { }

    ngAfterViewInit() { }

    handleError() {
        console.log('error')
    }

    handleSukses(response) {
        console.log(response)
    }

    handleSubmit(data: exampleMasterModel) {

        console.log(this.formPasien.value)
        if (this.formPasien.valid) {
            this.exampleHttp.postExampleWithAction(data, 'url', this.handleSukses.bind(this), this.handleError.bind(this));
        }

    }

    heandleSelectedLookUp(arg: any) {
        this.lookup.setValue(arg.email);
    }

    onClickButton() {
        // ** Set Modal Size
        this.modalRef = this.modalService.show(this.modalDialogBatch);
    }

    onSelectedRow(args: any): void {

    }

    onToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                break;
            default:
                break;
        }
    }

    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarBarang = component;
    }

    get email() { return this.formPasien.get('email') }
    get example() { return this.formPasien.get('example') }
    get lookup() { return this.formPasien.get('lookup') }

}
