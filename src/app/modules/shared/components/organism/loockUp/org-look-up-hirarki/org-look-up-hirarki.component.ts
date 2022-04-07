import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { GridModel } from '@syncfusion/ej2-angular-grids';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { MolGridComponent } from '../../../molecules/grid/grid/grid.component';
import { Columns } from '../../../molecules/grid/grid/grid.model';

interface details{
  details:Object[]
}


@Component({
  selector: 'org-look-up-hirarki',
  templateUrl: './org-look-up-hirarki.component.html',
  styleUrls: ['./org-look-up-hirarki.component.css']
})
export class OrgLookUpHirarkiComponent implements OnInit {

  subscriptions: Subscription[] = []
  constructor(
      private modalService: BsModalService,
      private httpOperationService: HttpOperationService,
      private changeDetection: ChangeDetectorRef
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
  @Input('columnsChild') columnsChild: any;  
  @Input('sourceGrid') sourceGrid: any;
  @Input('queryString') queryString: string;


  @Input('idKode') idKode: string;
  @Input('idTitle') idTitle: string;
  
  childGrid: GridModel;
  items: any;

  gridId: string = 'GridModal';
  gridWidth: any = 'auto';
  gridHeight: any = 300;
  gridDataSource: any;
  gridChildDataSource: any;
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
  @ViewChild('grid') grid: MolGridComponent;
  ngOnInit(): void {
      this.gridPageSettings = { pageSizes: true, pageCount: 4, pageSize: 11 };
      this.childGrid = {
        dataSource: this.gridChildDataSource,
        queryString: this.queryString,
        rowHeight: 30,
        allowResizing: true,
        allowTextWrap: true,
        textWrapSettings: { wrapMode: 'Both' },
        columns: this.columnsChild
      }
  }

  onInitialized(component: MolGridComponent) {
      this.grid = component;
  }

  onOpenModal() {

      const _combine = combineLatest(
          this.modalService.onShow,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());

      this.subscriptions.push(this.modalService.onShown.subscribe(() => {
          setTimeout(() => {
              (<HTMLInputElement>document.getElementById("searchValueId")).focus();
          }, 100)
      })

      );

      this.subscriptions.push(_combine);

      this.modalRef = this.modalService.show(
          this.template,
          Object.assign({}, { class: 'modal-lg' })
      );

      this.unsubscribe();

  }

  unsubscribe() {
      this.subscriptions.forEach((subscription: Subscription) => {
          subscription.unsubscribe();
      });
      this.subscriptions = [];
  }

  onCloseModal() {
      this.modalRef.hide();

      setTimeout(() => {
          this.gridDataSource = [];
      }, 200);
  }

  onFetchDataSource(params: any) {
      this.httpOperationService.defaultPostRequest(this.lookupUrl, params)
          .subscribe((_result) => {
              this.gridDataSource = _result.data;

              setTimeout(() => {
                  if (_result.data.length > 0) {
                      this.grid.Grid.selectedRowIndex = 0;
                  }
                  this.mappingChildGrid()
              }, 200);
          }, (pesanError) => {
              console.log(pesanError);
          })
  }

  onChangeFilters(args: any) {
      this.currentFilters = args;

    //   console.log(this.filters);
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

  onRowSelected(args: any) {
    this.currentData = args.data;
  }

  onKeyPressed(args: any) {
      let keycode = args.keyCode;
    //   console.log(this.currentData)
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
  }

  onDoubleClicked(args: any) {
      this.onKeyPressedUtility(args);
  }

  handlePressEnter($event) {
    //   console.log($event);
  }

  resetValue() {
      this.kodeValue = ''
      this.titleValue = ''
      this.currentData = null
  }

  ngOnDestroy() {
      this.gridDataSource = [];
  }

  mappingChildGrid() {
    this.gridChildDataSource = [];
    this.gridDataSource.forEach(element => {
      this.gridChildDataSource.push(...element.details)
    });

    this.childGrid = {
      dataSource: this.gridChildDataSource,
      queryString: this.queryString,
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: true,
      textWrapSettings: { wrapMode: 'Both' },
      columns: this.columnsChild
    }
  }

}
