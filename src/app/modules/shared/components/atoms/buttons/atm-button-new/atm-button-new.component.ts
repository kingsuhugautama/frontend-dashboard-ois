import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'atm-button-new',
  templateUrl: './atm-button-new.component.html',
  styleUrls: ['./atm-button-new.component.css']
})
export class AtmButtonNewComponent implements OnInit {

  @Output('clickAtmNew') clickAtmNew = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  handelClick($event: any) {
    this.clickAtmNew.emit($event);
  }

}
