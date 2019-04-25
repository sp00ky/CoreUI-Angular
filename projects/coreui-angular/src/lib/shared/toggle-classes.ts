import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ClassToggler {

  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  removeClasses(NewClassNames) {
    const MatchClasses = NewClassNames.map((Class) => this.document.body.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
  }

  toggleClasses(Toggle, ClassNames) {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);

    if (this.removeClasses(NewClassNames)) {
      NewClassNames.map((Class) => this.renderer.removeClass(this.document.body, Class));
    } else {
      this.renderer.addClass(this.document.body, Toggle);
    }
  }
}
