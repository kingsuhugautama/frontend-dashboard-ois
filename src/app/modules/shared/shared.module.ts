import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { CommandColumnService, DetailRowService, EditService, GridModule, GroupService, PageService, PdfExportService, ResizeService, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AtmLabelComponent } from './components/atoms/form/atm-label/atm-label.component';
import { AtmValidatorsComponent } from './components/atoms/form/atm-validators/atm-validators.component';
import { AtmButtonDangerComponent } from './components/atoms/buttons/atm-button-danger/atm-button-danger.component';
import { AtmButtonPrimaryComponent } from './components/atoms/buttons/atm-button-primary/atm-button-primary.component';
import { AtmHeaderRibbonComponent } from './components/atoms/typografi/atm-header-ribbon/atm-header-ribbon.component';
import { AtmNotificationComponent } from './components/atoms/typografi/atm-notification/atm-notification.component';
import { AtmInputComponent } from './components/atoms/form/atm-input/atm-input.component';
import { AtmInputGroupComponentAtom } from './components/atoms/form/atm-input-group-atom/atm-input-group.component';
import { AtmTextareaComponent } from './components/atoms/form/atm-textarea/atm-textarea.component';
import { AtmDatepickerComponent } from './components/atoms/form/atm-datepicker/atm-datepicker.component';
import { AtmSelectComponent } from './components/atoms/form/atm-select/atm-select.component';
import { AtmButtonNewComponent } from './components/atoms/buttons/atm-button-new/atm-button-new.component';
import { AtmButtonEditComponent } from './components/atoms/buttons/atm-button-edit/atm-button-edit.component';
import { AtmButtonDeleteComponent } from './components/atoms/buttons/atm-button-delete/atm-button-delete.component';
import { AtmButtonSaveCloseComponent } from './components/atoms/buttons/atm-button-save-close/atm-button-save-close.component';
import { AtmCheckboxComponent } from './components/atoms/form/atm-checkbox/atm-checkbox.component';
import { AtmCardComponent } from './components/atoms/card/atm-card/atm-card.component';
import { AtmCardHeaderComponent } from './components/atoms/card/atm-card-header/atm-card-header.component';
import { AtmCardButtonComponent } from './components/atoms/card/atm-card-button/atm-card-button.component';
import { AtmRadioButtonComponent } from './components/atoms/form/atm-radio-button/atm-radio-button.component';

import { MolLockUpFiltersComponent } from './components/molecules/filter/mol-lock-up-filters/mol-lock-up-filters.component';
import { MolInputGroupKodeComponent } from './components/molecules/form/mol-input-group-kode/mol-input-group-kode.component';
import { MolInputGroupComponent } from './components/molecules/form/mol-input-group/mol-input-group.component';
import { MolInputTextComponent } from './components/molecules/form/mol-input-text/mol-input-text.component';
import { MolInputTextareaComponent } from './components/molecules/form/mol-input-textarea/mol-input-textarea.component';
import { MolGridComponent } from './components/molecules/grid/grid/grid.component';
import { MolInputDatepickerComponent } from './components/molecules/form/mol-input-datepicker/mol-input-datepicker.component';
import { MolInputSelectComponent } from './components/molecules/form/mol-input-select/mol-input-select.component';
import { MolButtonMasterComponent } from './components/molecules/button/mol-button-master/mol-button-master.component';
import { MolButtonNavComponent } from './components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolDatepickerSyncfusionComponent } from './components/molecules/form/mol-datepicker-syncfusion/mol-datepicker-syncfusion.component';
import { MolKanbanV1Component } from './components/molecules/kanban-v1/mol-kanban-v1/mol-kanban-v1.component';
import { MolInputCheckboxComponent } from './components/molecules/form/mol-input-checkbox/mol-input-checkbox.component';
import { MolRadioButtonComponent } from './components/molecules/form/mol-radio-button/mol-radio-button.component';
import { MolInputTextSplitComponent } from './components/molecules/form/mol-input-text-split/mol-input-text-split.component';
import { MolDropdownSyncfusionComponent } from './components/molecules/form/mol-dropdown-syncfusion/mol-dropdown-syncfusion.component';
import { MolTreeGridComponent } from './components/molecules/grid/tree-grid/tree-grid.component';
import { MolOffcanvasFilterComponent } from './components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component';
import { MolInputCheckboxSingleComponent } from './components/molecules/form/mol-input-checkbox-single/mol-input-checkbox-single.component';
import { MolInputNumericComponent } from './components/molecules/form/mol-input-numeric/mol-input-numeric.component';
import { MolOffcanvasSingleFilterComponent } from './components/molecules/filter/mol-offcanvas-single-filter/mol-offcanvas-single-filter.component';
import { MolVerticalTimelineComponent } from './components/molecules/timeline/mol-vertical-timeline/mol-vertical-timeline.component';

import { OrgInputLookUpKodeComponent } from './components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from './components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgTabsComponentComponent } from './components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { OrgTabsItemComponentComponent } from './components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component';
import { OrgTabsLabelComponentComponent } from './components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component';
import { OrgTabsBodyComponentComponent } from './components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component';
import { OrgCardLayoutComponent } from './components/organism/card/card-layout/card-layout.component';
import { OrgLookUpComponent } from './components/organism/loockUp/org-look-up/org-look-up.component';
import { OrgLookUpChecklistComponent } from './components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { OrgInputLookUpStaticFilterComponent } from './components/organism/loockUp/org-input-look-up-static-filter/org-input-look-up-static-filter.component';
import { OrgLookUpHirarkiComponent } from './components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';

