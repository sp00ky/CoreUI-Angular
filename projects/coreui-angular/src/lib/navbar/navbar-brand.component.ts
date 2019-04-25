import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cui-navbar-brand',
  templateUrl: './navbar-brand.component.html'
})
export class NavbarBrandComponent implements OnInit {

  @Input() navbarBrand: any;
  @Input() navbarBrandFull: any;
  @Input() navbarBrandMinimized: any;
  @Input() navbarBrandText: any = {icon: '🅲', text: '🅲 CoreUI'};
  @Input() navbarBrandRouterLink: any[] | string = '';

  navbarBrandImg: boolean;

  constructor() { }

  ngOnInit(): void {
    this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
  }

}
