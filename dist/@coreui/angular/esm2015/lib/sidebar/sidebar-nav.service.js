/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SidebarNavHelper {
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
if (false) {
    /** @type {?} */
    SidebarNavHelper.prototype.hasBadge;
    /** @type {?} */
    SidebarNavHelper.prototype.hasIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3NpZGViYXItbmF2LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFtQ1MsYUFBUTs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3pDLFlBQU87Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztJQW1CaEQsQ0FBQzs7Ozs7SUFyREMsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFJOztjQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFDaEMsU0FBUztRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLFNBQVMsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBRTtTQUN0QzthQUFNO1lBQ0wsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBS00sWUFBWSxDQUFDLElBQUk7O2NBQ2hCLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ2pCOztjQUNLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBSTs7Y0FDakIsT0FBTyxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZDs7Y0FDSyxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjs7O0lBcEJDLG9DQUFnRDs7SUFDaEQsbUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xyXG5cclxuICBpdGVtVHlwZShpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5kaXZpZGVyKSB7XHJcbiAgICAgIHJldHVybiAnZGl2aWRlcic7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0udGl0bGUpIHtcclxuICAgICAgcmV0dXJuICd0aXRsZSc7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgcmV0dXJuICdkcm9wZG93bic7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0ubGFiZWwpIHtcclxuICAgICAgcmV0dXJuICdsYWJlbCc7XHJcbiAgICB9IGVsc2UgaWYgKCFPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuICdlbXB0eSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2xpbmsnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3MoaXRlbSkge1xyXG4gICAgY29uc3QgaXRlbVR5cGUgPSB0aGlzLml0ZW1UeXBlKGl0ZW0pO1xyXG4gICAgbGV0IGl0ZW1DbGFzcztcclxuICAgIGlmIChbJ2RpdmlkZXInLCAndGl0bGUnXS5pbmNsdWRlcyhpdGVtVHlwZSkpIHtcclxuICAgICAgaXRlbUNsYXNzID0gYG5hdi0ke2l0ZW1UeXBlfWA7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgIGl0ZW1DbGFzcyA9ICduYXYtaXRlbSBuYXYtZHJvcGRvd24nIDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1DbGFzcyA9ICduYXYtaXRlbSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbS5jbGFzcyA/IGAke2l0ZW1DbGFzc30gJHtpdGVtLmNsYXNzfWAgOiBpdGVtQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyLCBpdGVtKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLmlzQWN0aXZlKGl0ZW0udXJsLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzQmFkZ2UgPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmJhZGdlKTtcclxuICBwdWJsaWMgaGFzSWNvbiA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uaWNvbik7XHJcblxyXG4gIHB1YmxpYyBnZXRJY29uQ2xhc3MoaXRlbSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XHJcbiAgICBjbGFzc2VzW2ljb25dID0gISFpdGVtLmljb247XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCYWRnZUNsYXNzKGl0ZW0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICAgICdiYWRnZSc6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25zdCB2YXJpYW50ID0gYGJhZGdlLSR7aXRlbS5iYWRnZS52YXJpYW50fWA7XHJcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISFpdGVtLmJhZGdlLnZhcmlhbnQ7XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcbn1cclxuIl19