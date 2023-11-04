import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section.component';
import { SectionModule } from 'src/app/components/section/section.module';
import { NgIconsModule } from '@ng-icons/core';
import { tablerBrandOpenSource, tablerBrandUpwork, tablerStar, tablerBrandGithub, tablerBrandLinkedin, tablerBrandTwitter, tablerX, tablerMail } from '@ng-icons/tabler-icons';
import { SocialIconComponent } from './social-icon/social-icon.component';


@NgModule({
  declarations: [
    HomeSectionComponent,
    SocialIconComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    NgIconsModule.withIcons({
      tablerBrandGithub,
      tablerBrandLinkedin,
      tablerBrandOpenSource,
      tablerBrandTwitter,
      tablerBrandUpwork,
      tablerMail,
      tablerStar,
      tablerX
    })
  ],
  exports: [
    HomeSectionComponent
  ]
})
export class HomeSectionModule { }
