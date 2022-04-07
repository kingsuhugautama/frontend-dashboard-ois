import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'atm-button-delete',
  templateUrl: './atm-button-delete.component.html',
  styleUrls: ['./atm-button-delete.component.css']
})
export class AtmButtonDeleteComponent implements OnInit {
  @Output('clickAtmDelete') clickAtmDelete = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  handelClick($event: any) {
    this.clickAtmDelete.emit($event);
  }

}
