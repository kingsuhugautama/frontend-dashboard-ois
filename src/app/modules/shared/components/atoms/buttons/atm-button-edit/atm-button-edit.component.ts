import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'atm-button-edit',
  templateUrl: './atm-button-edit.component.html',
  styleUrls: ['./atm-button-edit.component.css']
})
export class AtmButtonEditComponent implements OnInit {
  @Output('clickAtmEdit') clickAtmEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handelClick($event: any) {
    this.clickAtmEdit.emit($event);
  }

}
