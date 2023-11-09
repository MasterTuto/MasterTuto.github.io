import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent {
  @Input() icon: string = "";
  @Input() url: string = "";
}
