import { OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
interface SidebarState {
    minimized: boolean;
    opened: boolean;
    breakpoint: string;
}
export declare class SidebarComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private hostElement;
    private classToggler;
    private sidebarService;
    compact: boolean;
    display: any;
    fixed: boolean;
    minimized: boolean;
    opened: boolean;
    offCanvas: boolean;
    private subscription;
    private body;
    state: SidebarState;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef, classToggler: ClassToggler, sidebarService: SidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCompact(compact?: boolean): void;
    isFixed(fixed?: boolean): void;
    isMinimized(minimized?: boolean): void;
    isOffCanvas(offCanvas?: boolean): void;
    isOpened(opened?: boolean): void;
    displayBreakpoint(display?: any): void;
    setState(): void;
    minimize(force?: boolean): boolean;
    open(state: any): boolean;
}
export {};
