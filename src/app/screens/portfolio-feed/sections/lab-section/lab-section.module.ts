import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabSectionComponent } from './lab-section.component';
import { SectionModule } from 'src/app/components/section/section.module';



@NgModule({
  declarations: [
    LabSectionComponent
  ],
  imports: [
    CommonModule,
    SectionModule
  ],
  exports: [
    LabSectionComponent
  ]
})
export class LabSectionModule { }
