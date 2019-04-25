import { ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class TogglerComponent implements AfterViewInit {
    private changeDetector;
    content: ElementRef;
    hasContent: boolean;
    constructor(changeDetector: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
