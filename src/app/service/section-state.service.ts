import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, distinctUntilChanged, skip } from "rxjs";
import { sections } from "../data/sections.data";
import { ScrollService } from "./scroll.service";
import { ScrollDirection } from "../model/scroll-state-change.model";
import { jobsData } from "../data/jobs.data";

@Injectable({
  providedIn: 'root'
})
export class SectionStateService {
  private scrollService = inject(ScrollService);

  private currentSectionIndex$: BehaviorSubject<number>;
  private currentJobIndex$: BehaviorSubject<number>;

  constructor() {
    this.currentSectionIndex$ = new BehaviorSubject(0);
    this.currentJobIndex$ = new BehaviorSubject(0);

    this.scrollService.currentScrollState
      .subscribe(({direction, controls}) => {
        console.log(direction, controls);
        if (direction == ScrollDirection.UP) {
          this.increment(controls);
        } else {
          this.decrement(controls);
        }
      });

    this.currentSection$.subscribe(
      (nextSection) => this.navigateTo(nextSection)
    );
  }

  /** Current Section */

  get currentSection$() {
    return this.pipedObservable(this.currentSectionIndex$);
  }

  get currentSection() {
    return this.currentSectionIndex$.value;
  }

  set currentSection(sectionIndex: number) {
    this.currentSectionIndex$.next(sectionIndex);
  }

  /** Current job */

  get currentJob$() {
    return this.pipedObservable(this.currentJobIndex$);
  }

  get currentJob() {
    return this.currentJobIndex$.value;
  }

  set currentJob(jobIndex: number) {
    this.currentJobIndex$.next(jobIndex);
  }

  navigateTo(sectionIndex: number, jobIndex?: number) {
    const hash = sections[sectionIndex].href;
    const params = jobIndex == undefined ? undefined : { jobIndex: jobIndex.toString() };

    const { host, protocol } = window.location;
    let newLocation = `${protocol}//${host}`
    if (params != undefined) {
      const search = new URLSearchParams(params).toString();
      newLocation = `${newLocation}?${search}`;
    }
    newLocation = newLocation + hash;
    window.history.pushState(null, "", newLocation);
  }

  /** Private methods */

  private decrement(whatItIsIncrementing: string) {
    if (whatItIsIncrementing == 'section') {
      this.decrementSection();
    } else {
      this.decrementJob();
    }
  }

  private decrementJob() {
    if (this.currentJob == 0) {
      this.decrementSection();
    } else {
      const nextJob = Math.max(this.currentJob - 1, 0);
      this.currentJob = nextJob;
    }
  }

  private decrementSection() {
    const previousSection = Math.max(this.currentSection - 1, 0);
    this.currentSection = previousSection;
  }

  private increment(whatItIsIncrementing: string) {
    if (whatItIsIncrementing == 'section') {
      this.incrementSection();
    } else {
      this.incrementJob();
    }
  }

  private incrementJob() {
    if (this.currentJob == jobsData.length - 1) {
      this.incrementSection();
    } else {
      const numberOfJobs = jobsData.length;
      const nextJob = Math.min(this.currentJob + 1, numberOfJobs - 1);  

      this.currentJob = nextJob;
    }
  }

  private incrementSection() {
    const numberOfSections = sections.length;
    const nextSection = Math.min(this.currentSection + 1, numberOfSections - 1);  

    this.currentSection = nextSection;
  }

  private isInJobs(): boolean {
    return this.currentSection === 1;
  }

  private pipedObservable<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(
      skip(1),
      distinctUntilChanged()
    );
  }
}