(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/router'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', 'rxjs', '@angular/router', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.coreui = global.coreui || {}, global.coreui.angular = {}), global.ng.core, global.ng.common, global.rxjs, global.ng.router, global.rxjs.operators));
}(this, function (exports, core, common, rxjs, router, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sidebarCssClasses = [
        'c-sidebar-show',
        'c-sidebar-sm-show',
        'c-sidebar-md-show',
        'c-sidebar-lg-show',
        'c-sidebar-xl-show'
    ];
    /** @type {?} */
    var asideMenuCssClasses = [
        'aside-menu-show',
        'aside-menu-sm-show',
        'aside-menu-md-show',
        'aside-menu-lg-show',
        'aside-menu-xl-show'
    ];
    /** @type {?} */
    var validBreakpoints = ['sm', 'md', 'lg', 'xl'];
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
    var ClassToggler = /** @class */ (function () {
        function ClassToggler(document, rendererFactory) {
            this.document = document;
            this.rendererFactory = rendererFactory;
            this.renderer = rendererFactory.createRenderer(null, null);
        }
        /**
         * @param {?} NewClassNames
         * @param {?} element
         * @return {?}
         */
        ClassToggler.prototype.removeClasses = /**
         * @param {?} NewClassNames
         * @param {?} element
         * @return {?}
         */
        function (NewClassNames, element) {
            /** @type {?} */
            var MatchClasses = NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return element.classList.contains(Class); }));
            return MatchClasses.indexOf(true) !== -1;
        };
        /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @param {?} element
         * @return {?}
         */
        ClassToggler.prototype.toggleClasses = /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @param {?} element
         * @return {?}
         */
        function (Toggle, ClassNames, element) {
            var _this = this;
            /** @type {?} */
            var Level = ClassNames.indexOf(Toggle);
            /** @type {?} */
            var NewClassNames = ClassNames.slice(0, Level + 1);
            if (this.removeClasses(NewClassNames, element)) {
                NewClassNames.map((/**
                 * @param {?} Class
                 * @return {?}
                 */
                function (Class) { return _this.renderer.removeClass(element, Class); }));
            }
            else {
                this.renderer.addClass(element, Toggle);
            }
        };
        ClassToggler.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ClassToggler.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.RendererFactory2 }
        ]; };
        return ClassToggler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarService = /** @class */ (function () {
        function SidebarService() {
            this.sidebarState = new rxjs.BehaviorSubject({});
            this.sidebarState$ = this.sidebarState.asObservable();
        }
        /**
         * @param {?} state
         * @return {?}
         */
        SidebarService.prototype.toggle = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.sidebarState.next(state);
        };
        SidebarService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SidebarService.ctorParameters = function () { return []; };
        /** @nocollapse */ SidebarService.ngInjectableDef = core.defineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(); }, token: SidebarService, providedIn: "root" });
        return SidebarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OutClickService = /** @class */ (function () {
        function OutClickService() {
            this.outClick = new rxjs.BehaviorSubject({ event: undefined });
            this.outClick$ = this.outClick.asObservable();
        }
        /**
         * @param {?} message
         * @return {?}
         */
        OutClickService.prototype.onClick = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            this.outClick.next(message);
        };
        OutClickService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OutClickService.ctorParameters = function () { return []; };
        /** @nocollapse */ OutClickService.ngInjectableDef = core.defineInjectable({ factory: function OutClickService_Factory() { return new OutClickService(); }, token: OutClickService, providedIn: "root" });
        return OutClickService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Allows the sidebar to be toggled via click.
     */
    var SidebarToggleDirective = /** @class */ (function () {
        function SidebarToggleDirective(sidebarService) {
            this.sidebarService = sidebarService;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SidebarToggleDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var bp = this.breakpoint;
            this.sidebarService.toggle({ open: undefined, breakpoint: bp });
        };
        SidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiSidebarToggle]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        SidebarToggleDirective.ctorParameters = function () { return [
            { type: SidebarService }
        ]; };
        SidebarToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['cuiSidebarToggle',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarToggleDirective;
    }());
    var SidebarMinimizeDirective = /** @class */ (function () {
        function SidebarMinimizeDirective(sidebarService) {
            this.sidebarService = sidebarService;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SidebarMinimizeDirective.prototype.toggleMinimize = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            this.sidebarService.toggle({ minimize: undefined });
        };
        SidebarMinimizeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiSidebarMinimize]'
                    },] }
        ];
        /** @nocollapse */
        SidebarMinimizeDirective.ctorParameters = function () { return [
            { type: SidebarService }
        ]; };
        SidebarMinimizeDirective.propDecorators = {
            toggleMinimize: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarMinimizeDirective;
    }());
    var MobileSidebarToggleDirective = /** @class */ (function () {
        function MobileSidebarToggleDirective(sidebarService) {
            this.sidebarService = sidebarService;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        MobileSidebarToggleDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            this.sidebarService.toggle({ open: undefined, breakpoint: '' });
        };
        MobileSidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiMobileSidebarToggle]'
                    },] }
        ];
        /** @nocollapse */
        MobileSidebarToggleDirective.ctorParameters = function () { return [
            { type: SidebarService }
        ]; };
        MobileSidebarToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return MobileSidebarToggleDirective;
    }());
    /**
     * Allows the off-canvas sidebar to be closed via click.
     */
    var SidebarOffCanvasCloseDirective = /** @class */ (function () {
        function SidebarOffCanvasCloseDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SidebarOffCanvasCloseDirective.prototype.toggle = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var body = this.document.body;
            if (body.classList.contains('sidebar-off-canvas')) {
                body.classList.contains('sidebar-show') ?
                    this.renderer.removeClass(body, 'sidebar-show') :
                    this.renderer.addClass(body, 'sidebar-show');
            }
        };
        SidebarOffCanvasCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiSidebarClose]'
                    },] }
        ];
        /** @nocollapse */
        SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        SidebarOffCanvasCloseDirective.propDecorators = {
            toggle: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarOffCanvasCloseDirective;
    }());
    var BrandMinimizeDirective = /** @class */ (function () {
        function BrandMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        BrandMinimizeDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('brand-minimized') ?
                this.renderer.removeClass(body, 'brand-minimized') :
                this.renderer.addClass(body, 'brand-minimized');
        };
        BrandMinimizeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiBrandMinimize]'
                    },] }
        ];
        /** @nocollapse */
        BrandMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        BrandMinimizeDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return BrandMinimizeDirective;
    }());
    /**
     * Allows the aside to be toggled via click.
     */
    var AsideToggleDirective = /** @class */ (function () {
        function AsideToggleDirective(elementRef, classToggler) {
            this.elementRef = elementRef;
            this.classToggler = classToggler;
        }
        /**
         * @return {?}
         */
        AsideToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.bp = this.breakpoint;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AsideToggleDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var cssClass = this.bp ? "c-sidebar-" + this.bp + "-show" : asideMenuCssClasses[0];
            this.classToggler.toggleClasses(cssClass, asideMenuCssClasses, this.elementRef.nativeElement);
        };
        AsideToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiAsideMenuToggle]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        AsideToggleDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ClassToggler }
        ]; };
        AsideToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['cuiAsideMenuToggle',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AsideToggleDirective;
    }());
    var HtmlAttributesDirective = /** @class */ (function () {
        function HtmlAttributesDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        /**
         * @return {?}
         */
        HtmlAttributesDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var attribs = this.cuiHtmlAttr;
            for (var attr in attribs) {
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
        };
        /**
         * @private
         * @param {?} styles
         * @return {?}
         */
        HtmlAttributesDirective.prototype.setStyle = /**
         * @private
         * @param {?} styles
         * @return {?}
         */
        function (styles) {
            for (var style in styles) {
                this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
            }
        };
        /**
         * @private
         * @param {?} classes
         * @return {?}
         */
        HtmlAttributesDirective.prototype.addClass = /**
         * @private
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            var _this = this;
            /** @type {?} */
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.length > 0; })).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.addClass(_this.el.nativeElement, element);
            }));
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        HtmlAttributesDirective.prototype.setAttrib = /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this.renderer.setAttribute(this.el.nativeElement, key, value);
        };
        HtmlAttributesDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiHtmlAttr]'
                    },] }
        ];
        /** @nocollapse */
        HtmlAttributesDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        HtmlAttributesDirective.propDecorators = {
            cuiHtmlAttr: [{ type: core.Input }]
        };
        return HtmlAttributesDirective;
    }());
    /**
     * Detects click outside the element
     */
    var OutClickDirective = /** @class */ (function () {
        function OutClickDirective(elementRef, outClickService) {
            this.elementRef = elementRef;
            this.outClickService = outClickService;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        OutClickDirective.prototype.onDocumentClick = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var targetElement = (/** @type {?} */ ($event.target));
            // Check if the click was outside the element
            if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
                this.outClickService.onClick({ event: $event });
            }
        };
        OutClickDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[cuiOutClick]' },] }
        ];
        /** @nocollapse */
        OutClickDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: OutClickService }
        ]; };
        OutClickDirective.propDecorators = {
            onDocumentClick: [{ type: core.HostListener, args: ['document:click', ['$event'],] }]
        };
        return OutClickDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
        return LayoutModule;
    }());

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
    var AsideComponent = /** @class */ (function () {
        function AsideComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'c-sidebar-fixed';
            renderer.addClass(hostElement.nativeElement, 'c-sidebar-right');
        }
        /**
         * @return {?}
         */
        AsideComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
            this.isOffCanvas(this.offCanvas);
            this.displayBreakpoint(this.display);
        };
        /**
         * @return {?}
         */
        AsideComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AsideComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
            }
        };
        /**
         * @param {?=} offCanvas
         * @return {?}
         */
        AsideComponent.prototype.isOffCanvas = /**
         * @param {?=} offCanvas
         * @return {?}
         */
        function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.hostElement.nativeElement, 'aside-menu-off-canvas');
            }
        };
        /**
         * @param {?=} display
         * @return {?}
         */
        AsideComponent.prototype.displayBreakpoint = /**
         * @param {?=} display
         * @return {?}
         */
        function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                /** @type {?} */
                var cssClass = this.display ? "c-sidebar-right-" + this.display + "-show" : asideMenuCssClasses[0];
                this.renderer.addClass(this.hostElement.nativeElement, cssClass);
            }
        };
        AsideComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-aside',
                        template: "<aside class=\"c-sidebar-right\">\n  <ng-content></ng-content>\n</aside>\n"
                    }] }
        ];
        /** @nocollapse */
        AsideComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AsideComponent.propDecorators = {
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }]
        };
        return AsideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AsideModule = /** @class */ (function () {
        function AsideModule() {
        }
        AsideModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
        return AsideModule;
    }());

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
    var BreadcrumbService = /** @class */ (function () {
        function BreadcrumbService(router$1, route) {
            var _this = this;
            this.router = router$1;
            this.route = route;
            this._breadcrumbs = new rxjs.BehaviorSubject(new Array());
            this.breadcrumbs = this._breadcrumbs.asObservable();
            this.router.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; }))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var breadcrumbs = [];
                /** @type {?} */
                var currentRoute = _this.route.root;
                /** @type {?} */
                var url = '';
                do {
                    /** @type {?} */
                    var childrenRoutes = currentRoute.children;
                    currentRoute = null;
                    // tslint:disable-next-line:no-shadowed-variable
                    childrenRoutes.forEach((/**
                     * @param {?} route
                     * @return {?}
                     */
                    function (route) {
                        if (route.outlet === 'primary') {
                            /** @type {?} */
                            var routeSnapshot = route.snapshot;
                            url += '/' + routeSnapshot.url.map((/**
                             * @param {?} segment
                             * @return {?}
                             */
                            function (segment) { return segment.path; })).join('/');
                            breadcrumbs.push({
                                label: route.snapshot.data,
                                url: url
                            });
                            currentRoute = route;
                        }
                    }));
                } while (currentRoute);
                _this._breadcrumbs.next(Object.assign([], breadcrumbs));
                return breadcrumbs;
            }));
        }
        BreadcrumbService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BreadcrumbService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute }
        ]; };
        return BreadcrumbService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(document, renderer, service) {
            this.document = document;
            this.renderer = renderer;
            this.service = service;
            this.fixedClass = 'breadcrumb-fixed';
        }
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
            this.breadcrumbs = this.service.breadcrumbs;
        };
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        BreadcrumbComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        BreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-breadcrumb',
                        template: "<ol class=\"breadcrumb\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label.title }}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label.title }}</span>\n    </li>\n  </ng-template>\n  <ng-content></ng-content>\n</ol>\n"
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: BreadcrumbService }
        ]; };
        BreadcrumbComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        BreadcrumbModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: BreadcrumbModule,
                providers: [
                    BreadcrumbService
                ]
            };
        };
        BreadcrumbModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule],
                        exports: [BreadcrumbComponent],
                        declarations: [BreadcrumbComponent]
                    },] }
        ];
        return BreadcrumbModule;
    }());

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
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'c-footer-fixed';
            renderer.addClass(hostElement.nativeElement, 'c-footer');
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
        };
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        FooterComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
            }
        };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-footer',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        FooterComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterModule = /** @class */ (function () {
        function FooterModule() {
        }
        FooterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [FooterComponent],
                        declarations: [FooterComponent]
                    },] }
        ];
        return FooterModule;
    }());

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
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'c-header-fixed';
            renderer.addClass(hostElement.nativeElement, 'c-header');
            renderer.addClass(hostElement.nativeElement, 'c-header-light');
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        HeaderComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
            }
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-header',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        HeaderComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
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
        return HeaderModule;
    }());

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
    var NavbarBrandComponent = /** @class */ (function () {
        function NavbarBrandComponent() {
            this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
            this.navbarBrandRouterLink = '';
        }
        /**
         * @return {?}
         */
        NavbarBrandComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        };
        NavbarBrandComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-navbar-brand',
                        template: "<a class=\"c-header-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [cuiHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'c-header-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [cuiHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'c-header-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [cuiHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'c-header-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"c-header-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"c-header-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n"
                    }] }
        ];
        /** @nocollapse */
        NavbarBrandComponent.ctorParameters = function () { return []; };
        NavbarBrandComponent.propDecorators = {
            navbarBrand: [{ type: core.Input }],
            navbarBrandFull: [{ type: core.Input }],
            navbarBrandMinimized: [{ type: core.Input }],
            navbarBrandText: [{ type: core.Input }],
            navbarBrandRouterLink: [{ type: core.Input }]
        };
        return NavbarBrandComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarModule = /** @class */ (function () {
        function NavbarModule() {
        }
        NavbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
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
        return NavbarModule;
    }());

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
    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent(document, renderer, hostElement, classToggler, sidebarService, outClickService) {
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
            renderer.addClass(hostElement.nativeElement, 'c-sidebar');
        }
        /**
         * @return {?}
         */
        SidebarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        };
        /**
         * @return {?}
         */
        SidebarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
            this.stateToggleSubscribe(false);
            this.outClickSubscribe(false);
        };
        /**
         * @param {?=} compact
         * @return {?}
         */
        SidebarComponent.prototype.isCompact = /**
         * @param {?=} compact
         * @return {?}
         */
        function (compact) {
            if (compact === void 0) { compact = this.compact; }
            if (compact) {
                this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-compact');
            }
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        SidebarComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
            }
        };
        /**
         * @param {?=} minimized
         * @return {?}
         */
        SidebarComponent.prototype.isMinimized = /**
         * @param {?=} minimized
         * @return {?}
         */
        function (minimized) {
            if (minimized === void 0) { minimized = this.minimized; }
            this.sidebarService.toggle({ minimized: minimized });
        };
        /**
         * @param {?=} offCanvas
         * @return {?}
         */
        SidebarComponent.prototype.isOffCanvas = /**
         * @param {?=} offCanvas
         * @return {?}
         */
        function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-off-canvas');
            }
        };
        /**
         * @param {?=} opened
         * @return {?}
         */
        SidebarComponent.prototype.isOpened = /**
         * @param {?=} opened
         * @return {?}
         */
        function (opened) {
            if (opened === void 0) { opened = this.opened; }
            this.sidebarService.toggle({ open: opened, breakpoint: this.display });
        };
        /**
         * @param {?=} display
         * @return {?}
         */
        SidebarComponent.prototype.displayBreakpoint = /**
         * @param {?=} display
         * @return {?}
         */
        function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                this.sidebarService.toggle({ open: true, breakpoint: display });
            }
        };
        /**
         * @return {?}
         */
        SidebarComponent.prototype.setState = /**
         * @return {?}
         */
        function () {
            this.state.minimized = this.hostElement.nativeElement.classList.contains('c-sidebar-minimized');
            this.state.opened = this.hostElement.nativeElement.classList.contains("c-sidebar-" + this.display + "-show");
        };
        /**
         * @param {?=} force
         * @return {?}
         */
        SidebarComponent.prototype.minimize = /**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            /** @type {?} */
            var minimize = (typeof force === 'undefined') ? !this.hostElement.nativeElement.classList.contains('c-sidebar-minimized') : force;
            minimize ? this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-minimized') :
                this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-minimized');
            this.state.minimized = minimize;
            return minimize;
        };
        /**
         * @param {?} state
         * @return {?}
         */
        SidebarComponent.prototype.open = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            /** @type {?} */
            var toggle = (typeof state.open === 'undefined');
            /** @type {?} */
            var cssClass = Boolean(state.breakpoint) && checkBreakpoint(state.breakpoint, validBreakpoints) ?
                "c-sidebar-" + state.breakpoint + "-show" :
                sidebarCssClasses[0];
            /** @type {?} */
            var mobile = cssClass === sidebarCssClasses[0];
            /** @type {?} */
            var opened = this.hostElement.nativeElement.classList.contains(cssClass);
            /** @type {?} */
            var open = toggle ? !opened : state.open;
            if (open) {
                this.renderer.addClass(this.hostElement.nativeElement, cssClass);
            }
            else {
                this.renderer.removeClass(this.hostElement.nativeElement, cssClass);
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
        };
        /**
         * @private
         * @param {?=} subscribe
         * @return {?}
         */
        SidebarComponent.prototype.stateToggleSubscribe = /**
         * @private
         * @param {?=} subscribe
         * @return {?}
         */
        function (subscribe) {
            var _this = this;
            if (subscribe === void 0) { subscribe = true; }
            if (subscribe) {
                this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((/**
                 * @param {?} state
                 * @return {?}
                 */
                function (state) {
                    if ('minimize' in state) {
                        _this.minimize(state.minimize);
                    }
                    if ('open' in state) {
                        _this.open(state);
                    }
                }));
            }
            else {
                this.stateToggleSubscription.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?=} subscribe
         * @return {?}
         */
        SidebarComponent.prototype.outClickSubscribe = /**
         * @private
         * @param {?=} subscribe
         * @return {?}
         */
        function (subscribe) {
            var _this = this;
            if (subscribe === void 0) { subscribe = true; }
            if (subscribe) {
                this.outClickSubscription = this.outClickService.outClick$.subscribe((/**
                 * @param {?} message
                 * @return {?}
                 */
                function (message) {
                    if (message.event) {
                        _this.hideMobile(message.event);
                    }
                }));
            }
            else {
                this.outClickSubscription.unsubscribe();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SidebarComponent.prototype.hideMobile = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.state.opened) {
                if (!e.target.closest('[cuisidebartoggle]')) {
                    this.sidebarService.toggle({ open: false, breakpoint: '' });
                }
            }
        };
        SidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SidebarComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: ClassToggler },
            { type: SidebarService },
            { type: OutClickService }
        ]; };
        SidebarComponent.propDecorators = {
            compact: [{ type: core.Input }],
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            minimized: [{ type: core.Input }],
            opened: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }]
        };
        return SidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarFooterComponent = /** @class */ (function () {
        function SidebarFooterComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
        }
        /**
         * @return {?}
         */
        SidebarFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SidebarFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-footer',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SidebarFooterComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return SidebarFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarFormComponent = /** @class */ (function () {
        function SidebarFormComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar-form');
        }
        /**
         * @return {?}
         */
        SidebarFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SidebarFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-form',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SidebarFormComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return SidebarFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarHeaderComponent = /** @class */ (function () {
        function SidebarHeaderComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar-header');
        }
        /**
         * @return {?}
         */
        SidebarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SidebarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-header',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        SidebarHeaderComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return SidebarHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarMinimizerComponent = /** @class */ (function () {
        function SidebarMinimizerComponent() {
            this.role = 'button';
            this.classes = 'c-sidebar-minimizer';
        }
        SidebarMinimizerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-minimizer',
                        template: ""
                    }] }
        ];
        SidebarMinimizerComponent.propDecorators = {
            role: [{ type: core.HostBinding, args: ['attr.role',] }],
            classes: [{ type: core.HostBinding, args: ['class',] }]
        };
        return SidebarMinimizerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavDropdownDirective = /** @class */ (function () {
        function NavDropdownDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        NavDropdownDirective.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.el.nativeElement.classList.toggle('open');
        };
        NavDropdownDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiNavDropdown]'
                    },] }
        ];
        /** @nocollapse */
        NavDropdownDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return NavDropdownDirective;
    }());
    /**
     * Allows the dropdown to be toggled via click.
     */
    var NavDropdownToggleDirective = /** @class */ (function () {
        function NavDropdownToggleDirective(dropdown) {
            this.dropdown = dropdown;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        NavDropdownToggleDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            this.dropdown.toggle();
        };
        NavDropdownToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiNavDropdownToggle]'
                    },] }
        ];
        /** @nocollapse */
        NavDropdownToggleDirective.ctorParameters = function () { return [
            { type: NavDropdownDirective }
        ]; };
        NavDropdownToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return NavDropdownToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavComponent = /** @class */ (function () {
        function SidebarNavComponent(router, renderer, hostElement) {
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
        SidebarNavComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
        };
        SidebarNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav',
                        template: "<cui-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</cui-sidebar-nav-items>\n"
                    }] }
        ];
        /** @nocollapse */
        SidebarNavComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SidebarNavComponent.propDecorators = {
            navItems: [{ type: core.Input }],
            role: [{ type: core.HostBinding, args: ['attr.role',] }]
        };
        return SidebarNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavDividerComponent = /** @class */ (function () {
        function SidebarNavDividerComponent() {
        }
        /**
         * @return {?}
         */
        SidebarNavDividerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SidebarNavDividerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-divider',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        SidebarNavDividerComponent.ctorParameters = function () { return []; };
        SidebarNavDividerComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SidebarNavDividerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavHelper = /** @class */ (function () {
        function SidebarNavHelper() {
            this.hasBadge = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return Boolean(item.badge); });
            this.hasIcon = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return Boolean(item.icon); });
        }
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.itemType = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.getClass = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var itemType = this.itemType(item);
            /** @type {?} */
            var itemClass;
            if (['divider', 'title'].includes(itemType)) {
                itemClass = "nav-" + itemType;
            }
            else if (itemType === 'dropdown') {
                itemClass = 'nav-item nav-dropdown';
            }
            else {
                itemClass = 'nav-item';
            }
            return item.class ? itemClass + " " + item.class : itemClass;
        };
        /**
         * @param {?} router
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.isActive = /**
         * @param {?} router
         * @param {?} item
         * @return {?}
         */
        function (router, item) {
            return router.isActive(item.url, false);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.getIconClass = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var classes = {
                'nav-icon': true
            };
            /** @type {?} */
            var icon = item.icon;
            classes[icon] = !!item.icon;
            return classes;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.getBadgeClass = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var classes = {
                'badge': true
            };
            /** @type {?} */
            var variant = "badge-" + item.badge.variant;
            classes[variant] = !!item.badge.variant;
            return classes;
        };
        return SidebarNavHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavDropdownComponent = /** @class */ (function () {
        function SidebarNavDropdownComponent(helper) {
            this.helper = helper;
        }
        SidebarNavDropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-dropdown',
                        template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       cuiNavDropdownToggle\n       [cuiHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n      <ng-container>{{ item.name }}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n    </a>\n    <cui-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </cui-sidebar-nav-items>\n  ",
                        providers: [SidebarNavHelper],
                        styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                            '.nav-dropdown-items { display: block; }']
                    }] }
        ];
        /** @nocollapse */
        SidebarNavDropdownComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        SidebarNavDropdownComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SidebarNavDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavItemsComponent = /** @class */ (function () {
        function SidebarNavItemsComponent(router, helper) {
            this.router = router;
            this.helper = helper;
        }
        SidebarNavItemsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-items',
                        template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <cui-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"helper.getClass(item)\"\n          cuiNavDropdown\n          routerLinkActive=\"open\">\n        </cui-sidebar-nav-dropdown>\n        <cui-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [cuiHtmlAttr]=\"item.attributes\">\n        </cui-sidebar-nav-divider>\n        <cui-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [cuiHtmlAttr]=\"item.attributes\">\n        </cui-sidebar-nav-title>\n        <cui-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </cui-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <cui-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </cui-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        SidebarNavItemsComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: SidebarNavHelper }
        ]; };
        SidebarNavItemsComponent.propDecorators = {
            items: [{ type: core.Input }]
        };
        return SidebarNavItemsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavLinkComponent = /** @class */ (function () {
        function SidebarNavLinkComponent(document, renderer, helper, sidebarService) {
            this.document = document;
            this.renderer = renderer;
            this.helper = helper;
            this.sidebarService = sidebarService;
        }
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.linkType = this.getLinkType();
            this.href = this.isDisabled() ? '' : this.item.url;
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.getLinkClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var disabled = this.isDisabled();
            /** @type {?} */
            var classes = {
                'nav-link': true,
                'disabled': disabled,
                'btn-link': disabled
            };
            if (this.hasVariant()) {
                /** @type {?} */
                var variant = "nav-link-" + this.item.variant;
                classes[variant] = true;
            }
            return classes;
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.getLinkType = /**
         * @return {?}
         */
        function () {
            return this.isExternalLink() ? 'external' : 'link';
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.hasVariant = /**
         * @return {?}
         */
        function () {
            return !!this.item.variant;
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.isDisabled = /**
         * @return {?}
         */
        function () {
            return (this.item.attributes && this.item.attributes.disabled) ? true : null;
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.isExternalLink = /**
         * @return {?}
         */
        function () {
            return this.item.url.substring(0, 4) === 'http';
        };
        /**
         * @return {?}
         */
        SidebarNavLinkComponent.prototype.hideMobile = /**
         * @return {?}
         */
        function () {
            this.sidebarService.toggle({ open: false, breakpoint: '' });
        };
        SidebarNavLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-link',
                        template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [cuiHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [cuiHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
                        providers: [SidebarNavHelper]
                    }] }
        ];
        /** @nocollapse */
        SidebarNavLinkComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: SidebarNavHelper },
            { type: SidebarService }
        ]; };
        SidebarNavLinkComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SidebarNavLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavTitleComponent = /** @class */ (function () {
        function SidebarNavTitleComponent(el, renderer) {
            this.el = el;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        SidebarNavTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var name = this.renderer.createText(this.item.name);
            if (this.item.class) {
                /** @type {?} */
                var classes = this.item.class;
                this.renderer.addClass(nativeElement, classes);
            }
            if (this.item.wrapper) {
                /** @type {?} */
                var wrapper = this.renderer.createElement(this.item.wrapper.element);
                this.addAttribs(this.item.wrapper.attributes, wrapper);
                this.renderer.appendChild(wrapper, name);
                this.renderer.appendChild(nativeElement, wrapper);
            }
            else {
                this.renderer.appendChild(nativeElement, name);
            }
        };
        /**
         * @private
         * @param {?} attribs
         * @param {?} element
         * @return {?}
         */
        SidebarNavTitleComponent.prototype.addAttribs = /**
         * @private
         * @param {?} attribs
         * @param {?} element
         * @return {?}
         */
        function (attribs, element) {
            if (attribs) {
                for (var attr in attribs) {
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
        };
        /**
         * @private
         * @param {?} styles
         * @param {?} el
         * @return {?}
         */
        SidebarNavTitleComponent.prototype.setStyle = /**
         * @private
         * @param {?} styles
         * @param {?} el
         * @return {?}
         */
        function (styles, el) {
            for (var style in styles) {
                this.renderer.setStyle(el, style, styles[style]);
            }
        };
        /**
         * @private
         * @param {?} classes
         * @param {?} el
         * @return {?}
         */
        SidebarNavTitleComponent.prototype.addClass = /**
         * @private
         * @param {?} classes
         * @param {?} el
         * @return {?}
         */
        function (classes, el) {
            var _this = this;
            /** @type {?} */
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.length > 0; })).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.addClass(el, element);
            }));
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @param {?} el
         * @return {?}
         */
        SidebarNavTitleComponent.prototype.setAttrib = /**
         * @private
         * @param {?} key
         * @param {?} value
         * @param {?} el
         * @return {?}
         */
        function (key, value, el) {
            this.renderer.setAttribute(el, key, value);
        };
        SidebarNavTitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-title',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        SidebarNavTitleComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        SidebarNavTitleComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SidebarNavTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavLabelComponent = /** @class */ (function () {
        function SidebarNavLabelComponent(helper) {
            this.helper = helper;
        }
        /**
         * @return {?}
         */
        SidebarNavLabelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        SidebarNavLabelComponent.prototype.getItemClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var labelClass = {
                'nav-label': true,
                'active': true
            };
            /** @type {?} */
            var itemClass = this.item.class;
            labelClass[itemClass] = !!itemClass;
            return labelClass;
        };
        /**
         * @return {?}
         */
        SidebarNavLabelComponent.prototype.getLabelIconClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = this.helper.getIconClass(this.item);
            /** @type {?} */
            var variant = "text-" + this.item.label.variant;
            classes[variant] = !!variant;
            /** @type {?} */
            var labelClass = this.item.label.class;
            classes[labelClass] = !!labelClass;
            return classes;
        };
        SidebarNavLabelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-label',
                        template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cuiHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
                    }] }
        ];
        /** @nocollapse */
        SidebarNavLabelComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        SidebarNavLabelComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return SidebarNavLabelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarModule = /** @class */ (function () {
        function SidebarModule() {
        }
        SidebarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
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
        return SidebarModule;
    }());

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
    var TogglerComponent = /** @class */ (function () {
        function TogglerComponent(changeDetector) {
            this.changeDetector = changeDetector;
            this.hasContent = true;
        }
        /**
         * @return {?}
         */
        TogglerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.hasContent = (/** @type {?} */ (this.content.nativeElement.childNodes.length));
            this.changeDetector.detectChanges();
        };
        TogglerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-toggler',
                        template: "<div #content *ngIf = \"hasContent\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf] = \"!hasContent\">\n  <button class=\"c-header-toggler\" type=\"button\">\n    <span class=\"c-header-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        TogglerComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        TogglerComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: ['content',] }]
        };
        return TogglerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TogglerModule = /** @class */ (function () {
        function TogglerModule() {
        }
        TogglerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TogglerComponent],
                        exports: [
                            TogglerComponent
                        ],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return TogglerModule;
    }());

    exports.AsideComponent = AsideComponent;
    exports.AsideModule = AsideModule;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.FooterComponent = FooterComponent;
    exports.FooterModule = FooterModule;
    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;
    exports.NavbarBrandComponent = NavbarBrandComponent;
    exports.NavbarModule = NavbarModule;
    exports.SidebarComponent = SidebarComponent;
    exports.SidebarModule = SidebarModule;
    exports.TogglerComponent = TogglerComponent;
    exports.TogglerModule = TogglerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui-angular.umd.js.map
