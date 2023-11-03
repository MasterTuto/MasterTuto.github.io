import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() href: string = '';
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
