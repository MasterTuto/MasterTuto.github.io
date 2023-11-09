import { Component, OnInit } from '@angular/core';
import { projectsData } from 'src/app/data/projects.data';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = projectsData.map((p) => ({
      id: Math.random().toString(),
      ...p
    }));
  }

  trackById(_: number, project: Project) {
    return project.id;
  }
}
