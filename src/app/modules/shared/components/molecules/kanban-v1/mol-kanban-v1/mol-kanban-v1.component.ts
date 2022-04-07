import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { KanbanColumnModel } from 'src/app/modules/shared/models/KanbanCardModel.model';

@Component({
    selector: 'mol-kanban-v1',
    templateUrl: './mol-kanban-v1.component.html',
    styleUrls: ['./mol-kanban-v1.component.css']
})
export class MolKanbanV1Component implements OnInit {

    @Input("Columns") Columns: KanbanColumnModel[];
    @Output("onPindahKeAntrian") onPindahKeAntrian = new EventEmitter();
    @Output("onSedangDiLayani") onSedangDiLayani = new EventEmitter();

    ConnectedTo: Object[] = [];

    public FilterPencarianGlobal = new Subject<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onFilterPencarianGlobal(FilterPencarianGlobal: string) {
        this.FilterPencarianGlobal.next(FilterPencarianGlobal);
    }

    PindahKeAntrian(Id){
        this.onPindahKeAntrian.emit(Id);
    }

    SedangDiLayani(Id){
        this.onSedangDiLayani.emit(Id);
    }
}
