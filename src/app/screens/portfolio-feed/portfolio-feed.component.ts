import { Component, HostListener, OnInit, inject } from '@angular/core';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-portfolio-feed',
  templateUrl: './portfolio-feed.component.html',
  styleUrls: ['./portfolio-feed.component.scss']
})
export class PortfolioFeedComponent implements OnInit {
  sectionService = inject(SectionService);

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("wheel", ["$event"])
  aoRolar(event: WheelEvent) {
    this.sectionService.changeOnScroll(event.deltaY);
  }

}
