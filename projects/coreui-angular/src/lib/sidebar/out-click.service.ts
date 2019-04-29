import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutClickService {

  private outClick = new BehaviorSubject<any>({event: undefined});
  outClick$ = this.outClick.asObservable();

  constructor() {}

  onClick(message: any) {
    this.outClick.next(message);
  }
}
