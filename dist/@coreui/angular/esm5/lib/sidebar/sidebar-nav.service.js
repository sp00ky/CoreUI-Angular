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
export { SidebarNavHelper };
if (false) {
    /** @type {?} */
    SidebarNavHelper.prototype.hasBadge;
    /** @type {?} */
    SidebarNavHelper.prototype.hasIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3NpZGViYXItbmF2LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7UUFtQ1MsYUFBUTs7OztRQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUIsRUFBQztRQUN6QyxZQUFPOzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUFDO0lBbUJoRCxDQUFDOzs7OztJQXJEQyxtQ0FBUTs7OztJQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLElBQUk7O1lBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUNoQyxTQUFTO1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsU0FBUyxHQUFHLFNBQU8sUUFBVSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBRTtTQUN0QzthQUFNO1lBQ0wsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksU0FBUyxTQUFJLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFTSxtQ0FBUTs7Ozs7SUFBZixVQUFnQixNQUFNLEVBQUUsSUFBSTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUtNLHVDQUFZOzs7O0lBQW5CLFVBQW9CLElBQUk7O1lBQ2hCLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ2pCOztZQUNLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTSx3Q0FBYTs7OztJQUFwQixVQUFxQixJQUFJOztZQUNqQixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztZQUNLLE9BQU8sR0FBRyxXQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7SUFwQkMsb0NBQWdEOztJQUNoRCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2lkZWJhck5hdkhlbHBlciB7XHJcblxyXG4gIGl0ZW1UeXBlKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcclxuICAgICAgcmV0dXJuICdkaXZpZGVyJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS50aXRsZSkge1xyXG4gICAgICByZXR1cm4gJ3RpdGxlJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICByZXR1cm4gJ2Ryb3Bkb3duJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xyXG4gICAgICByZXR1cm4gJ2xhYmVsJztcclxuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJ2VtcHR5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbGluayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaXRlbVR5cGUoaXRlbSk7XHJcbiAgICBsZXQgaXRlbUNsYXNzO1xyXG4gICAgaWYgKFsnZGl2aWRlcicsICd0aXRsZSddLmluY2x1ZGVzKGl0ZW1UeXBlKSkge1xyXG4gICAgICBpdGVtQ2xhc3MgPSBgbmF2LSR7aXRlbVR5cGV9YDtcclxuICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtIG5hdi1kcm9wZG93bicgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtJztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtLmNsYXNzID8gYCR7aXRlbUNsYXNzfSAke2l0ZW0uY2xhc3N9YCA6IGl0ZW1DbGFzcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pIHtcclxuICAgIHJldHVybiByb3V0ZXIuaXNBY3RpdmUoaXRlbS51cmwsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNCYWRnZSA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xyXG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcclxuXHJcbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnbmF2LWljb24nOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaWNvbiA9IGl0ZW0uaWNvbjtcclxuICAgIGNsYXNzZXNbaWNvbl0gPSAhIWl0ZW0uaWNvbjtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJhZGdlQ2xhc3MoaXRlbSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ2JhZGdlJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcclxuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIWl0ZW0uYmFkZ2UudmFyaWFudDtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=