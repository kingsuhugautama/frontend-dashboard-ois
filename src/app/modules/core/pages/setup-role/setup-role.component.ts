import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { SetupRoleService } from '../../services/setup-role/setup-role.service';
import GridHeader from './json/GridSetupRole.json';

@Component({
    selector: 'app-setup-role',
    templateUrl: './setup-role.component.html',
    styleUrls: ['./setup-role.component.css']
})
export class SetupRoleComponent implements OnInit {

    // ** Grid Setup User Properties
    @ViewChild('gridSetupRole', { static: true }) gridSetupRole: MolGridComponent;
    GridSetupRoleEditSettings: EditSettingsModel = { allowAdding: true };
    GridSetupRoleToolbar: any;
    GridSetupRoleContextMenuItems: MenuItemModel[] = [
        {
            id: 'edit',
            text: 'Edit',
            iconCss: 'fas fa-plus-circle'
        }, {
            id: 'delete',
            text: 'Delete',
            iconCss: 'fas fa-trash-alt'
        }, {
            id: 'setting-role',
            text: 'Roles Setting',
            iconCss: 'fas fa-user-cog'
        }
    ];
    GridSetupRoleColums = GridHeader;
    GridSetupRoleDataSource: any[];

    SelectedDataRole: any;

    constructor(
        private router: Router,
        private setupRoleService: SetupRoleService) { }

    ngOnInit(): void {
        this.GridSetupRoleToolbar = ["Search"];

        this.onGetAllRole();
    }

    onGetAllRole(): void {
        this.setupRoleService.onGetAllRole()
            .subscribe((result) => {
                this.GridSetupRoleDataSource = result.data;
            });
    }

    onSelectGridContextMenu(args: any): void {
        if (args.item.id === "setting-role") {
            this.router.navigateByUrl('dashboard/setup-role-menu');
        }
    }

    onSelectedRow(args: any): void {
        this.SelectedDataRole = args.data;
        this.setupRoleService.onSetCurrentDataRole(this.SelectedDataRole);
        localStorage.setItem('DataRole', JSON.stringify(this.SelectedDataRole));
    }
}
