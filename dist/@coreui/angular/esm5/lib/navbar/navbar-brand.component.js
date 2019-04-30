/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'cui-navbar-brand',
                    template: "<a class=\"c-header-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [cuiHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'c-header-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [cuiHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'c-header-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [cuiHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'c-header-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"c-header-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"c-header-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n"
                }] }
    ];
    /** @nocollapse */
    NavbarBrandComponent.ctorParameters = function () { return []; };
    NavbarBrandComponent.propDecorators = {
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        navbarBrandText: [{ type: Input }],
        navbarBrandRouterLink: [{ type: Input }]
    };
    return NavbarBrandComponent;
}());
export { NavbarBrandComponent };
if (false) {
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrand;
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrandFull;
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrandMinimized;
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrandText;
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrandRouterLink;
    /** @type {?} */
    NavbarBrandComponent.prototype.navbarBrandImg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWJyYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9uYXZiYXIvbmF2YmFyLWJyYW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFjRTtRQUxTLG9CQUFlLEdBQVEsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQztRQUN2RCwwQkFBcUIsR0FBbUIsRUFBRSxDQUFDO0lBSXBDLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsOHZCQUE0QztpQkFDN0M7Ozs7OzhCQUdFLEtBQUs7a0NBQ0wsS0FBSzt1Q0FDTCxLQUFLO2tDQUNMLEtBQUs7d0NBQ0wsS0FBSzs7SUFVUiwyQkFBQztDQUFBLEFBcEJELElBb0JDO1NBaEJZLG9CQUFvQjs7O0lBRS9CLDJDQUEwQjs7SUFDMUIsK0NBQThCOztJQUM5QixvREFBbUM7O0lBQ25DLCtDQUFnRTs7SUFDaEUscURBQW9EOztJQUVwRCw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1aS1uYXZiYXItYnJhbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLWJyYW5kLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJCcmFuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kUm91dGVyTGluazogYW55W10gfCBzdHJpbmcgPSAnJztcblxuICBuYXZiYXJCcmFuZEltZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XG4gIH1cblxufVxuIl19