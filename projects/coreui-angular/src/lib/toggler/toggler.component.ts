import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'cui-toggler',
  templateUrl: './toggler.component.html'
})
export class TogglerComponent implements AfterViewInit {

  @ViewChild('content') content: ElementRef;

  hasContent = true;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.hasContent = <boolean>this.content.nativeElement.childNodes.length;
    this.changeDetector.detectChanges();
  }
}
