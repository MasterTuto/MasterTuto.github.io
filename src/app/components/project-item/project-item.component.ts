import { Component, Input } from '@angular/core';
import { Project, Status } from 'src/app/model/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() project: Project = {} as Project;

  private statusIcons = {
    in_progress: {
      name: 'tablerHourglass',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-600',
      containerHoverColor: 'hover:bg-orange-500/50'
    },
    abandoned: {
      name: 'tablerCircleX',
      iconColor: 'text-red-600',
      borderColor: 'border-red-600',
      containerHoverColor: 'hover:bg-red-500/50'
    },
    finished: {
      name: 'tablerCheck',
      iconColor: 'text-green-600',
      borderColor: 'border-green-600',
      containerHoverColor: 'hover:bg-green-500/50'
    },
  };

  get projectStatus(): (typeof this.statusIcons)[Status] {
    return this.statusIcons[this.project.status];
  }

  get iconName(): string {
    return this.projectStatus.name;
  }

  get iconColor(): string {
    return this.projectStatus.iconColor;
  }

  get iconBorderColor(): string {
    var borderColor = this.projectStatus.borderColor;
    return `border-2 bg-slate-900 rounded-full w-10 h-10 grid place-items-center mb-4 ${borderColor}`;
  }

  get containerClass(): string {
    const { containerHoverColor } = this.projectStatus;
    return `rounded-xl border border-slate-600 p-4 flex flex-col transition-all ${containerHoverColor}`;
  }
}
