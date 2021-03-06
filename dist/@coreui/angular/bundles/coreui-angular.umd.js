(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.coreui = global.coreui || {}, global.coreui.angular = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, router, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var sidebarCssClasses = [
        'sidebar-show',
        'sidebar-sm-show',
        'sidebar-md-show',
        'sidebar-lg-show',
        'sidebar-xl-show'
    ];
    var asideMenuCssClasses = [
        'aside-menu-show',
        'aside-menu-sm-show',
        'aside-menu-md-show',
        'aside-menu-lg-show',
        'aside-menu-xl-show'
    ];

    var RemoveClasses = function (NewClassNames) {
        var MatchClasses = NewClassNames.map(function (Class) { return document.body.classList.contains(Class); });
        return MatchClasses.indexOf(true) !== -1;
    };
    var ɵ0 = RemoveClasses;
    var ToggleClasses = function (Toggle, ClassNames) {
        var Level = ClassNames.indexOf(Toggle);
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (RemoveClasses(NewClassNames)) {
            NewClassNames.map(function (Class) { return document.body.classList.remove(Class); });
        }
        else {
            document.body.classList.add(Toggle);
        }
    };
    var ClassToggler = /** @class */ (function () {
        function ClassToggler(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        ClassToggler.prototype.removeClasses = function (NewClassNames) {
            var _this = this;
            var MatchClasses = NewClassNames.map(function (Class) { return _this.document.body.classList.contains(Class); });
            return MatchClasses.indexOf(true) !== -1;
        };
        ClassToggler.prototype.toggleClasses = function (Toggle, ClassNames) {
            var _this = this;
            var Level = ClassNames.indexOf(Toggle);
            var NewClassNames = ClassNames.slice(0, Level + 1);
            if (this.removeClasses(NewClassNames)) {
                NewClassNames.map(function (Class) { return _this.renderer.removeClass(_this.document.body, Class); });
            }
            else {
                this.renderer.addClass(this.document.body, Toggle);
            }
        };
        ClassToggler.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        ClassToggler = __decorate([
            core.Injectable(),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], ClassToggler);
        return ClassToggler;
    }());

    /**
    * Allows the sidebar to be toggled via click.
    */
    var SidebarToggleDirective = /** @class */ (function () {
        function SidebarToggleDirective(classToggler) {
            this.classToggler = classToggler;
        }
        SidebarToggleDirective.prototype.ngOnInit = function () {
            this.bp = this.breakpoint;
        };
        SidebarToggleDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
            this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
        };
        SidebarToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        __decorate([
            core.Input('appSidebarToggler'),
            __metadata("design:type", String)
        ], SidebarToggleDirective.prototype, "breakpoint", void 0);
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], SidebarToggleDirective.prototype, "toggleOpen", null);
        SidebarToggleDirective = __decorate([
            core.Directive({
                selector: '[appSidebarToggler]',
                providers: [ClassToggler]
            }),
            __metadata("design:paramtypes", [ClassToggler])
        ], SidebarToggleDirective);
        return SidebarToggleDirective;
    }());
    var SidebarMinimizeDirective = /** @class */ (function () {
        function SidebarMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var body = this.document.body;
            body.classList.contains('sidebar-minimized') ?
                this.renderer.removeClass(body, 'sidebar-minimized') :
                this.renderer.addClass(body, 'sidebar-minimized');
        };
        SidebarMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
        SidebarMinimizeDirective = __decorate([
            core.Directive({
                selector: '[appSidebarMinimizer]'
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], SidebarMinimizeDirective);
        return SidebarMinimizeDirective;
    }());
    var MobileSidebarToggleDirective = /** @class */ (function () {
        function MobileSidebarToggleDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var body = this.document.body;
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        };
        MobileSidebarToggleDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
        MobileSidebarToggleDirective = __decorate([
            core.Directive({
                selector: '[appMobileSidebarToggler]'
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], MobileSidebarToggleDirective);
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
        SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var body = this.document.body;
            if (body.classList.contains('sidebar-off-canvas')) {
                body.classList.contains('sidebar-show') ?
                    this.renderer.removeClass(body, 'sidebar-show') :
                    this.renderer.addClass(body, 'sidebar-show');
            }
        };
        SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
        SidebarOffCanvasCloseDirective = __decorate([
            core.Directive({
                selector: '[appSidebarClose]'
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], SidebarOffCanvasCloseDirective);
        return SidebarOffCanvasCloseDirective;
    }());
    var BrandMinimizeDirective = /** @class */ (function () {
        function BrandMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var body = this.document.body;
            body.classList.contains('brand-minimized') ?
                this.renderer.removeClass(body, 'brand-minimized') :
                this.renderer.addClass(body, 'brand-minimized');
        };
        BrandMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], BrandMinimizeDirective.prototype, "toggleOpen", null);
        BrandMinimizeDirective = __decorate([
            core.Directive({
                selector: '[appBrandMinimizer]'
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], BrandMinimizeDirective);
        return BrandMinimizeDirective;
    }());
    /**
    * Allows the aside to be toggled via click.
    */
    var AsideToggleDirective = /** @class */ (function () {
        function AsideToggleDirective(classToggler) {
            this.classToggler = classToggler;
        }
        AsideToggleDirective.prototype.ngOnInit = function () {
            this.bp = this.breakpoint;
        };
        AsideToggleDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
            this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
        };
        AsideToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        __decorate([
            core.Input('appAsideMenuToggler'),
            __metadata("design:type", String)
        ], AsideToggleDirective.prototype, "breakpoint", void 0);
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], AsideToggleDirective.prototype, "toggleOpen", null);
        AsideToggleDirective = __decorate([
            core.Directive({
                selector: '[appAsideMenuToggler]',
                providers: [ClassToggler]
            }),
            __metadata("design:paramtypes", [ClassToggler])
        ], AsideToggleDirective);
        return AsideToggleDirective;
    }());
    var HtmlAttributesDirective = /** @class */ (function () {
        function HtmlAttributesDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        HtmlAttributesDirective.prototype.ngOnInit = function () {
            var attribs = this.appHtmlAttr;
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
        HtmlAttributesDirective.prototype.setStyle = function (styles) {
            for (var style in styles) {
                this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
            }
        };
        HtmlAttributesDirective.prototype.addClass = function (classes) {
            var _this = this;
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
                _this.renderer.addClass(_this.el.nativeElement, element);
            });
        };
        HtmlAttributesDirective.prototype.setAttrib = function (key, value) {
            value !== null ?
                this.renderer.setAttribute(this.el.nativeElement, key, value) :
                this.renderer.removeAttribute(this.el.nativeElement, key);
        };
        HtmlAttributesDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
        HtmlAttributesDirective = __decorate([
            core.Directive({
                selector: '[appHtmlAttr]'
            }),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef])
        ], HtmlAttributesDirective);
        return HtmlAttributesDirective;
    }());

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
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
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    function Replace(el) {
        var nativeElement = el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    }

    var AppAsideComponent = /** @class */ (function () {
        function AppAsideComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.fixedClass = 'aside-menu-fixed';
            this._aside = true;
        }
        AppAsideComponent.prototype.ngOnInit = function () {
            this.isFixed(this.fixed);
            this.isOffCanvas(this.offCanvas);
            this.displayBreakpoint(this.display);
        };
        AppAsideComponent.prototype.ngOnDestroy = function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        AppAsideComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppAsideComponent.prototype.isOffCanvas = function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
            }
        };
        AppAsideComponent.prototype.displayBreakpoint = function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
            }
        };
        AppAsideComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppAsideComponent.prototype, "display", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppAsideComponent.prototype, "fixed", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppAsideComponent.prototype, "offCanvas", void 0);
        __decorate([
            core.HostBinding('class.aside-menu'),
            __metadata("design:type", Object)
        ], AppAsideComponent.prototype, "_aside", void 0);
        AppAsideComponent = __decorate([
            core.Component({
                selector: 'app-aside, cui-aside',
                template: "<ng-content></ng-content>"
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], AppAsideComponent);
        return AppAsideComponent;
    }());

    var AppAsideModule = /** @class */ (function () {
        function AppAsideModule() {
        }
        AppAsideModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    LayoutModule
                ],
                exports: [
                    AppAsideComponent,
                    LayoutModule
                ],
                declarations: [
                    AppAsideComponent
                ]
            })
        ], AppAsideModule);
        return AppAsideModule;
    }());

    var AppBreadcrumbService = /** @class */ (function () {
        function AppBreadcrumbService(router$1, route) {
            var _this = this;
            this.router = router$1;
            this.route = route;
            this._breadcrumbs = new rxjs.BehaviorSubject(new Array());
            this.breadcrumbs = this._breadcrumbs.asObservable();
            this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; })).subscribe(function (event) {
                var breadcrumbs = [];
                var currentRoute = _this.route.root, url = '';
                do {
                    var childrenRoutes = currentRoute.children;
                    currentRoute = null;
                    // tslint:disable-next-line:no-shadowed-variable
                    childrenRoutes.forEach(function (route) {
                        if (route.outlet === 'primary') {
                            var routeSnapshot = route.snapshot;
                            url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                            breadcrumbs.push({
                                label: route.snapshot.data,
                                url: url
                            });
                            currentRoute = route;
                        }
                    });
                } while (currentRoute);
                _this._breadcrumbs.next(Object.assign([], breadcrumbs));
                return breadcrumbs;
            });
        }
        AppBreadcrumbService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute }
        ]; };
        AppBreadcrumbService.ɵprov = core.ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(core.ɵɵinject(router.Router), core.ɵɵinject(router.ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
        AppBreadcrumbService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [router.Router, router.ActivatedRoute])
        ], AppBreadcrumbService);
        return AppBreadcrumbService;
    }());

    var AppBreadcrumbComponent = /** @class */ (function () {
        function AppBreadcrumbComponent(document, renderer, service, el) {
            this.document = document;
            this.renderer = renderer;
            this.service = service;
            this.el = el;
            this.fixedClass = 'breadcrumb-fixed';
        }
        AppBreadcrumbComponent.prototype.ngOnInit = function () {
            Replace(this.el);
            this.isFixed(this.fixed);
            this.breadcrumbs = this.service.breadcrumbs;
        };
        AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        AppBreadcrumbComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppBreadcrumbComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppBreadcrumbService },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppBreadcrumbComponent.prototype, "fixed", void 0);
        AppBreadcrumbComponent = __decorate([
            core.Component({
                selector: 'app-breadcrumb',
                template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2,
                AppBreadcrumbService,
                core.ElementRef])
        ], AppBreadcrumbComponent);
        return AppBreadcrumbComponent;
    }());

    var CuiBreadcrumbComponent = /** @class */ (function () {
        function CuiBreadcrumbComponent(document, renderer, service) {
            this.document = document;
            this.renderer = renderer;
            this.service = service;
            this.fixedClass = 'breadcrumb-fixed';
        }
        CuiBreadcrumbComponent.prototype.ngOnInit = function () {
            this.isFixed(this.fixed);
            this.breadcrumbs = this.service.breadcrumbs;
        };
        CuiBreadcrumbComponent.prototype.ngOnDestroy = function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        CuiBreadcrumbComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        CuiBreadcrumbComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppBreadcrumbService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CuiBreadcrumbComponent.prototype, "fixed", void 0);
        CuiBreadcrumbComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'cui-breadcrumb',
                template: "<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n"
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2,
                AppBreadcrumbService])
        ], CuiBreadcrumbComponent);
        return CuiBreadcrumbComponent;
    }());

    // @dynamic
    var AppBreadcrumbModule = /** @class */ (function () {
        function AppBreadcrumbModule() {
        }
        AppBreadcrumbModule_1 = AppBreadcrumbModule;
        AppBreadcrumbModule.forRoot = function (config) {
            return {
                ngModule: AppBreadcrumbModule_1,
                providers: [
                    AppBreadcrumbService
                ]
            };
        };
        var AppBreadcrumbModule_1;
        AppBreadcrumbModule = AppBreadcrumbModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule, router.RouterModule],
                exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
                declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
            })
        ], AppBreadcrumbModule);
        return AppBreadcrumbModule;
    }());

    var AppFooterComponent = /** @class */ (function () {
        function AppFooterComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.fixedClass = 'footer-fixed';
            this._footer = true;
        }
        AppFooterComponent.prototype.ngOnInit = function () {
            this.isFixed(this.fixed);
        };
        AppFooterComponent.prototype.ngOnDestroy = function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        AppFooterComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppFooterComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppFooterComponent.prototype, "fixed", void 0);
        __decorate([
            core.HostBinding('class.app-footer'),
            __metadata("design:type", Object)
        ], AppFooterComponent.prototype, "_footer", void 0);
        AppFooterComponent = __decorate([
            core.Component({
                selector: 'app-footer, cui-footer',
                template: "<ng-content></ng-content>"
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], AppFooterComponent);
        return AppFooterComponent;
    }());

    var AppFooterModule = /** @class */ (function () {
        function AppFooterModule() {
        }
        AppFooterModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [AppFooterComponent],
                declarations: [AppFooterComponent]
            })
        ], AppFooterModule);
        return AppFooterModule;
    }());

    var AppHeaderComponent = /** @class */ (function () {
        function AppHeaderComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
            this.navbarBrandRouterLink = '';
            this.fixedClass = 'header-fixed';
            this._header = true;
            this._navbar = true;
            this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
            this.sidebarTogglerClass = 'd-none d-md-block';
            this.sidebarTogglerMobileClass = 'd-lg-none';
            this.asideTogglerClass = 'd-none d-md-block';
            this.asideTogglerMobileClass = 'd-lg-none';
        }
        AppHeaderComponent.prototype.ngOnInit = function () {
            this.isFixed(this.fixed);
            this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
            this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
            this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
            this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
            this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
            this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
        };
        AppHeaderComponent.prototype.ngOnDestroy = function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        AppHeaderComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppHeaderComponent.prototype.setToggerBreakpointClass = function (breakpoint) {
            if (breakpoint === void 0) { breakpoint = 'md'; }
            var togglerClass = 'd-none d-md-block';
            if (this.breakpoints.includes(breakpoint)) {
                var breakpointIndex = this.breakpoints.indexOf(breakpoint);
                togglerClass = "d-none d-" + breakpoint + "-block";
            }
            return togglerClass;
        };
        AppHeaderComponent.prototype.setToggerMobileBreakpointClass = function (breakpoint) {
            if (breakpoint === void 0) { breakpoint = 'lg'; }
            var togglerClass = 'd-lg-none';
            if (this.breakpoints.includes(breakpoint)) {
                togglerClass = "d-" + breakpoint + "-none";
            }
            return togglerClass;
        };
        AppHeaderComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppHeaderComponent.prototype, "fixed", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "navbarBrand", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "navbarBrandFull", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "navbarBrandMinimized", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "navbarBrandText", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AppHeaderComponent.prototype, "navbarBrandHref", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "navbarBrandRouterLink", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "sidebarToggler", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppHeaderComponent.prototype, "mobileSidebarToggler", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "asideMenuToggler", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppHeaderComponent.prototype, "mobileAsideMenuToggler", void 0);
        __decorate([
            core.HostBinding('class.app-header'),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "_header", void 0);
        __decorate([
            core.HostBinding('class.navbar'),
            __metadata("design:type", Object)
        ], AppHeaderComponent.prototype, "_navbar", void 0);
        AppHeaderComponent = __decorate([
            core.Component({
                selector: 'app-header, cui-header',
                template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2])
        ], AppHeaderComponent);
        return AppHeaderComponent;
    }());

    var AppHeaderModule = /** @class */ (function () {
        function AppHeaderModule() {
        }
        AppHeaderModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    LayoutModule
                ],
                exports: [
                    AppHeaderComponent,
                    LayoutModule
                ],
                declarations: [
                    AppHeaderComponent
                ]
            })
        ], AppHeaderModule);
        return AppHeaderModule;
    }());

    var AppSidebarService = /** @class */ (function () {
        function AppSidebarService() {
            this.events = new rxjs.BehaviorSubject({});
            this.events$ = this.events.asObservable();
        }
        AppSidebarService.prototype.toggle = function (action) {
            this.events.next(action);
        };
        AppSidebarService.ɵprov = core.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
        AppSidebarService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], AppSidebarService);
        return AppSidebarService;
    }());

    var AppSidebarComponent = /** @class */ (function () {
        function AppSidebarComponent(document, renderer, sidebarService) {
            this.document = document;
            this.renderer = renderer;
            this.sidebarService = sidebarService;
            this._minimized = false;
            /**
             * Emits whenever the minimized state of the sidebar changes.
             * Primarily used to facilitate two-way binding.
             */
            this.minimizedChange = new core.EventEmitter();
            this._sidebar = true;
        }
        Object.defineProperty(AppSidebarComponent.prototype, "minimized", {
            get: function () {
                return this._minimized;
            },
            set: function (value) {
                // only update / emit events when the value changes
                if (this._minimized !== value) {
                    this._minimized = value;
                    this._updateMinimized(value);
                    this.minimizedChange.emit(value);
                    this.sidebarService.toggle({ minimize: value });
                }
            },
            enumerable: true,
            configurable: true
        });
        AppSidebarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.displayBreakpoint(this.display);
            this.isCompact(this.compact);
            this.isFixed(this.fixed);
            this.isOffCanvas(this.offCanvas);
            this.sidebarService.toggle({ minimize: this.minimized });
            this.subscriptionEvents = this.sidebarService.events$.subscribe(function (action) {
                if (action.minimize !== undefined) {
                    action.minimize === 'toggle' ? _this.toggleMinimized() : _this.minimized = !!action.minimize;
                }
            });
        };
        AppSidebarComponent.prototype.ngOnDestroy = function () {
            this.subscriptionEvents.unsubscribe();
            this.minimizedChange.complete();
            this.renderer.removeClass(this.document.body, 'sidebar-fixed');
            this._updateMinimized(false);
        };
        AppSidebarComponent.prototype.isCompact = function (compact) {
            if (compact === void 0) { compact = this.compact; }
            if (compact) {
                this.renderer.addClass(this.document.body, 'sidebar-compact');
            }
        };
        AppSidebarComponent.prototype.isFixed = function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, 'sidebar-fixed');
            }
        };
        AppSidebarComponent.prototype.toggleMinimized = function () {
            this.minimized = !this._minimized;
        };
        AppSidebarComponent.prototype.isOffCanvas = function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
            }
        };
        AppSidebarComponent.prototype.displayBreakpoint = function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
            }
        };
        AppSidebarComponent.prototype._updateMinimized = function (minimized) {
            var body = this.document.body;
            if (minimized) {
                this.renderer.addClass(body, 'sidebar-minimized');
                this.renderer.addClass(body, 'brand-minimized');
            }
            else {
                this.renderer.removeClass(body, 'sidebar-minimized');
                this.renderer.removeClass(body, 'brand-minimized');
            }
        };
        AppSidebarComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppSidebarService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppSidebarComponent.prototype, "compact", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarComponent.prototype, "display", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppSidebarComponent.prototype, "fixed", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AppSidebarComponent.prototype, "offCanvas", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], AppSidebarComponent.prototype, "minimized", null);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], AppSidebarComponent.prototype, "minimizedChange", void 0);
        __decorate([
            core.HostBinding('class.sidebar'),
            __metadata("design:type", Object)
        ], AppSidebarComponent.prototype, "_sidebar", void 0);
        AppSidebarComponent = __decorate([
            core.Component({
                selector: 'app-sidebar, cui-sidebar',
                template: "<ng-content></ng-content>"
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2,
                AppSidebarService])
        ], AppSidebarComponent);
        return AppSidebarComponent;
    }());

    var AppSidebarFooterComponent = /** @class */ (function () {
        function AppSidebarFooterComponent() {
            this._sidebarFooter = true;
        }
        __decorate([
            core.HostBinding('class.sidebar-footer'),
            __metadata("design:type", Object)
        ], AppSidebarFooterComponent.prototype, "_sidebarFooter", void 0);
        AppSidebarFooterComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-footer, cui-sidebar-footer',
                template: "<ng-content></ng-content>"
            }),
            __metadata("design:paramtypes", [])
        ], AppSidebarFooterComponent);
        return AppSidebarFooterComponent;
    }());

    var AppSidebarFormComponent = /** @class */ (function () {
        function AppSidebarFormComponent() {
            this._sidebarForm = true;
        }
        __decorate([
            core.HostBinding('class.sidebar-form'),
            __metadata("design:type", Object)
        ], AppSidebarFormComponent.prototype, "_sidebarForm", void 0);
        AppSidebarFormComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-form, cui-sidebar-form',
                template: "<ng-content></ng-content>"
            }),
            __metadata("design:paramtypes", [])
        ], AppSidebarFormComponent);
        return AppSidebarFormComponent;
    }());

    var AppSidebarHeaderComponent = /** @class */ (function () {
        function AppSidebarHeaderComponent() {
            this._sidebarHeader = true;
        }
        __decorate([
            core.HostBinding('class.sidebar-header'),
            __metadata("design:type", Object)
        ], AppSidebarHeaderComponent.prototype, "_sidebarHeader", void 0);
        AppSidebarHeaderComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-header, cui-sidebar-header',
                template: "<ng-content></ng-content>"
            }),
            __metadata("design:paramtypes", [])
        ], AppSidebarHeaderComponent);
        return AppSidebarHeaderComponent;
    }());

    var AppSidebarMinimizerComponent = /** @class */ (function () {
        function AppSidebarMinimizerComponent(sidebarService) {
            this.sidebarService = sidebarService;
            this.role = 'button';
            this._minimizer = true;
        }
        AppSidebarMinimizerComponent.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            this.sidebarService.toggle({ minimize: 'toggle' });
        };
        AppSidebarMinimizerComponent.ctorParameters = function () { return [
            { type: AppSidebarService }
        ]; };
        __decorate([
            core.HostBinding('attr.role'), core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarMinimizerComponent.prototype, "role", void 0);
        __decorate([
            core.HostBinding('class.sidebar-minimizer'),
            __metadata("design:type", Object)
        ], AppSidebarMinimizerComponent.prototype, "_minimizer", void 0);
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
        AppSidebarMinimizerComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
                template: ""
            }),
            __metadata("design:paramtypes", [AppSidebarService])
        ], AppSidebarMinimizerComponent);
        return AppSidebarMinimizerComponent;
    }());

    var NavDropdownDirective = /** @class */ (function () {
        function NavDropdownDirective(el) {
            this.el = el;
        }
        NavDropdownDirective.prototype.toggle = function () {
            this.el.nativeElement.classList.toggle('open');
        };
        NavDropdownDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        NavDropdownDirective = __decorate([
            core.Directive({
                selector: '[appNavDropdown]'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], NavDropdownDirective);
        return NavDropdownDirective;
    }());
    /**
     * Allows the dropdown to be toggled via click.
     */
    var NavDropdownToggleDirective = /** @class */ (function () {
        function NavDropdownToggleDirective(dropdown) {
            this.dropdown = dropdown;
        }
        NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
            $event.preventDefault();
            this.dropdown.toggle();
        };
        NavDropdownToggleDirective.ctorParameters = function () { return [
            { type: NavDropdownDirective }
        ]; };
        __decorate([
            core.HostListener('click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
        NavDropdownToggleDirective = __decorate([
            core.Directive({
                selector: '[appNavDropdownToggle]'
            }),
            __metadata("design:paramtypes", [NavDropdownDirective])
        ], NavDropdownToggleDirective);
        return NavDropdownToggleDirective;
    }());

    var AppSidebarNavComponent = /** @class */ (function () {
        function AppSidebarNavComponent(router) {
            this.router = router;
            this.navItems = [];
            this._sidebarBav = true;
            this.role = 'nav';
            this.navItemsArray = [];
        }
        AppSidebarNavComponent.prototype.ngOnChanges = function (changes) {
            this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
        };
        AppSidebarNavComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], AppSidebarNavComponent.prototype, "navItems", void 0);
        __decorate([
            core.HostBinding('class.sidebar-nav'),
            __metadata("design:type", Object)
        ], AppSidebarNavComponent.prototype, "_sidebarBav", void 0);
        __decorate([
            core.HostBinding('attr.role'), core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavComponent.prototype, "role", void 0);
        AppSidebarNavComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav, cui-sidebar-nav',
                template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
            }),
            __metadata("design:paramtypes", [router.Router])
        ], AppSidebarNavComponent);
        return AppSidebarNavComponent;
    }());

    var AppSidebarNavDividerComponent = /** @class */ (function () {
        function AppSidebarNavDividerComponent() {
        }
        AppSidebarNavDividerComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavDividerComponent.prototype, "item", void 0);
        AppSidebarNavDividerComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
                template: ""
            }),
            __metadata("design:paramtypes", [])
        ], AppSidebarNavDividerComponent);
        return AppSidebarNavDividerComponent;
    }());

    var SidebarNavService = /** @class */ (function () {
        function SidebarNavService() {
        }
        SidebarNavService = __decorate([
            core.Injectable()
        ], SidebarNavService);
        return SidebarNavService;
    }());
    var SidebarNavHelper = /** @class */ (function () {
        function SidebarNavHelper() {
            this.hasBadge = function (item) { return Boolean(item.badge); };
            this.hasIcon = function (item) { return Boolean(item.icon); };
        }
        SidebarNavHelper.prototype.itemType = function (item) {
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
        SidebarNavHelper.prototype.isActive = function (router, item) {
            return router.isActive(item.url, false);
        };
        SidebarNavHelper.prototype.getIconClass = function (item) {
            var classes = {
                'nav-icon': true
            };
            var icon = item.icon;
            classes[icon] = this.hasIcon(item);
            return classes;
        };
        SidebarNavHelper = __decorate([
            core.Injectable()
        ], SidebarNavHelper);
        return SidebarNavHelper;
    }());

    var AppSidebarNavDropdownComponent = /** @class */ (function () {
        function AppSidebarNavDropdownComponent(helper) {
            this.helper = helper;
        }
        AppSidebarNavDropdownComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavDropdownComponent.prototype, "item", void 0);
        AppSidebarNavDropdownComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
                template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
                providers: [SidebarNavHelper],
                styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                    '.nav-dropdown-items { display: block; }']
            }),
            __metadata("design:paramtypes", [SidebarNavHelper])
        ], AppSidebarNavDropdownComponent);
        return AppSidebarNavDropdownComponent;
    }());

    var AppSidebarNavItemsComponent = /** @class */ (function () {
        function AppSidebarNavItemsComponent(document, renderer, router, helper) {
            this.document = document;
            this.renderer = renderer;
            this.router = router;
            this.helper = helper;
        }
        Object.defineProperty(AppSidebarNavItemsComponent.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (items) {
                this._items = __spread(items);
            },
            enumerable: true,
            configurable: true
        });
        AppSidebarNavItemsComponent.prototype.hideMobile = function () {
            if (this.document.body.classList.contains('sidebar-show')) {
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
        };
        AppSidebarNavItemsComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: router.Router },
            { type: SidebarNavHelper }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Array),
            __metadata("design:paramtypes", [Array])
        ], AppSidebarNavItemsComponent.prototype, "items", null);
        AppSidebarNavItemsComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
                template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
            }),
            __param(0, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [Object, core.Renderer2,
                router.Router,
                SidebarNavHelper])
        ], AppSidebarNavItemsComponent);
        return AppSidebarNavItemsComponent;
    }());

    var AppSidebarNavLinkContentComponent = /** @class */ (function () {
        function AppSidebarNavLinkContentComponent(helper) {
            this.helper = helper;
        }
        AppSidebarNavLinkContentComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavLinkContentComponent.prototype, "item", void 0);
        AppSidebarNavLinkContentComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
                template: "\n    <ng-container *ngIf=\"true\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </ng-container>\n  ",
                providers: [SidebarNavHelper]
            }),
            __metadata("design:paramtypes", [SidebarNavHelper])
        ], AppSidebarNavLinkContentComponent);
        return AppSidebarNavLinkContentComponent;
    }());
    var AppSidebarNavLinkComponent = /** @class */ (function () {
        function AppSidebarNavLinkComponent(router$1) {
            this.router = router$1;
            this.linkClick = new core.EventEmitter();
            this.navigationEndObservable = router$1.events.pipe(operators.filter(function (event) {
                return event instanceof router.NavigationEnd;
            }));
        }
        Object.defineProperty(AppSidebarNavLinkComponent.prototype, "item", {
            get: function () {
                return this._item;
            },
            set: function (item) {
                this._item = JSON.parse(JSON.stringify(item));
            },
            enumerable: true,
            configurable: true
        });
        AppSidebarNavLinkComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
            this.linkType = this.getLinkType();
            this.href = this.isDisabled() ? '' : (this.item.href || this.url);
            this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
            this.navSubscription = this.navigationEndObservable.subscribe(function (event) {
                var itemUrlArray = _this.href.split(/[?#(;]/)[0].split('/');
                var urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
                _this.linkActive = itemUrlArray.every(function (value, index) { return value === urlArray[index]; });
            });
        };
        AppSidebarNavLinkComponent.prototype.ngOnDestroy = function () {
            this.navSubscription.unsubscribe();
        };
        AppSidebarNavLinkComponent.prototype.getLinkType = function () {
            return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
        };
        AppSidebarNavLinkComponent.prototype.isDisabled = function () {
            return (this.item.attributes && this.item.attributes.disabled) ? true : null;
        };
        AppSidebarNavLinkComponent.prototype.isExternalLink = function () {
            return !!this.item.href || this.url.substring(0, 4) === 'http';
        };
        AppSidebarNavLinkComponent.prototype.linkClicked = function () {
            this.linkClick.emit();
        };
        AppSidebarNavLinkComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], AppSidebarNavLinkComponent.prototype, "item", null);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], AppSidebarNavLinkComponent.prototype, "linkClick", void 0);
        AppSidebarNavLinkComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-link, cui-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'disabled'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchCase=\"'external'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [href]=\"href\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [target]=\"item.attributes?.target\"\r\n     [queryParams]=\"item.linkProps?.queryParams\"\r\n     [fragment]=\"item.linkProps?.fragment\"\r\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\r\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\r\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\r\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\r\n     [state]=\"item.linkProps?.state\"\r\n     [routerLink]=\"item.url\"\r\n     [class.active]=\"linkActive\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n</ng-container>\r\n",
                providers: [SidebarNavHelper]
            }),
            __metadata("design:paramtypes", [router.Router])
        ], AppSidebarNavLinkComponent);
        return AppSidebarNavLinkComponent;
    }());

    var AppSidebarNavTitleComponent = /** @class */ (function () {
        function AppSidebarNavTitleComponent(el, renderer) {
            this.el = el;
            this.renderer = renderer;
        }
        AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
            var nativeElement = this.el.nativeElement;
            var name = this.renderer.createText(this.item.name);
            if (this.item.class) {
                var classes = this.item.class;
                this.renderer.addClass(nativeElement, classes);
            }
            if (this.item.wrapper) {
                var wrapper = this.renderer.createElement(this.item.wrapper.element);
                this.addAttribs(this.item.wrapper.attributes, wrapper);
                this.renderer.appendChild(wrapper, name);
                this.renderer.appendChild(nativeElement, wrapper);
            }
            else {
                this.renderer.appendChild(nativeElement, name);
            }
        };
        AppSidebarNavTitleComponent.prototype.addAttribs = function (attribs, element) {
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
        AppSidebarNavTitleComponent.prototype.setStyle = function (styles, el) {
            for (var style in styles) {
                this.renderer.setStyle(el, style, styles[style]);
            }
        };
        AppSidebarNavTitleComponent.prototype.addClass = function (classes, el) {
            var _this = this;
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
                _this.renderer.addClass(el, element);
            });
        };
        AppSidebarNavTitleComponent.prototype.setAttrib = function (key, value, el) {
            this.renderer.setAttribute(el, key, value);
        };
        AppSidebarNavTitleComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavTitleComponent.prototype, "item", void 0);
        AppSidebarNavTitleComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
                template: ''
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2])
        ], AppSidebarNavTitleComponent);
        return AppSidebarNavTitleComponent;
    }());

    var AppSidebarNavLabelComponent = /** @class */ (function () {
        function AppSidebarNavLabelComponent(helper) {
            this.helper = helper;
            this.classes = {
                'nav-label': true,
                'active': true
            };
            this.iconClasses = {};
        }
        AppSidebarNavLabelComponent.prototype.ngOnInit = function () {
            this.iconClasses = this.helper.getIconClass(this.item);
        };
        AppSidebarNavLabelComponent.prototype.getItemClass = function () {
            var itemClass = this.item.class;
            this.classes[itemClass] = !!itemClass;
            return this.classes;
        };
        AppSidebarNavLabelComponent.prototype.getLabelIconClass = function () {
            var variant = "text-" + this.item.label.variant;
            this.iconClasses[variant] = !!this.item.label.variant;
            var labelClass = this.item.label.class;
            this.iconClasses[labelClass] = !!labelClass;
            return this.iconClasses;
        };
        AppSidebarNavLabelComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], AppSidebarNavLabelComponent.prototype, "item", void 0);
        AppSidebarNavLabelComponent = __decorate([
            core.Component({
                selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
            }),
            __metadata("design:paramtypes", [SidebarNavHelper])
        ], AppSidebarNavLabelComponent);
        return AppSidebarNavLabelComponent;
    }());

    var AppSidebarNavIconPipe = /** @class */ (function () {
        function AppSidebarNavIconPipe() {
        }
        AppSidebarNavIconPipe.prototype.transform = function (item, args) {
            var classes = {
                'nav-icon': true
            };
            var icon = item.icon;
            classes[icon] = !!item.icon;
            return classes;
        };
        AppSidebarNavIconPipe = __decorate([
            core.Pipe({
                name: 'appSidebarNavIcon'
            })
        ], AppSidebarNavIconPipe);
        return AppSidebarNavIconPipe;
    }());

    var AppSidebarNavBadgePipe = /** @class */ (function () {
        function AppSidebarNavBadgePipe() {
        }
        AppSidebarNavBadgePipe.prototype.transform = function (item, args) {
            var classes = {
                'badge': true
            };
            var variant = "badge-" + item.badge.variant;
            classes[variant] = !!item.badge.variant;
            classes[item.badge.class] = !!item.badge.class;
            return classes;
        };
        AppSidebarNavBadgePipe = __decorate([
            core.Pipe({
                name: 'appSidebarNavBadge'
            })
        ], AppSidebarNavBadgePipe);
        return AppSidebarNavBadgePipe;
    }());

    var AppSidebarNavLinkPipe = /** @class */ (function () {
        function AppSidebarNavLinkPipe() {
        }
        AppSidebarNavLinkPipe.prototype.transform = function (item) {
            var classes = { 'nav-link': true };
            var disabled = item.attributes && item.attributes.disabled;
            classes['disabled'] = disabled;
            classes['btn-link'] = disabled;
            classes["nav-link-" + item.variant] = !!item.variant;
            return classes;
        };
        AppSidebarNavLinkPipe = __decorate([
            core.Pipe({
                name: 'appSidebarNavLink'
            })
        ], AppSidebarNavLinkPipe);
        return AppSidebarNavLinkPipe;
    }());

    var AppSidebarNavItemClassPipe = /** @class */ (function () {
        function AppSidebarNavItemClassPipe(helper) {
            this.helper = helper;
        }
        AppSidebarNavItemClassPipe.prototype.transform = function (item) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var itemType = this.helper.itemType(item);
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
        AppSidebarNavItemClassPipe.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavItemClassPipe = __decorate([
            core.Pipe({
                name: 'appSidebarNavItemClass'
            }),
            __metadata("design:paramtypes", [SidebarNavHelper])
        ], AppSidebarNavItemClassPipe);
        return AppSidebarNavItemClassPipe;
    }());

    var AppSidebarModule = /** @class */ (function () {
        function AppSidebarModule() {
        }
        AppSidebarModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    LayoutModule
                ],
                exports: [
                    AppSidebarFooterComponent,
                    AppSidebarFormComponent,
                    AppSidebarHeaderComponent,
                    AppSidebarMinimizerComponent,
                    AppSidebarComponent,
                    AppSidebarNavItemsComponent,
                    AppSidebarNavComponent,
                    AppSidebarNavDividerComponent,
                    AppSidebarNavDropdownComponent,
                    AppSidebarNavLinkComponent,
                    AppSidebarNavLinkContentComponent,
                    AppSidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    LayoutModule
                ],
                declarations: [
                    AppSidebarFooterComponent,
                    AppSidebarFormComponent,
                    AppSidebarHeaderComponent,
                    AppSidebarMinimizerComponent,
                    AppSidebarMinimizerComponent,
                    AppSidebarComponent,
                    AppSidebarNavItemsComponent,
                    AppSidebarNavComponent,
                    AppSidebarNavDividerComponent,
                    AppSidebarNavDropdownComponent,
                    AppSidebarNavLinkComponent,
                    AppSidebarNavLinkContentComponent,
                    AppSidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    AppSidebarNavLabelComponent,
                    AppSidebarNavIconPipe,
                    AppSidebarNavBadgePipe,
                    AppSidebarNavLinkPipe,
                    AppSidebarNavItemClassPipe
                ],
                providers: [
                    SidebarNavHelper,
                    AppSidebarService
                ]
            })
        ], AppSidebarModule);
        return AppSidebarModule;
    }());

    exports.AppAsideComponent = AppAsideComponent;
    exports.AppAsideModule = AppAsideModule;
    exports.AppBreadcrumbComponent = AppBreadcrumbComponent;
    exports.AppBreadcrumbModule = AppBreadcrumbModule;
    exports.AppFooterComponent = AppFooterComponent;
    exports.AppFooterModule = AppFooterModule;
    exports.AppHeaderComponent = AppHeaderComponent;
    exports.AppHeaderModule = AppHeaderModule;
    exports.AppSidebarComponent = AppSidebarComponent;
    exports.AppSidebarModule = AppSidebarModule;
    exports.CuiBreadcrumbComponent = CuiBreadcrumbComponent;
    exports.ɵa = LayoutModule;
    exports.ɵb = SidebarToggleDirective;
    exports.ɵba = AppSidebarNavIconPipe;
    exports.ɵbb = AppSidebarNavBadgePipe;
    exports.ɵbc = AppSidebarNavLinkPipe;
    exports.ɵbd = AppSidebarNavItemClassPipe;
    exports.ɵc = SidebarMinimizeDirective;
    exports.ɵd = MobileSidebarToggleDirective;
    exports.ɵe = SidebarOffCanvasCloseDirective;
    exports.ɵf = BrandMinimizeDirective;
    exports.ɵg = AsideToggleDirective;
    exports.ɵh = HtmlAttributesDirective;
    exports.ɵi = ClassToggler;
    exports.ɵj = AppBreadcrumbService;
    exports.ɵk = AppSidebarService;
    exports.ɵl = AppSidebarFooterComponent;
    exports.ɵm = AppSidebarFormComponent;
    exports.ɵn = AppSidebarHeaderComponent;
    exports.ɵo = AppSidebarMinimizerComponent;
    exports.ɵp = AppSidebarNavItemsComponent;
    exports.ɵq = SidebarNavHelper;
    exports.ɵr = AppSidebarNavComponent;
    exports.ɵs = AppSidebarNavDividerComponent;
    exports.ɵt = AppSidebarNavDropdownComponent;
    exports.ɵu = AppSidebarNavLinkContentComponent;
    exports.ɵv = AppSidebarNavLinkComponent;
    exports.ɵw = AppSidebarNavTitleComponent;
    exports.ɵx = NavDropdownDirective;
    exports.ɵy = NavDropdownToggleDirective;
    exports.ɵz = AppSidebarNavLabelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui-angular.umd.js.map