@NgModule({
    declarations: [
        AtmLabelComponent,
        AtmValidatorsComponent,
        AtmButtonDangerComponent,
        AtmButtonPrimaryComponent,
        AtmHeaderRibbonComponent,
        AtmNotificationComponent,
        AtmInputComponent,
        AtmInputGroupComponentAtom,
        AtmTextareaComponent,
        AtmSelectComponent,
        AtmDatepickerComponent,
        AtmButtonNewComponent,
        AtmButtonEditComponent,
        AtmButtonDeleteComponent,
        AtmButtonSaveCloseComponent,
        AtmCheckboxComponent,
        AtmButtonSaveCloseComponent,
        AtmCardComponent,
        AtmCardHeaderComponent,
        AtmCardButtonComponent,
        AtmRadioButtonComponent,
        MolInputTextareaComponent,
        MolGridComponent,
        MolInputTextComponent,
        MolInputGroupKodeComponent,
        MolInputGroupComponent,
        MolLockUpFiltersComponent,
        MolInputDatepickerComponent,
        MolInputSelectComponent,
        MolButtonMasterComponent,
        MolButtonNavComponent,
        MolDatepickerSyncfusionComponent,
        MolKanbanV1Component,
        MolInputCheckboxComponent,
        MolRadioButtonComponent,
        MolInputTextSplitComponent,
        MolDropdownSyncfusionComponent,
        MolTreeGridComponent,
        MolOffcanvasFilterComponent,
        MolInputCheckboxSingleComponent,
        MolVerticalTimelineComponent,
        OrgInputLookUpKodeComponent,
        OrgInputLookUpComponent,
        OrgTabsComponentComponent,
        OrgTabsItemComponentComponent,
        OrgTabsLabelComponentComponent,
        OrgTabsBodyComponentComponent,
        OrgCardLayoutComponent,
        OrgLookUpComponent,
        OrgLookUpChecklistComponent,
        OrgInputLookUpStaticFilterComponent,
        MolInputNumericComponent,
        OrgLookUpHirarkiComponent,
        MolOffcanvasSingleFilterComponent,
        MolVerticalTimelineComponent,
    ],
    imports: [
        CommonModule,
        GridModule,
        TreeViewModule,
        DatePickerModule,
        DateRangePickerModule,
        DropDownListModule,
        NumericTextBoxModule,
        ComboBoxModule,
        TreeViewModule,
        FormsModule,
        DateTimePickerModule,
        DateRangePickerModule,
        ModalModule.forRoot(),
    ],
    exports: [
        AtmLabelComponent,
        AtmValidatorsComponent,
        AtmButtonDangerComponent,
        AtmButtonPrimaryComponent,
        AtmHeaderRibbonComponent,
        AtmNotificationComponent,
        AtmInputComponent,
        AtmInputGroupComponentAtom,
        AtmTextareaComponent,
        AtmSelectComponent,
        AtmDatepickerComponent,
        AtmButtonNewComponent,
        AtmButtonEditComponent,
        AtmButtonDeleteComponent,
        AtmButtonSaveCloseComponent,
        AtmCheckboxComponent,
        AtmCardComponent,
        AtmCardHeaderComponent,
        AtmCardButtonComponent,
        AtmRadioButtonComponent,
        MolInputTextareaComponent,
        MolGridComponent,
        MolInputTextComponent,
        MolInputGroupKodeComponent,
        MolInputGroupComponent,
        MolLockUpFiltersComponent,
        MolInputDatepickerComponent,
        MolInputSelectComponent,
        MolButtonMasterComponent,
        MolButtonNavComponent,
        MolDatepickerSyncfusionComponent,
        MolKanbanV1Component,
        MolInputCheckboxComponent,
        MolRadioButtonComponent,
        MolInputTextSplitComponent,
        MolDropdownSyncfusionComponent,
        MolTreeGridComponent,
        MolOffcanvasFilterComponent,
        MolInputCheckboxSingleComponent,
        MolInputNumericComponent,
        MolVerticalTimelineComponent,
        OrgInputLookUpKodeComponent,
        OrgInputLookUpComponent,
        OrgTabsComponentComponent,
        OrgTabsItemComponentComponent,
        OrgTabsLabelComponentComponent,
        OrgTabsBodyComponentComponent,
        OrgCardLayoutComponent,
        OrgLookUpChecklistComponent,
        OrgLookUpComponent,
        OrgInputLookUpStaticFilterComponent,
        OrgLookUpHirarkiComponent,
        DropDownListModule,
        NumericTextBoxModule,
        DatePickerModule,
        DateRangePickerModule,
        ComboBoxModule,
        GridModule,
        TreeViewModule,
        DateTimePickerModule,
        MolOffcanvasSingleFilterComponent,
        DateRangePickerModule,
    ],
    providers: [
        EditService,
        ToolbarService,
        PdfExportService,
        ResizeService,
        SearchService,
        PageService,
        CommandColumnService,
        DetailRowService,
        GroupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
