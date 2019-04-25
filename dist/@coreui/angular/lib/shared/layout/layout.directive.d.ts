import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ClassToggler } from '../toggle-classes';
import { SidebarService } from '../../sidebar/sidebar.service';
/**
* Allows the sidebar to be toggled via click.
*/
export declare class SidebarToggleDirective {
    private sidebarService;
    breakpoint: string;
    constructor(sidebarService: SidebarService);
    toggleOpen($event: any): void;
}
export declare class SidebarMinimizeDirective {
    private sidebarService;
    constructor(sidebarService: SidebarService);
    toggleMinimize($event: any): void;
}
export declare class MobileSidebarToggleDirective {
    private sidebarService;
    constructor(sidebarService: SidebarService);
    toggleOpen($event: any): void;
}
/**
* Allows the off-canvas sidebar to be closed via click.
*/
export declare class SidebarOffCanvasCloseDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggle($event: any): void;
}
export declare class BrandMinimizeDirective {
    private document;
    private renderer;
    constructor(document: any, renderer: Renderer2);
    toggleOpen($event: any): void;
}
/**
* Allows the aside to be toggled via click.
*/
export declare class AsideToggleDirective implements OnInit {
    private classToggler;
    breakpoint: string;
    bp: any;
    constructor(classToggler: ClassToggler);
    ngOnInit(): void;
    toggleOpen($event: any): void;
}
export declare class HtmlAttributesDirective implements OnInit {
    private renderer;
    private el;
    cuiHtmlAttr: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private setStyle;
    private addClass;
    private setAttrib;
}
