import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
export declare class BreadcrumbComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    service: BreadcrumbService;
    fixed: boolean;
    breadcrumbs: any;
    private readonly fixedClass;
    constructor(document: any, renderer: Renderer2, service: BreadcrumbService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isFixed(fixed?: boolean): void;
}
