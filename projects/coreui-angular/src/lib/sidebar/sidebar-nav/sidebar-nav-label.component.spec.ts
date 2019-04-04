import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SidebarNavLabelComponent} from './sidebar-nav-label.component';
import {SidebarNavHelper} from '../sidebar-nav.service';
import {LayoutModule} from '../../shared/layout';

describe('SidebarNavLabelComponent', () => {
  let component: SidebarNavLabelComponent;
  let fixture: ComponentFixture<SidebarNavLabelComponent>;
  let item: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavLabelComponent ],
      providers: [ SidebarNavHelper ],
      imports: [ LayoutModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLabelComponent);
    component = fixture.componentInstance;

    item = {
      class: '',
      variant: 'info'
    };
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
