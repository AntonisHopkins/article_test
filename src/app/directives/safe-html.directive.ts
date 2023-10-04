import { Directive, ElementRef, Input, Renderer2, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[appSafeHtml]'
})
export class SafeHtmlDirective {
  @Input() set appSafeHtml(value: string | undefined) {
    if (value) {
      const safeHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(value);
      this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML', this.sanitizer.sanitize(SecurityContext.HTML, safeHtml));
      console.log("safeHtml",safeHtml);
    }
  }
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) { }

}
