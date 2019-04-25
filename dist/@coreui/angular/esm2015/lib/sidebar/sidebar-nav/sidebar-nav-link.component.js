/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../sidebar-nav.service';
import { SidebarService } from '../sidebar.service';
export class SidebarNavLinkComponent {
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
if (false) {
    /** @type {?} */
    SidebarNavLinkComponent.prototype.item;
    /** @type {?} */
    SidebarNavLinkComponent.prototype.linkType;
    /** @type {?} */
    SidebarNavLinkComponent.prototype.href;
    /**
     * @type {?}
     * @private
     */
    SidebarNavLinkComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SidebarNavLinkComponent.prototype.renderer;
    /** @type {?} */
    SidebarNavLinkComponent.prototype.helper;
    /**
     * @type {?}
     * @private
     */
    SidebarNavLinkComponent.prototype.sidebarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBT2xELE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7SUFLbEMsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUF3QixFQUN2QixjQUE4QjtRQUhaLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDcEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sWUFBWTs7Y0FDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7a0JBQ2YsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsdzdCQUFnRDtnQkFDaEQsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7YUFDaEM7Ozs7NENBT0ksTUFBTSxTQUFDLFFBQVE7WUFoQnNCLFNBQVM7WUFFM0MsZ0JBQWdCO1lBQ2hCLGNBQWM7OzttQkFRbkIsS0FBSzs7OztJQUFOLHVDQUFtQjs7SUFDbkIsMkNBQXdCOztJQUN4Qix1Q0FBb0I7Ozs7O0lBR2xCLDJDQUF1Qzs7Ozs7SUFDdkMsMkNBQTJCOztJQUMzQix5Q0FBK0I7Ozs7O0lBQy9CLGlEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7U2lkZWJhclNlcnZpY2V9IGZyb20gJy4uL3NpZGViYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1aS1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcbiAgcHVibGljIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXIsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbmtUeXBlID0gdGhpcy5nZXRMaW5rVHlwZSgpO1xuICAgIHRoaXMuaHJlZiA9IHRoaXMuaXNEaXNhYmxlZCgpID8gJycgOiB0aGlzLml0ZW0udXJsO1xuICB9XG5cbiAgcHVibGljIGdldExpbmtDbGFzcygpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgJ2Rpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZFxuICAgIH07XG4gICAgaWYgKHRoaXMuaGFzVmFyaWFudCgpKSB7XG4gICAgICBjb25zdCB2YXJpYW50ID0gYG5hdi1saW5rLSR7dGhpcy5pdGVtLnZhcmlhbnR9YDtcbiAgICAgIGNsYXNzZXNbdmFyaWFudF0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcbiAgfVxuXG4gIHB1YmxpYyBoYXNWYXJpYW50KCkge1xuICAgIHJldHVybiAhIXRoaXMuaXRlbS52YXJpYW50O1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJztcbiAgfVxuXG4gIHB1YmxpYyBoaWRlTW9iaWxlKCkge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBmYWxzZSwgYnJlYWtwb2ludDogJyd9KTtcbiAgfVxufVxuIl19