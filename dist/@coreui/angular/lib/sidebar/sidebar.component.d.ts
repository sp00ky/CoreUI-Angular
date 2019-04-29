import { OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
import { OutClickService } from './out-click.service';
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
    private outClickService;
    compact: boolean;
    display: any;
    fixed: boolean;
    minimized: boolean;
    opened: boolean;
    offCanvas: boolean;
    private stateToggleSubscription;
    private outClickSubscription;
    private body;
    state: SidebarState;
    constructor(document: any, renderer: Renderer2, hostElement: ElementRef, classToggler: ClassToggler, sidebarService: SidebarService, outClickService: OutClickService);
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
    private stateToggleSubscribe;
    private outClickSubscribe;
    hideMobile(e: any): void;
}
export {};
