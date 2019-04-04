(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/common', '@angular/core', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.coreui = global.coreui || {}, global.coreui.angular = {}), global.ng.common, global.ng.core, global.ng.router, global.rxjs, global.rxjs.operators));
}(this, function (exports, common, core, router, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sidebarCssClasses = [
        'sidebar-show',
        'sidebar-sm-show',
        'sidebar-md-show',
        'sidebar-lg-show',
        'sidebar-xl-show'
    ];
    /** @type {?} */
    var asideMenuCssClasses = [
        'aside-menu-show',
        'aside-menu-sm-show',
        'aside-menu-md-show',
        'aside-menu-lg-show',
        'aside-menu-xl-show'
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClassToggler = /** @class */ (function () {
        function ClassToggler(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        /**
         * @param {?} NewClassNames
         * @return {?}
         */
        ClassToggler.prototype.removeClasses = /**
         * @param {?} NewClassNames
         * @return {?}
         */
        function (NewClassNames) {
            var _this = this;
            /** @type {?} */
            var MatchClasses = NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return _this.document.body.classList.contains(Class); }));
            return MatchClasses.indexOf(true) !== -1;
        };
        /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @return {?}
         */
        ClassToggler.prototype.toggleClasses = /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @return {?}
         */
        function (Toggle, ClassNames) {
            var _this = this;
            /** @type {?} */
            var Level = ClassNames.indexOf(Toggle);
            /** @type {?} */
            var NewClassNames = ClassNames.slice(0, Level + 1);
            if (this.removeClasses(NewClassNames)) {
                NewClassNames.map((/**
                 * @param {?} Class
                 * @return {?}
                 */
                function (Class) { return _this.renderer.removeClass(_this.document.body, Class); }));
            }
            else {
                this.renderer.addClass(this.document.body, Toggle);
            }
        };
        ClassToggler.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ClassToggler.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        return ClassToggler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Allows the sidebar to be toggled via click.
     */
    var SidebarToggleDirective = /** @class */ (function () {
        function SidebarToggleDirective(classToggler) {
            this.classToggler = classToggler;
        }
        /**
         * @return {?}
         */
        SidebarToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.bp = this.breakpoint;
        };
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
            var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
            this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
        };
        SidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiSidebarToggler]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        SidebarToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        SidebarToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['cuiSidebarToggler',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarToggleDirective;
    }());
    var SidebarMinimizeDirective = /** @class */ (function () {
        function SidebarMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SidebarMinimizeDirective.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-minimized') ?
                this.renderer.removeClass(body, 'sidebar-minimized') :
                this.renderer.addClass(body, 'sidebar-minimized');
        };
        SidebarMinimizeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiSidebarMinimizer]'
                    },] }
        ];
        /** @nocollapse */
        SidebarMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        SidebarMinimizeDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarMinimizeDirective;
    }());
    var MobileSidebarToggleDirective = /** @class */ (function () {
        function MobileSidebarToggleDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
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
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        };
        MobileSidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiMobileSidebarToggler]'
                    },] }
        ];
        /** @nocollapse */
        MobileSidebarToggleDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
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
        SidebarOffCanvasCloseDirective.prototype.toggleOpen = /**
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
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
                        selector: '[cuiBrandMinimizer]'
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
        function AsideToggleDirective(classToggler) {
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
            var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
            this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
        };
        AsideToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cuiAsideMenuToggler]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        AsideToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        AsideToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['cuiAsideMenuToggler',] }],
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
                            HtmlAttributesDirective
                        ],
                        declarations: [
                            AsideToggleDirective,
                            BrandMinimizeDirective,
                            MobileSidebarToggleDirective,
                            SidebarToggleDirective,
                            SidebarMinimizeDirective,
                            SidebarOffCanvasCloseDirective,
                            HtmlAttributesDirective
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AsideComponent = /** @class */ (function () {
        function AsideComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'aside-menu-fixed';
            renderer.addClass(hostElement.nativeElement, 'aside-menu');
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
            this.renderer.removeClass(this.document.body, this.fixedClass);
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
                this.renderer.addClass(this.document.body, this.fixedClass);
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
                this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
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
                var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
            }
        };
        AsideComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-aside',
                        template: "<aside class=\"aside-menu\">\n  <ng-content></ng-content>\n</aside>\n",
                        styles: [""]
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
                        template: "<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n"
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
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'footer-fixed';
            renderer.addClass(hostElement.nativeElement, 'app-footer');
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
            this.renderer.removeClass(this.document.body, this.fixedClass);
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
                this.renderer.addClass(this.document.body, this.fixedClass);
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
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
            // @Input() navbarBrandHref: string = ''; // deprecated, use navbarBrandRouterLink instead
            this.navbarBrandRouterLink = '';
            this.fixedClass = 'header-fixed';
            renderer.addClass(hostElement.nativeElement, 'app-header');
            renderer.addClass(hostElement.nativeElement, 'navbar');
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
            this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
            // this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
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
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-header',
                        template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" cuiSidebarToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [cuiHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'navbar-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [cuiHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'navbar-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [cuiHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'navbar-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n<ng-template [ngIf]=\"sidebarToggler != false\">\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [cuiSidebarToggler]=\"sidebarToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-content></ng-content>\n<ng-template [ngIf]=\"asideMenuToggler != false\">\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [cuiAsideMenuToggler]=\"asideMenuToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" cuiAsideMenuToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        HeaderComponent.propDecorators = {
            fixed: [{ type: core.Input }],
            navbarBrand: [{ type: core.Input }],
            navbarBrandFull: [{ type: core.Input }],
            navbarBrandMinimized: [{ type: core.Input }],
            navbarBrandText: [{ type: core.Input }],
            navbarBrandRouterLink: [{ type: core.Input }],
            sidebarToggler: [{ type: core.Input }],
            mobileSidebarToggler: [{ type: core.Input }],
            asideMenuToggler: [{ type: core.Input }],
            mobileAsideMenuToggler: [{ type: core.Input }]
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
    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar');
        }
        /**
         * @return {?}
         */
        SidebarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.displayBreakpoint(this.display);
            this.isCompact(this.compact);
            this.isFixed(this.fixed);
            this.isMinimized(this.minimized);
            this.isOffCanvas(this.offCanvas);
        };
        /**
         * @return {?}
         */
        SidebarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, 'sidebar-fixed');
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
                this.renderer.addClass(this.document.body, 'sidebar-compact');
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
                this.renderer.addClass(this.document.body, 'sidebar-fixed');
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
            if (minimized) {
                this.renderer.addClass(this.document.body, 'sidebar-minimized');
            }
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
                this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
            }
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
                /** @type {?} */
                var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
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
            { type: core.ElementRef }
        ]; };
        SidebarComponent.propDecorators = {
            compact: [{ type: core.Input }],
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            minimized: [{ type: core.Input }],
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
        function SidebarMinimizerComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.role = 'button';
            renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SidebarMinimizerComponent.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-minimized') ?
                this.renderer.removeClass(body, 'sidebar-minimized') :
                this.renderer.addClass(body, 'sidebar-minimized');
            body.classList.contains('brand-minimized') ?
                this.renderer.removeClass(body, 'brand-minimized') :
                this.renderer.addClass(body, 'brand-minimized');
        };
        /**
         * @return {?}
         */
        SidebarMinimizerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SidebarMinimizerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-minimizer',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        SidebarMinimizerComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        SidebarMinimizerComponent.propDecorators = {
            role: [{ type: core.HostBinding, args: ['attr.role',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
                        template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       cuiNavDropdownToggle\n       [cuiHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n    </a>\n    <cui-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </cui-sidebar-nav-items>\n  ",
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
        function SidebarNavLinkComponent(document, renderer, helper) {
            this.document = document;
            this.renderer = renderer;
            this.helper = helper;
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
            if (this.document.body.classList.contains('sidebar-show')) {
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
        };
        SidebarNavLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cui-sidebar-nav-link',
                        template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [cuiHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [cuiHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
                        providers: [SidebarNavHelper]
                    }] }
        ];
        /** @nocollapse */
        SidebarNavLinkComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: SidebarNavHelper }
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
                        template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cuiHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
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
                            LayoutModule
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
                            SidebarNavHelper
                        ]
                    },] }
        ];
        return SidebarModule;
    }());

    exports.AsideModule = AsideModule;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.FooterModule = FooterModule;
    exports.HeaderModule = HeaderModule;
    exports.SidebarModule = SidebarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui-angular.umd.js.map
