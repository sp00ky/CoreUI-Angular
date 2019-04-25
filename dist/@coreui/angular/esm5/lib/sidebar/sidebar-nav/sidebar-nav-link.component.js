/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../sidebar-nav.service';
import { SidebarService } from '../sidebar.service';
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
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav-link',
                    template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [cuiHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [cuiHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{ item.name }}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
                    providers: [SidebarNavHelper]
                }] }
    ];
    /** @nocollapse */
    SidebarNavLinkComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: SidebarNavHelper },
        { type: SidebarService }
    ]; };
    SidebarNavLinkComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SidebarNavLinkComponent;
}());
export { SidebarNavLinkComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWxEO0lBVUUsaUNBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBd0IsRUFDdkIsY0FBOEI7UUFIWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3BDLENBQUM7Ozs7SUFFTCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sOENBQVk7OztJQUFuQjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFDNUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7Z0JBQ2YsT0FBTyxHQUFHLGNBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFTO1lBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7O0lBRU0sNkNBQVc7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sNENBQVU7OztJQUFqQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSw0Q0FBVTs7O0lBQWpCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDOzs7O0lBRU0sZ0RBQWM7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVNLDRDQUFVOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3N0JBQWdEO29CQUNoRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0RBT0ksTUFBTSxTQUFDLFFBQVE7Z0JBaEJzQixTQUFTO2dCQUUzQyxnQkFBZ0I7Z0JBQ2hCLGNBQWM7Ozt1QkFRbkIsS0FBSzs7SUFpRFIsOEJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWxEWSx1QkFBdUI7OztJQUNsQyx1Q0FBbUI7O0lBQ25CLDJDQUF3Qjs7SUFDeEIsdUNBQW9COzs7OztJQUdsQiwyQ0FBdUM7Ozs7O0lBQ3ZDLDJDQUEyQjs7SUFDM0IseUNBQStCOzs7OztJQUMvQixpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQge1NpZGViYXJTZXJ2aWNlfSBmcm9tICcuLi9zaWRlYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcbiAgcHVibGljIGxpbmtUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyLFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmlzRGlzYWJsZWQoKSA/ICcnIDogdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ25hdi1saW5rJzogdHJ1ZSxcbiAgICAgICdkaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgJ2J0bi1saW5rJzogZGlzYWJsZWRcbiAgICB9O1xuICAgIGlmICh0aGlzLmhhc1ZhcmlhbnQoKSkge1xuICAgICAgY29uc3QgdmFyaWFudCA9IGBuYXYtbGluay0ke3RoaXMuaXRlbS52YXJpYW50fWA7XG4gICAgICBjbGFzc2VzW3ZhcmlhbnRdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XG4gIH1cblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gISF0aGlzLml0ZW0udmFyaWFudDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAodGhpcy5pdGVtLmF0dHJpYnV0ZXMgJiYgdGhpcy5pdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmwuc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCc7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogZmFsc2UsIGJyZWFrcG9pbnQ6ICcnfSk7XG4gIH1cbn1cbiJdfQ==