import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'mol-button-master',
  templateUrl: './mol-button-master.component.html',
  styleUrls: ['./mol-button-master.component.css']
})
export class MolButtonMasterComponent implements OnInit {

  @Output('clickNew') clickNew = new EventEmitter<any>()
  @Output('clickEdit') clickEdit = new EventEmitter<any>()
  @Output('clickDelete') clickDelete = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  handleClickNew($event){
    this.clickNew.emit($event)
  }

  handleClickEdit($event){
    this.clickEdit.emit($event)
  }

  handleClickDelete($event){
    this.clickDelete.emit($event)
  }

}
