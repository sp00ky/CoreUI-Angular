import { Injectable, Inject, RendererFactory2, defineInjectable, Directive, Input, HostListener, Renderer2, ElementRef, NgModule, Component, HostBinding, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
/** @type {?} */
const asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];
/** @type {?} */
const validBreakpoints = ['sm', 'md', 'lg', 'xl'];
/**
 * @param {?} breakpoint
 * @param {?} list
 * @return {?}
 */
function checkBreakpoint(breakpoint, list) {
    return list.indexOf(breakpoint) > -1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassToggler {
    /**
     * @param {?} document
     * @param {?} rendererFactory
     */
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} NewClassNames
     * @return {?}
     */
    removeClasses(NewClassNames) {
        /** @type {?} */
        const MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        (Class) => this.document.body.classList.contains(Class)));
        return MatchClasses.indexOf(true) !== -1;
    }
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    toggleClasses(Toggle, ClassNames) {
        /** @type {?} */
        const Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            (Class) => this.renderer.removeClass(this.document.body, Class)));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    }
}
ClassToggler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarService {
    constructor() {
        this.sidebarState = new BehaviorSubject({});
        this.sidebarState$ = this.sidebarState.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state) {
        this.sidebarState.next(state);
    }
}
SidebarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SidebarService.ctorParameters = () => [];
/** @nocollapse */ SidebarService.ngInjectableDef = defineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(); }, token: SidebarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutClickService {
    constructor() {
        this.outClick = new BehaviorSubject({ event: undefined });
        this.outClick$ = this.outClick.asObservable();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    onClick(message) {
        this.outClick.next(message);
    }
}
OutClickService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OutClickService.ctorParameters = () => [];
/** @nocollapse */ OutClickService.ngInjectableDef = defineInjectable({ factory: function OutClickService_Factory() { return new OutClickService(); }, token: OutClickService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Allows the sidebar to be toggled via click.
 */
class SidebarToggleDirective {
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
class SidebarMinimizeDirective {
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
class MobileSidebarToggleDirective {
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
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
class SidebarOffCanvasCloseDirective {
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
class BrandMinimizeDirective {
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
/**
 * Allows the aside to be toggled via click.
 */
class AsideToggleDirective {
    /**
     * @param {?} classToggler
     */
    constructor(classToggler) {
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
        const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
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
    { type: ClassToggler }
];
AsideToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['cuiAsideMenuToggle',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class HtmlAttributesDirective {
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
/**
 * Detects click outside the element
 */
class OutClickDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    AsideToggleDirective,
                    BrandMinimizeDirective,
                    MobileSidebarToggleDirective,
                    SidebarToggleDirective,
                    SidebarMinimizeDirective,
                    SidebarOffCanvasCloseDirective,
                    HtmlAttributesDirective,
                    OutClickDirective
                ],
                declarations: [
                    AsideToggleDirective,
                    BrandMinimizeDirective,
                    MobileSidebarToggleDirective,
                    SidebarToggleDirective,
                    SidebarMinimizeDirective,
                    SidebarOffCanvasCloseDirective,
                    HtmlAttributesDirective,
                    OutClickDirective
                ],
                providers: [
                    ClassToggler
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsideComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'aside-menu-fixed';
        renderer.addClass(hostElement.nativeElement, 'aside-menu');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
}
AsideComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-aside',
                template: "<aside class=\"aside-menu\">\n  <ng-content></ng-content>\n</aside>\n"
            }] }
];
/** @nocollapse */
AsideComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
AsideComponent.propDecorators = {
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsideModule {
}
AsideModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LayoutModule
                ],
                exports: [
                    AsideComponent,
                    LayoutModule
                ],
                declarations: [
                    AsideComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbService {
    /**
     * @param {?} router
     * @param {?} route
     */
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const breadcrumbs = [];
            /** @type {?} */
            let currentRoute = this.route.root;
            /** @type {?} */
            let url = '';
            do {
                /** @type {?} */
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach((/**
                 * @param {?} route
                 * @return {?}
                 */
                route => {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map((/**
                         * @param {?} segment
                         * @return {?}
                         */
                        segment => segment.path)).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                }));
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        }));
    }
}
BreadcrumbService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BreadcrumbService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} service
     */
    constructor(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-breadcrumb',
                template: "<ol class=\"breadcrumb\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label.title }}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label.title }}</span>\n    </li>\n  </ng-template>\n  <ng-content></ng-content>\n</ol>\n"
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: BreadcrumbService }
];
BreadcrumbComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class BreadcrumbModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                BreadcrumbService
            ]
        };
    }
}
BreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [BreadcrumbComponent],
                declarations: [BreadcrumbComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'footer-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-footer');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-footer',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
FooterComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterModule {
}
FooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [FooterComponent],
                declarations: [FooterComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'header-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-header',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
HeaderComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LayoutModule
                ],
                exports: [
                    HeaderComponent,
                    LayoutModule
                ],
                declarations: [
                    HeaderComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavbarBrandComponent {
    constructor() {
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandRouterLink = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
    }
}
NavbarBrandComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-navbar-brand',
                template: "<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [cuiHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'navbar-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [cuiHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'navbar-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [cuiHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'navbar-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n"
            }] }
];
/** @nocollapse */
NavbarBrandComponent.ctorParameters = () => [];
NavbarBrandComponent.propDecorators = {
    navbarBrand: [{ type: Input }],
    navbarBrandFull: [{ type: Input }],
    navbarBrandMinimized: [{ type: Input }],
    navbarBrandText: [{ type: Input }],
    navbarBrandRouterLink: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavbarModule {
}
NavbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LayoutModule
                ],
                exports: [
                    NavbarBrandComponent,
                    LayoutModule
                ],
                declarations: [
                    NavbarBrandComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} classToggler
     * @param {?} sidebarService
     * @param {?} outClickService
     */
    constructor(document, renderer, hostElement, classToggler, sidebarService, outClickService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.classToggler = classToggler;
        this.sidebarService = sidebarService;
        this.outClickService = outClickService;
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
        this.stateToggleSubscribe();
        this.outClickSubscribe();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.body, 'sidebar-fixed');
        this.stateToggleSubscribe(false);
        this.outClickSubscribe(false);
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
            this.sidebarService.toggle({ open: true, breakpoint: display });
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
        const mobile = cssClass === sidebarCssClasses[0];
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
        if (mobile) {
            if (open && (!this.outClickSubscription || this.outClickSubscription.closed)) {
                this.outClickSubscribe();
            }
            if (!open && this.outClickSubscription && !this.outClickSubscription.closed) {
                this.outClickSubscribe(false);
            }
        }
        this.state.opened = (/** @type {?} */ (open));
        return (/** @type {?} */ (open));
    }
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((/**
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
        else {
            this.stateToggleSubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    outClickSubscribe(subscribe = true) {
        if (subscribe) {
            this.outClickSubscription = this.outClickService.outClick$.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            message => {
                if (message.event) {
                    this.hideMobile(message.event);
                }
            }));
        }
        else {
            this.outClickSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hideMobile(e) {
        if (this.state.opened) {
            if (!e.target.closest('[cuisidebartoggle]')) {
                this.sidebarService.toggle({ open: false, breakpoint: '' });
            }
        }
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
    { type: SidebarService },
    { type: OutClickService }
];
SidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    opened: [{ type: Input }],
    offCanvas: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarFooterComponent {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SidebarFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-footer',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarFooterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarFormComponent {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-form');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SidebarFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-form',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarFormComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarHeaderComponent {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-header');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-header',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarHeaderComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarMinimizerComponent {
    constructor() {
        this.role = 'button';
        this.classes = 'sidebar-minimizer';
    }
}
SidebarMinimizerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-minimizer',
                template: ``
            }] }
];
SidebarMinimizerComponent.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    classes: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavDropdownDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
}
NavDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiNavDropdown]'
            },] }
];
/** @nocollapse */
NavDropdownDirective.ctorParameters = () => [
    { type: ElementRef }
];
/**
 * Allows the dropdown to be toggled via click.
 */
class NavDropdownToggleDirective {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
}
NavDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cuiNavDropdownToggle]'
            },] }
];
/** @nocollapse */
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective }
];
NavDropdownToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavComponent {
    /**
     * @param {?} router
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'nav';
        renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    }
}
SidebarNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav',
                template: "<cui-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</cui-sidebar-nav-items>\n"
            }] }
];
/** @nocollapse */
SidebarNavComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
SidebarNavComponent.propDecorators = {
    navItems: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavDividerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SidebarNavDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-divider',
                template: ``
            }] }
];
/** @nocollapse */
SidebarNavDividerComponent.ctorParameters = () => [];
SidebarNavDividerComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavHelper {
    constructor() {
        this.hasBadge = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => Boolean(item.badge));
        this.hasIcon = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => Boolean(item.icon));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children) {
            return 'dropdown';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getClass(item) {
        /** @type {?} */
        const itemType = this.itemType(item);
        /** @type {?} */
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
    /**
     * @param {?} router
     * @param {?} item
     * @return {?}
     */
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getIconClass(item) {
        /** @type {?} */
        const classes = {
            'nav-icon': true
        };
        /** @type {?} */
        const icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getBadgeClass(item) {
        /** @type {?} */
        const classes = {
            'badge': true
        };
        /** @type {?} */
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        return classes;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavDropdownComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
}
SidebarNavDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-dropdown',
                template: `
    <a class="nav-link nav-dropdown-toggle"
       cuiNavDropdownToggle
       [cuiHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{ item.name }}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
    </a>
    <cui-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </cui-sidebar-nav-items>
  `,
                providers: [SidebarNavHelper],
                styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                    '.nav-dropdown-items { display: block; }']
            }] }
];
/** @nocollapse */
SidebarNavDropdownComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
SidebarNavDropdownComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavItemsComponent {
    /**
     * @param {?} router
     * @param {?} helper
     */
    constructor(router, helper) {
        this.router = router;
        this.helper = helper;
    }
}
SidebarNavItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-items',
                template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <cui-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="helper.getClass(item)"
          cuiNavDropdown
          routerLinkActive="open">
        </cui-sidebar-nav-dropdown>
        <cui-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [cuiHtmlAttr]="item.attributes">
        </cui-sidebar-nav-divider>
        <cui-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [cuiHtmlAttr]="item.attributes">
        </cui-sidebar-nav-title>
        <cui-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </cui-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <cui-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </cui-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
