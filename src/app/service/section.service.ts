import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, reduce, tap } from 'rxjs/operators';
import { NavItem } from "../model/nav-item.model";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  currentSectionIndex$: BehaviorSubject<number>;
  currentScrollState$: Subject<number>;
  
  navitems: NavItem[] = [
    { href: "#home", title: "Home" },
    { href: "#jobs", title: "Jobs" },
    { href: "#projects", title: "Projects" },
    { href: "#lab", title: "Lab" },
  ]

  constructor() {
    this.currentSectionIndex$ = new BehaviorSubject(0);
    this.currentScrollState$ = new Subject();

    this.currentSectionIndex$.subscribe((sectionIndex) => {
        const hash = this.navitems[sectionIndex].href;
        this.navigateTo(hash);
      })

    this.currentScrollState$
      .pipe(debounceTime(150))
      .subscribe((totalScrollAmount) => {
        console.log('totalScrollAmount', totalScrollAmount);
        if (totalScrollAmount > 0) {
          this.increment();
        } else {
          this.decrement();
        }
      });
  }

  changeOnScroll(amount: number) {
    this.currentScrollState$.next(amount);
  }

  private decrement() {
    const currentSection = this.currentSectionIndex$.value;
    const previousSection = Math.max(currentSection - 1, 0);

    this.currentSectionIndex$.next(previousSection);
  }

  private increment() {
    const currentSection = this.currentSectionIndex$.value;
    const numberOfSections = this.navitems.length;
    const nextSection = Math.min(currentSection + 1, numberOfSections - 1);

    this.currentSectionIndex$.next(nextSection);
  }

  private navigateTo(hash: string) {
    const { host, protocol } = window.location;
    window.location.href = `${protocol}//${host}${hash}`;
  }
}