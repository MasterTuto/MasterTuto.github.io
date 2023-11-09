import { Directive, ElementRef, Input, inject } from "@angular/core";
import { ScrollService } from "../service/scroll.service";
import { fromEvent, tap } from "rxjs";

@Directive({
  selector: '[controlledScrollTo]',
})
export class ControlledScrollDirective {
  elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  
  scrollService = inject(ScrollService);

  @Input('controlledScrollTo') controls: string = "";

  private LISTEN_TO_EVENT = "wheel" as const;

  constructor() {
    // this.elementRef.nativeElement
    //   .addEventListener(
    //     this.LISTEN_TO_EVENT,
    //     (event) => {
    //       if (event.ctrlKey || event.shiftKey || event.altKey) {
    //         return;
    //       }

    //       event.stopPropagation();
    //       this.scrollService.scrollTo(event.deltaY, this.controls);
    //     },
    //     { passive: false }
    //   )
  }
}