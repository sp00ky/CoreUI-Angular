import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { NavbarBrandComponent } from './navbar-brand.component';
import { HtmlAttributesDirective } from '../shared/layout/layout.directive';

describe('NavbarBrandComponent', () => {
  let component: NavbarBrandComponent;
  let fixture: ComponentFixture<NavbarBrandComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ NavbarBrandComponent, HtmlAttributesDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBrandComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
