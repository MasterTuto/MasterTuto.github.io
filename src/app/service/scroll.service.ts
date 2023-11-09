import { Injectable } from "@angular/core";
import { Observable, Subject, debounceTime, filter, map, reduce, scan, tap, timeInterval } from "rxjs";
import { ScrollDirection, ScrollStateChange } from "../model/scroll-state-change.model";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentScrollState$: Subject<Omit<ScrollStateChange, 'direction'>>;

  constructor() {
    this.currentScrollState$ = new Subject();
  }

  scrollTo(deltaY: number, controls: string) {
    this.currentScrollState$.next({
      amount: deltaY, controls
    });
  }

  get currentScrollState(): Observable<ScrollStateChange> {
    return this.currentScrollState$
      .pipe(
        tap(({amount}) => console.log(amount)),
        debounceTime(150),
        filter(({amount}) => (Math.abs(amount) / window.innerHeight) > 0.1),
        map(({amount, controls}) => ({
          amount,
          controls,
          direction: amount > 0 ? ScrollDirection.UP : ScrollDirection.DOWN
        }))
      );
  }
}