SidebarNavItemsComponent.ctorParameters = () => [
    { type: Router },
    { type: SidebarNavHelper }
];
SidebarNavItemsComponent.propDecorators = {
    items: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavLinkComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} helper
     * @param {?} sidebarService
     */
    constructor(document, renderer, helper, sidebarService) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
        this.sidebarService = sidebarService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : this.item.url;
    }
    /**
     * @return {?}
     */
    getLinkClass() {
        /** @type {?} */
        const disabled = this.isDisabled();
        /** @type {?} */
        const classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            /** @type {?} */
            const variant = `nav-link-${this.item.variant}`;
            classes[variant] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    getLinkType() {
        return this.isExternalLink() ? 'external' : 'link';
    }
    /**
     * @return {?}
     */
    hasVariant() {
        return !!this.item.variant;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    }
    /**
     * @return {?}
     */
    isExternalLink() {
        return this.item.url.substring(0, 4) === 'http';
    }
    /**
     * @return {?}
     */
    hideMobile() {
        this.sidebarService.toggle({ open: false, breakpoint: '' });
    }
}
SidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [cuiHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [cuiHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
                providers: [SidebarNavHelper]
            }] }
];
/** @nocollapse */
SidebarNavLinkComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: SidebarNavHelper },
    { type: SidebarService }
];
SidebarNavLinkComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavTitleComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        /** @type {?} */
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            /** @type {?} */
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            /** @type {?} */
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    setStyle(styles, el) {
        for (const style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    }
    /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    addClass(classes, el) {
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
            this.renderer.addClass(el, element);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
}
SidebarNavTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-title',
                template: ''
            }] }
];
/** @nocollapse */
SidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SidebarNavTitleComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavLabelComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getItemClass() {
        /** @type {?} */
        const labelClass = {
            'nav-label': true,
            'active': true
        };
        /** @type {?} */
        const itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    }
    /**
     * @return {?}
     */
    getLabelIconClass() {
        /** @type {?} */
        const classes = this.helper.getIconClass(this.item);
        /** @type {?} */
        const variant = `text-${this.item.label.variant}`;
        classes[variant] = !!variant;
        /** @type {?} */
        const labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    }
}
SidebarNavLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cuiHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
            }] }
];
/** @nocollapse */
SidebarNavLabelComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
SidebarNavLabelComponent.propDecorators = {
    item: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarModule {
}
SidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LayoutModule,
                ],
                exports: [
                    SidebarFooterComponent,
                    SidebarFormComponent,
                    SidebarHeaderComponent,
                    SidebarMinimizerComponent,
                    SidebarComponent,
                    SidebarNavItemsComponent,
                    SidebarNavComponent,
                    SidebarNavDividerComponent,
                    SidebarNavDropdownComponent,
                    SidebarNavLinkComponent,
                    SidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    LayoutModule
                ],
                declarations: [
                    SidebarFooterComponent,
                    SidebarFormComponent,
                    SidebarHeaderComponent,
                    SidebarMinimizerComponent,
                    SidebarComponent,
                    SidebarNavItemsComponent,
                    SidebarNavComponent,
                    SidebarNavDividerComponent,
                    SidebarNavDropdownComponent,
                    SidebarNavLinkComponent,
                    SidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    SidebarNavLabelComponent
                ],
                providers: [
                    OutClickService,
                    SidebarService,
                    SidebarNavHelper
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TogglerComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasContent = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hasContent = (/** @type {?} */ (this.content.nativeElement.childNodes.length));
        this.changeDetector.detectChanges();
    }
}
TogglerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-toggler',
                template: "<div #content *ngIf = \"hasContent\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf] = \"!hasContent\">\n  <button class=\"navbar-toggler\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
TogglerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TogglerComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TogglerModule {
}
TogglerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TogglerComponent],
                exports: [
                    TogglerComponent
                ],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AsideComponent, AsideModule, BreadcrumbComponent, BreadcrumbModule, FooterComponent, FooterModule, HeaderComponent, HeaderModule, NavbarBrandComponent, NavbarModule, SidebarComponent, SidebarModule, TogglerComponent, TogglerModule };
//# sourceMappingURL=coreui-angular.js.map
