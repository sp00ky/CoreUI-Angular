/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
// CoreUI Sidebar Component
import { SidebarComponent } from './sidebar.component';
import { SidebarFooterComponent } from './sidebar-footer.component';
import { SidebarFormComponent } from './sidebar-form.component';
import { SidebarHeaderComponent } from './sidebar-header.component';
import { SidebarMinimizerComponent } from './sidebar-minimizer.component';
import { SidebarService } from './sidebar.service';
import { OutClickService } from './out-click.service';
// CoreUI SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './sidebar-nav.directive';
import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavDividerComponent } from './sidebar-nav/sidebar-nav-divider.component';
import { SidebarNavDropdownComponent } from './sidebar-nav/sidebar-nav-dropdown.component';
import { SidebarNavItemsComponent } from './sidebar-nav/sidebar-nav-items.component';
import { SidebarNavLinkComponent } from './sidebar-nav/sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './sidebar-nav/sidebar-nav-title.component';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavLabelComponent } from './sidebar-nav/sidebar-nav-label.component';
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
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
    return SidebarModule;
}());
export { SidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFckY7SUFBQTtJQTRDNkIsQ0FBQzs7Z0JBNUM3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0lBQzRCLG9CQUFDO0NBQUEsQUE1QzlCLElBNEM4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5cbi8vIENvcmVVSSBTaWRlYmFyIENvbXBvbmVudFxuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBPdXRDbGlja1NlcnZpY2UgfSBmcm9tICcuL291dC1jbGljay5zZXJ2aWNlJztcblxuLy8gQ29yZVVJIFNpZGViYXJOYXYgQ29tcG9uZW50XG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL3NpZGViYXItbmF2LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWRpdmlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2L3NpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SGVscGVyIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE91dENsaWNrU2VydmljZSxcbiAgICBTaWRlYmFyU2VydmljZSxcbiAgICBTaWRlYmFyTmF2SGVscGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7IH1cbiJdfQ==