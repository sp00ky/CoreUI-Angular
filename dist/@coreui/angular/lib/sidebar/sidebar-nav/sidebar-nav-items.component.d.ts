import { Router } from '@angular/router';
import { SidebarNavHelper } from '../sidebar-nav.service';
export declare class SidebarNavItemsComponent {
    router: Router;
    helper: SidebarNavHelper;
    items: Array<any>;
    constructor(router: Router, helper: SidebarNavHelper);
}
