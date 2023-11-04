import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionComponent } from './projects-section.component';
import { SectionModule } from 'src/app/components/section/section.module';



@NgModule({
  declarations: [
    ProjectsSectionComponent
  ],
  imports: [
    CommonModule,
    SectionModule
  ],
  exports: [
    ProjectsSectionComponent
  ]
})
export class ProjectsSectionModule { }
