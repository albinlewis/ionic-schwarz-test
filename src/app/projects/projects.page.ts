import { ProjectsService } from './projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from './project.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy  {

  public projects: Project[] = [];
  public projectName: string;
  public projectsSubscription: Subscription;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsSubscription = this.projectsService.projects$.subscribe((projects: Project[]) => {
     console.log('observable changed');
     this.projects = projects;
    });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

  onAddProject() {
    this.projectsService.addProject(this.projectName);
    console.log(this.projects);
    this.projectName = '';
  }


}
