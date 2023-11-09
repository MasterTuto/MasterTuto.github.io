import { Injectable, inject } from "@angular/core";
import { SectionStateService } from "./section-state.service";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sectionStateService = inject(SectionStateService);

  constructor() {
    this.sectionStateService.currentJob$.subscribe(
      (nextJob) => {
        const currentSection = this.sectionStateService.currentSection;
        this.sectionStateService.navigateTo(currentSection, nextJob);
      }
    );
  }

  
}