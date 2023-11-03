import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/model/nav-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  selected = 0;
  navitems: NavItem[] = [
    { href: "#home", title: "Home" },
    { href: "#jobs", title: "Jobs" },
    { href: "#projects", title: "Projects" },
    { href: "#lab", title: "Lab" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
