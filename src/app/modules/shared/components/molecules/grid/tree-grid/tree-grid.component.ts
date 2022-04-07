import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mol-tree-grid',
    templateUrl: './tree-grid.component.html',
    styleUrls: ['./tree-grid.component.css']
})
export class MolTreeGridComponent implements OnInit {

    DataSource: any[];

    constructor() { }

    ngOnInit(): void {
    }

}
