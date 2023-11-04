import { Component, OnInit, inject } from '@angular/core';
import { Subject, skip, skipUntil, take } from 'rxjs';
import { NavItem } from 'src/app/model/nav-item.model';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  sectionService = inject(SectionService);

  selected = 0;  
  navitems = this.sectionService.navitems;

  _unsubscribe = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.sectionService.currentSectionIndex$
      .pipe(skip(1))
      .subscribe((sectionIndex) => {
        this.selected = sectionIndex;
      })

    let hash = window.location.hash;
    this.navitems
      .forEach((item, index) => {
        if (item.href === hash) {
          this.selected = index;
        }
      });
  }

  changeSelectedSection(sectionIndex: number): void {
    this.sectionService.currentSectionIndex$.next(sectionIndex);
  }
}
