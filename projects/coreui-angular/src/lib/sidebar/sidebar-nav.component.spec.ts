import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavItemsComponent } from './sidebar-nav/sidebar-nav-items.component';
import { SidebarNavDropdownComponent } from './sidebar-nav/sidebar-nav-dropdown.component';
import { SidebarNavDividerComponent } from './sidebar-nav/sidebar-nav-divider.component';
import { SidebarNavLabelComponent } from './sidebar-nav/sidebar-nav-label.component';
import { SidebarNavLinkComponent } from './sidebar-nav/sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './sidebar-nav/sidebar-nav-title.component';
import { HtmlAttributesDirective } from '../shared/layout/layout.directive';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;
  let router: Router;
  let navItems: Array<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [
        SidebarNavComponent,
        SidebarNavItemsComponent,
        SidebarNavDropdownComponent,
        SidebarNavDividerComponent,
        SidebarNavLabelComponent,
        SidebarNavLinkComponent,
        SidebarNavTitleComponent,
        HtmlAttributesDirective
      ],
      providers: [ SidebarNavHelper ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;

    // mock items supplied by the parent component

    navItems = [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'cui-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }
    ];
    component.navItems = navItems;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
