import { OnInit, Renderer2 } from '@angular/core';
import { SidebarNavHelper } from '../sidebar-nav.service';
import { SidebarService } from '../sidebar.service';
export declare class SidebarNavLinkComponent implements OnInit {
    private document;
    private renderer;
    helper: SidebarNavHelper;
    private sidebarService;
    item: any;
    linkType: string;
    href: string;
    constructor(document: any, renderer: Renderer2, helper: SidebarNavHelper, sidebarService: SidebarService);
    ngOnInit(): void;
    getLinkClass(): {
        'nav-link': boolean;
        'disabled': boolean;
        'btn-link': boolean;
    };
    getLinkType(): "link" | "external";
    hasVariant(): boolean;
    isDisabled(): boolean;
    isExternalLink(): boolean;
    hideMobile(): void;
}
