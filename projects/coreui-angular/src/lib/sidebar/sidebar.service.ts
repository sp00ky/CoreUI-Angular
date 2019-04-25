import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarState = new BehaviorSubject<any>({});
  sidebarState$ = this.sidebarState.asObservable();

  constructor() {}

  toggle(state: any) {
    this.sidebarState.next(state);
  }
}
