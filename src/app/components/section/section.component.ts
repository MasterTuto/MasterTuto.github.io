import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() containerClass: string = "";

  get class() {
    let currentClass = "w-[94vw] min-h-screen p-12 pt-0 flex flex-col";
    if (this.containerClass != null)
      currentClass = `${currentClass} ${this.containerClass}`
    return currentClass;
  }
}
