import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ClassToggler {

  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  removeClasses(NewClassNames, element) {
    const MatchClasses = NewClassNames.map((Class) => element.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
  }

  toggleClasses(Toggle, ClassNames, element) {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);

    if (this.removeClasses(NewClassNames, element)) {
      NewClassNames.map((Class) => this.renderer.removeClass(element, Class));
    } else {
      this.renderer.addClass(element, Toggle);
    }
  }
}
