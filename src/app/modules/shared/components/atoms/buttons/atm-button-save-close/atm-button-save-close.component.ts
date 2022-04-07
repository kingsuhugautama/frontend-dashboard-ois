import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'atm-button-save-close',
  templateUrl: './atm-button-save-close.component.html',
  styleUrls: ['./atm-button-save-close.component.css']
})
export class AtmButtonSaveCloseComponent implements OnInit {
  @Output('clickButton') clickButton = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  
  }

  handelClick($event: any) {
    this.clickButton.emit($event);
  }

}
