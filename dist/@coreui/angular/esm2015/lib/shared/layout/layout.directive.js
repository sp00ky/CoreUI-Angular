/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
import { SidebarService } from '../../sidebar/sidebar.service';
import { OutClickService } from '../../sidebar/out-click.service';
/**
 * Allows the sidebar to be toggled via click.
 */
export class SidebarToggleDirective {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const bp = this.breakpoint;
        this.sidebarService.toggle({ open: undefined, breakpoint: bp });
    }
}
SidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiSidebarToggle]',
                providers: [ClassToggler]
            },] }
];
/** @nocollapse */
SidebarToggleDirective.ctorParameters = () => [
    { type: SidebarService }
];
SidebarToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['cuiSidebarToggle',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SidebarToggleDirective.prototype.breakpoint;
    /**
     * @type {?}
     * @private
     */
    SidebarToggleDirective.prototype.sidebarService;
}
export class SidebarMinimizeDirective {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleMinimize($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: undefined });
    }
}
SidebarMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiSidebarMinimize]'
            },] }
];
/** @nocollapse */
SidebarMinimizeDirective.ctorParameters = () => [
    { type: SidebarService }
];
SidebarMinimizeDirective.propDecorators = {
    toggleMinimize: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarMinimizeDirective.prototype.sidebarService;
}
export class MobileSidebarToggleDirective {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ open: undefined, breakpoint: '' });
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiMobileSidebarToggle]'
            },] }
];
/** @nocollapse */
MobileSidebarToggleDirective.ctorParameters = () => [
    { type: SidebarService }
];
MobileSidebarToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MobileSidebarToggleDirective.prototype.sidebarService;
}
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
export class SidebarOffCanvasCloseDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggle($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    }
}
SidebarOffCanvasCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiSidebarClose]'
            },] }
];
/** @nocollapse */
SidebarOffCanvasCloseDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
SidebarOffCanvasCloseDirective.propDecorators = {
    toggle: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarOffCanvasCloseDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SidebarOffCanvasCloseDirective.prototype.renderer;
}
export class BrandMinimizeDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
}
BrandMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiBrandMinimize]'
            },] }
];
/** @nocollapse */
BrandMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
BrandMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrandMinimizeDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    BrandMinimizeDirective.prototype.renderer;
}
/**
 * Allows the aside to be toggled via click.
 */
export class AsideToggleDirective {
    /**
     * @param {?} elementRef
     * @param {?} classToggler
     */
    constructor(elementRef, classToggler) {
        this.elementRef = elementRef;
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const cssClass = this.bp ? `c-sidebar-${this.bp}-show` : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses, this.elementRef.nativeElement);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiAsideMenuToggle]',
                providers: [ClassToggler]
            },] }
];
/** @nocollapse */
AsideToggleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ClassToggler }
];
AsideToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['cuiAsideMenuToggle',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
    /**
     * @type {?}
     * @private
     */
    AsideToggleDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    AsideToggleDirective.prototype.classToggler;
}
export class HtmlAttributesDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const attribs = this.cuiHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    setStyle(styles) {
        for (const style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    }
    /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    addClass(classes) {
        /** @type {?} */
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        (element) => element.length > 0)).forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.renderer.addClass(this.el.nativeElement, element);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setAttrib(key, value) {
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    }
}
HtmlAttributesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiHtmlAttr]'
            },] }
];
/** @nocollapse */
HtmlAttributesDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
HtmlAttributesDirective.propDecorators = {
    cuiHtmlAttr: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HtmlAttributesDirective.prototype.cuiHtmlAttr;
    /**
     * @type {?}
     * @private
     */
    HtmlAttributesDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    HtmlAttributesDirective.prototype.el;
}
/**
 * Detects click outside the element
 */
export class OutClickDirective {
    /**
     * @param {?} elementRef
     * @param {?} outClickService
     */
    constructor(elementRef, outClickService) {
        this.elementRef = elementRef;
        this.outClickService = outClickService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDocumentClick($event) {
        /** @type {?} */
        const targetElement = (/** @type {?} */ ($event.target));
        // Check if the click was outside the element
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.outClickService.onClick({ event: $event });
        }
    }
}
OutClickDirective.decorators = [
    { type: Directive, args: [{ selector: '[cuiOutClick]' },] }
];
/** @nocollapse */
OutClickDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: OutClickService }
];
OutClickDirective.propDecorators = {
    onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.outClickService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFnQixZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBa0IsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFTbEUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVqQyxZQUNVLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDOzs7OztJQUVKLFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FDbEIsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCOzs7O1lBVFEsY0FBYzs7O3lCQVdwQixLQUFLLFNBQUMsa0JBQWtCO3lCQUl4QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7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QUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUp4Qyx1Q0FBOEI7Ozs7O0lBQzlCLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NpZGViYXIvc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dENsaWNrU2VydmljZSB9IGZyb20gJy4uLy4uL3NpZGViYXIvb3V0LWNsaWNrLnNlcnZpY2UnO1xuXG4vKipcbiogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlTaWRlYmFyVG9nZ2xlXScsXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnY3VpU2lkZWJhclRvZ2dsZScpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7fVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBicCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG9wZW46IHVuZGVmaW5lZCwgYnJlYWtwb2ludDogYnAgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aVNpZGViYXJNaW5pbWl6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU1pbmltaXplKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdW5kZWZpbmVkIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlNb2JpbGVTaWRlYmFyVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe29wZW46IHVuZGVmaW5lZCwgYnJlYWtwb2ludDogJyd9KTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpU2lkZWJhckNsb3NlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZSgkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykgP1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKSA6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpQnJhbmRNaW5pbWl6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5kLW1pbmltaXplZCcpID9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xuICB9XG59XG5cblxuLyoqXG4qIEFsbG93cyB0aGUgYXNpZGUgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aUFzaWRlTWVudVRvZ2dsZV0nLFxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjdWlBc2lkZU1lbnVUb2dnbGUnKSBicmVha3BvaW50OiBzdHJpbmc7XG4gIHB1YmxpYyBicDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXJcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5icCA/IGBjLXNpZGViYXItJHt0aGlzLmJwfS1zaG93YCA6IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XG4gICAgICB0aGlzLmNsYXNzVG9nZ2xlci50b2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aUh0bWxBdHRyXSdcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjdWlIdG1sQXR0cjoge1trZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5jdWlIdG1sQXR0cjtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgY2xhc3NBcnJheSA9IChBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKSk7XG4gICAgY2xhc3NBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlY3RzIGNsaWNrIG91dHNpZGUgdGhlIGVsZW1lbnRcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2N1aU91dENsaWNrXScgfSlcbmV4cG9ydCBjbGFzcyBPdXRDbGlja0RpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3V0Q2xpY2tTZXJ2aWNlOiBPdXRDbGlja1NlcnZpY2VcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRG9jdW1lbnRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjbGljayB3YXMgb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgIGlmICh0YXJnZXRFbGVtZW50ICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuICAgICAgdGhpcy5vdXRDbGlja1NlcnZpY2Uub25DbGljayh7ZXZlbnQ6ICRldmVudH0pO1xuICAgIH1cbiAgfVxufVxuIl19