import { AfterContentChecked, AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map, delay } from 'rxjs/operators';
import { OrgTabsItemComponentComponent } from '../org-tabs-item-component/org-tabs-item-component.component';

@Component({
    selector: 'org-tabs',
    templateUrl: './org-tabs-component.component.html',
    styleUrls: ['./org-tabs-component.component.css']
})
export class OrgTabsComponentComponent implements OnInit, AfterContentInit, AfterContentChecked {

    @ContentChildren(OrgTabsItemComponentComponent)
    tabs: QueryList<OrgTabsItemComponentComponent>;

    tabItems$: Observable<OrgTabsItemComponentComponent[]>;

    activeTab: OrgTabsItemComponentComponent;

    @Output("onGetSelectedTabId") onGetSelectedTabId = new EventEmitter();
    @Input("showHeader") showHeader : boolean = true; 
    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.tabItems$ = this.tabs.changes
            .pipe(startWith(''))
            .pipe(delay(0))
            .pipe(map(() => this.tabs.toArray()));
    }

    ngAfterContentChecked(): void {
        // choose the default tab
        // we need to wait for a next VM turn,
        // because Tab item content, will not be initialized yet
        if (!this.activeTab) {
            Promise.resolve().then(() => {
                this.activeTab = this.tabs.first;
            });
        }
    }

    selectTab(tabItem: OrgTabsItemComponentComponent, Id: string): void {
        if (this.activeTab === tabItem) {
            return;
        }

        if (this.activeTab) {
            this.activeTab.isActive = false;
        }

        this.activeTab = tabItem;

        tabItem.isActive = true;

        this.onGetSelectedTabId.emit(Id);
    }

    onNavigateTabUsingTabId(Index: number, Id: string): void {
        const tab = this.tabs.toArray();

        this.selectTab(tab[Index], Id);
    }
}
