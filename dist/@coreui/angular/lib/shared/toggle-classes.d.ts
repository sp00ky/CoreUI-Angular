import { RendererFactory2 } from '@angular/core';
export declare class ClassToggler {
    private document;
    private rendererFactory;
    private renderer;
    constructor(document: any, rendererFactory: RendererFactory2);
    removeClasses(NewClassNames: any): boolean;
    toggleClasses(Toggle: any, ClassNames: any): void;
}
