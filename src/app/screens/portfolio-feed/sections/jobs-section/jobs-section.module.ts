import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsSectionComponent } from './jobs-section.component';
import { SectionModule } from 'src/app/components/section/section.module';



@NgModule({
  declarations: [
    JobsSectionComponent
  ],
  imports: [
    CommonModule,
    SectionModule
  ],
  exports: [
    JobsSectionComponent
  ]
})
export class JobsSectionModule { }
