import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KanbanDetailResep } from 'src/app/modules/shared/models/KanbanCardModel.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'atm-card',
    templateUrl: './atm-card.component.html',
    styleUrls: ['./atm-card.component.css']
})
export class AtmCardComponent implements OnInit {

    @Output("onClickedCardButton") onClickedCardButton = new EventEmitter();

    // ** Card Body Component Properties
    @Input("Id") Id: number;
    @Input("NamaPasien") NamaPasien: string;
    @Input("Waktu") Waktu: string;
    @Input("Status") Status: string;
    @Input("NamaDokter") NamaDokter: string;
    @Input("KodeResep") KodeResep: string;
    @Input("NoRegister") NoRegister: string;
    @Input("NomorAntrian") NomorAntrian:string;
    @Input("DetailResep") DetailResep: KanbanDetailResep[];

    ShowDetailObat: boolean = false;

    BorderLeft: string;

    @Output("onMarkedResepAsComplete") onMarkedResepAsComplete = new EventEmitter();

    @Output("onMarkedResepSudahDilayani") onMarkedResepSudahDilayani = new EventEmitter();

    @Output("onPindahKeAntrian") onPindahKeAntrian = new EventEmitter();
    
    constructor(private utilityService: UtilityService) { }

    ngOnInit(): void {
        this.onGenerateCustomColor();
        console.log(this.Status);
    }

    onClickCardButton(NamaPasien: string, Waktu: string, Status: string, NamaDokter: string, KodeResep: string, DetailResep: KanbanDetailResep[]) {
        let Data = {
            NamaPasien: NamaPasien,
            Waktu: Waktu,
            Status: Status,
            NamaDokter: NamaDokter,
            KodeResep: KodeResep,
            DetailResep: DetailResep,
        };

        this.onClickedCardButton.emit(Data);
    }

    onGenerateCustomColor() {
        this.BorderLeft = "border-left: 0.25em solid " + this.utilityService.onGenerateCustomColor() + ";";
    }

    onTogglingDetailObat(KodeResep: string) {
        this.ShowDetailObat = !this.ShowDetailObat;

        let caret = (<HTMLElement>document.getElementById(KodeResep + "Caret"));

        if (this.ShowDetailObat) {
            caret.classList.remove("fa-caret-down");
            caret.classList.add("fa-caret-up");
        } else {
            caret.classList.add("fa-caret-down");
            caret.classList.remove("fa-caret-up");
        }
    }

    onMarkResepAsComplete(Id: string) {
        this.onMarkedResepAsComplete.emit(Id);
    }

    onResepPindahKeAntrian(Id: string){
        this.onPindahKeAntrian.emit(Id);
    }

    onMarkResepSudahDilayani(Id: string) {
        this.onMarkedResepSudahDilayani.emit(Id);
    }
}
