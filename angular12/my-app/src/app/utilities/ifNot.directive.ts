import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
  * Opposite of  *ngIf
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[ifNot]'})
export class IfNotDirective {
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
   @Input() set ifNot(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}