/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../shared';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
/**
 * @record
 */
function SidebarState() { }
if (false) {
    /** @type {?} */
    SidebarState.prototype.minimized;
    /** @type {?} */
    SidebarState.prototype.opened;
    /** @type {?} */
    SidebarState.prototype.breakpoint;
}
export class SidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} classToggler
     * @param {?} sidebarService
     */
    constructor(document, renderer, hostElement, classToggler, sidebarService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.classToggler = classToggler;
        this.sidebarService = sidebarService;
        this.state = {
            minimized: undefined,
            opened: undefined,
            breakpoint: undefined
        };
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.body = this.document.body;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
        this.isOpened(this.opened);
        this.setState();
        this.subscription = this.sidebarService.sidebarState$.subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if ('minimize' in state) {
                this.minimize(state.minimize);
            }
            if ('open' in state) {
                this.open(state);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.body, 'sidebar-fixed');
        this.subscription.unsubscribe();
    }
    /**
     * @param {?=} compact
     * @return {?}
     */
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.body, 'sidebar-compact');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} minimized
     * @return {?}
     */
    isMinimized(minimized = this.minimized) {
        this.sidebarService.toggle({ minimized: minimized });
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.body, 'sidebar-off-canvas');
        }
    }
    /**
     * @param {?=} opened
     * @return {?}
     */
    isOpened(opened = this.opened) {
        this.sidebarService.toggle({ open: opened, breakpoint: this.display });
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = Boolean(display) && checkBreakpoint(display, validBreakpoints) ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.body, cssClass);
        }
    }
    /**
     * @return {?}
     */
    setState() {
        this.state.minimized = this.body.classList.contains('sidebar-minimized');
        this.state.opened = this.body.classList.contains(`sidebar-${this.display}-show`);
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    minimize(force) {
        /** @type {?} */
        const minimize = (typeof force === 'undefined') ? !this.body.classList.contains('sidebar-minimized') : force;
        minimize ? this.renderer.addClass(this.body, 'sidebar-minimized') : this.renderer.removeClass(this.body, 'sidebar-minimized');
        this.state.minimized = minimize;
        return minimize;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    open(state) {
        /** @type {?} */
        const toggle = (typeof state.open === 'undefined');
        /** @type {?} */
        const cssClass = Boolean(state.breakpoint) && checkBreakpoint(state.breakpoint, validBreakpoints) ?
            `sidebar-${state.breakpoint}-show` :
            sidebarCssClasses[0];
        /** @type {?} */
        const opened = this.body.classList.contains(cssClass);
        /** @type {?} */
        const open = toggle ? !opened : state.open;
        if (open) {
            this.renderer.addClass(this.body, cssClass);
        }
        else {
            this.renderer.removeClass(this.body, cssClass);
        }
        this.state.opened = (/** @type {?} */ (open));
        return (/** @type {?} */ (open));
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ClassToggler },
    { type: SidebarService }
];
SidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    opened: [{ type: Input }],
    offCanvas: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.compact;
    /** @type {?} */
    SidebarComponent.prototype.display;
    /** @type {?} */
    SidebarComponent.prototype.fixed;
    /** @type {?} */
    SidebarComponent.prototype.minimized;
    /** @type {?} */
    SidebarComponent.prototype.opened;
    /** @type {?} */
    SidebarComponent.prototype.offCanvas;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.body;
    /** @type {?} */
    SidebarComponent.prototype.state;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.classToggler;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.sidebarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbkQsMkJBSUM7OztJQUhDLGlDQUFtQjs7SUFDbkIsOEJBQWdCOztJQUNoQixrQ0FBbUI7O0FBT3JCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBaUIzQixZQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLFlBQTBCLEVBQzFCLGNBQThCO1FBSlosYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVh4QyxVQUFLLEdBQWlCO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFTQSxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJ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bnB1dCwgSW5qZWN0LCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMsIHZhbGlkQnJlYWtwb2ludHMsIGNoZWNrQnJlYWtwb2ludCB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi9zaGFyZWQvdG9nZ2xlLWNsYXNzZXMnO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL3NpZGViYXIuc2VydmljZSc7XG5cbmludGVyZmFjZSBTaWRlYmFyU3RhdGUge1xuICBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgYnJlYWtwb2ludDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb3BlbmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBib2R5OiBIVE1MQm9keUVsZW1lbnQ7XG5cbiAgc3RhdGU6IFNpZGViYXJTdGF0ZSA9IHtcbiAgICBtaW5pbWl6ZWQ6IHVuZGVmaW5lZCxcbiAgICBvcGVuZWQ6IHVuZGVmaW5lZCxcbiAgICBicmVha3BvaW50OiB1bmRlZmluZWRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcixcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2lkZWJhcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xuICAgIHRoaXMuaXNDb21wYWN0KHRoaXMuY29tcGFjdCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuaXNNaW5pbWl6ZWQodGhpcy5taW5pbWl6ZWQpO1xuICAgIHRoaXMuaXNPZmZDYW52YXModGhpcy5vZmZDYW52YXMpO1xuICAgIHRoaXMuaXNPcGVuZWQodGhpcy5vcGVuZWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5zaWRlYmFyU2VydmljZS5zaWRlYmFyU3RhdGUkLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgIGlmICgnbWluaW1pemUnIGluIHN0YXRlKSB7XG4gICAgICAgIHRoaXMubWluaW1pemUoc3RhdGUubWluaW1pemUpO1xuICAgICAgfVxuICAgICAgaWYgKCdvcGVuJyBpbiBzdGF0ZSkge1xuICAgICAgICB0aGlzLm9wZW4oc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLWZpeGVkJyApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XG4gICAgaWYgKGNvbXBhY3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1jb21wYWN0JyApO1xuICAgIH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcbiAgICB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4gPSB0aGlzLm1pbmltaXplZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemVkOiBtaW5pbWl6ZWR9KTtcbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbiA9IHRoaXMub2ZmQ2FudmFzKTogdm9pZCB7XG4gICAgaWYgKG9mZkNhbnZhcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBpc09wZW5lZChvcGVuZWQ6IGJvb2xlYW4gPSB0aGlzLm9wZW5lZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBvcGVuZWQsIGJyZWFrcG9pbnQ6IHRoaXMuZGlzcGxheX0pO1xuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjc3NDbGFzcyA9IEJvb2xlYW4oZGlzcGxheSkgJiYgY2hlY2tCcmVha3BvaW50KGRpc3BsYXksIHZhbGlkQnJlYWtwb2ludHMpID8gYHNpZGViYXItJHtkaXNwbGF5fS1zaG93YCA6IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJvZHksIGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlLm1pbmltaXplZCA9IHRoaXMuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgdGhpcy5zdGF0ZS5vcGVuZWQgPSB0aGlzLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCBgc2lkZWJhci0ke3RoaXMuZGlzcGxheX0tc2hvd2AgKTtcbiAgfVxuXG4gIG1pbmltaXplKGZvcmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1pbmltaXplID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID8gIXRoaXMuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbWluaW1pemVkJykgOiBmb3JjZTtcbiAgICBtaW5pbWl6ZSA/IHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKSA6IHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKTtcbiAgICB0aGlzLnN0YXRlLm1pbmltaXplZCA9IG1pbmltaXplO1xuICAgIHJldHVybiBtaW5pbWl6ZTtcbiAgfVxuXG4gIG9wZW4oc3RhdGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRvZ2dsZSA9ICh0eXBlb2Ygc3RhdGUub3BlbiA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gQm9vbGVhbihzdGF0ZS5icmVha3BvaW50KSAmJiBjaGVja0JyZWFrcG9pbnQoc3RhdGUuYnJlYWtwb2ludCwgdmFsaWRCcmVha3BvaW50cykgP1xuICAgICAgICBgc2lkZWJhci0ke3N0YXRlLmJyZWFrcG9pbnR9LXNob3dgIDpcbiAgICAgICAgc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgY29uc3Qgb3BlbmVkID0gdGhpcy5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggY3NzQ2xhc3MgKTtcbiAgICBjb25zdCBvcGVuID0gdG9nZ2xlID8gIW9wZW5lZCA6IHN0YXRlLm9wZW47XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCBjc3NDbGFzcyApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYm9keSwgY3NzQ2xhc3MgKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vcGVuZWQgPSA8Ym9vbGVhbj5vcGVuO1xuICAgIHJldHVybiA8Ym9vbGVhbj5vcGVuO1xuICB9XG59XG4iXX0=