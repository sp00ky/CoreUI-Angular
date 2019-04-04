import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';
import { SidebarNavDropdownComponent } from './sidebar-nav-dropdown.component';
import { SidebarNavItemsComponent } from './sidebar-nav-items.component';
import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { HtmlAttributesDirective } from '../../shared/layout/layout.directive';

describe('SidebarNavDropdownComponent', () => {
  let component: SidebarNavDropdownComponent;
  let fixture: ComponentFixture<SidebarNavDropdownComponent>;
  let router: Router;
  let item: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [
        SidebarNavDividerComponent,
        SidebarNavDropdownComponent,
        SidebarNavItemsComponent,
        SidebarNavLabelComponent,
        SidebarNavLinkComponent,
        SidebarNavTitleComponent,
        HtmlAttributesDirective
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavDropdownComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;

    item =   {
      name: 'Tables',
      url: '/tables',
      icon: 'icon-list',
      children: [
        {
          name: 'DataTable',
          url: '/tables/datatable',
          icon: 'icon-list',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Standard Tables',
          url: '/tables/tables',
          icon: 'icon-list'
        },
      ]
    };
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
