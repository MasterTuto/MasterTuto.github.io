import { Directive, ElementRef, Input, inject } from "@angular/core";
import { SectionService } from "../service/section.service";
import { SectionStateService } from "../service/section-state.service";

@Directive({
  selector: '[scrollNavigatedTo]',
})
export class ControlledScrollDirective {
  intersectionObserver: IntersectionObserver;

  elementRef: ElementRef<HTMLElement> = inject(ElementRef);  
  sectionService = inject(SectionStateService);

  @Input('scrollNavigatedTo') controls: string = "";

  constructor() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log(this.controls);
          this.sectionService.goToSectionByHash(this.controls);
        }
      });
    });

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
}