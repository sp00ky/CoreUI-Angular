/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../sidebar-nav.service';
export class SidebarNavLinkComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} helper
     */
    constructor(document, renderer, helper) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
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
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
}
SidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [cuiHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [cuiHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
                providers: [SidebarNavHelper]
            }] }
];
/** @nocollapse */
SidebarNavLinkComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: SidebarNavHelper }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFPeEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBS2xDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBd0I7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sWUFBWTs7Y0FDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7a0JBQ2YsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxvN0JBQWdEO2dCQUNoRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7Ozs0Q0FPSSxNQUFNLFNBQUMsUUFBUTtZQWZzQixTQUFTO1lBRTNDLGdCQUFnQjs7O21CQVFyQixLQUFLOzs7O0lBQU4sdUNBQW1COztJQUNuQiwyQ0FBd0I7O0lBQ3hCLHVDQUFvQjs7Ozs7SUFHbEIsMkNBQXVDOzs7OztJQUN2QywyQ0FBMkI7O0lBQzNCLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXItbmF2LWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlua1R5cGUgPSB0aGlzLmdldExpbmtUeXBlKCk7XG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6IHRoaXMuaXRlbS51cmw7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua0NsYXNzKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtbGluayc6IHRydWUsXG4gICAgICAnZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICdidG4tbGluayc6IGRpc2FibGVkXG4gICAgfTtcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBgbmF2LWxpbmstJHt0aGlzLml0ZW0udmFyaWFudH1gO1xuICAgICAgY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRXh0ZXJuYWxMaW5rKCkgPyAnZXh0ZXJuYWwnIDogJ2xpbmsnO1xuICB9XG5cbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pdGVtLnZhcmlhbnQ7XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuaXRlbS5hdHRyaWJ1dGVzICYmIHRoaXMuaXRlbS5hdHRyaWJ1dGVzLmRpc2FibGVkKSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0udXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxufVxuIl19