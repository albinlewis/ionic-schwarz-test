import { Injectable } from '@angular/core';
import { Project } from './project.model';
import * as uuid from 'uuid';
import { of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // tslint:disable-next-line: variable-name
  private readonly _projects = new BehaviorSubject<Project[]>([
    {
      id: '1',
      name:  'Project 1',
      toolName: 'Project 1'
    },
    {
      id: '2',
      name: 'Project 2',
      toolName: 'Project 2'
    },
    {
      id: '3',
      name: 'Project 3',
      toolName: 'Project 3'
    }
  ]);
 readonly projects$ = this._projects.asObservable();

  constructor() {
  }

  private get projects(): Project[] {
     return this._projects.getValue();
  }
  private set projects(proj: Project[]) {
     this._projects.next(proj);
  }

  getProjectById(projectId: string) {
    return {
      ...this.projects.find(project => {
        return project.id === projectId;
      })
    };
  }

  addProject(projectName: string) {
    console.log(projectName);
    this.projects.push({
      id: uuid.v4(),
      name: projectName,
      toolName: ''
    });
  }

  updateProject(project: Project) {
   this.projects.forEach((element, index) => {
    if (element.id === project.id) {
        this.projects[index] = project;
    }
   });

  }
}
