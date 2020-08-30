import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public projects: Project[] = [
    {
      name:  'Project 1'
    },
    {
      name: 'Project 2'
    },
    {
      name: 'Project 3'
    }
  ];

  public projectName: string;

  constructor() {}

  onAddProject() {
    this.projects.push({
      name: this.projectName
    });
    this.projectName = '';
  }

}
