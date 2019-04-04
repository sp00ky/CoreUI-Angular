import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { HtmlAttributesDirective } from '../../shared/layout/layout.directive';

describe('SidebarNavLinkComponent', () => {
  let component: SidebarNavLinkComponent;
  let fixture: ComponentFixture<SidebarNavLinkComponent>;
  let router: Router;
  let item: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ SidebarNavLinkComponent, HtmlAttributesDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLinkComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;

    item = {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    };
    component.item = item;

    // router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
