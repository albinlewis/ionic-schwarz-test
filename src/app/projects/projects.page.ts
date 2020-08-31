import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../shared/projects.service';
import { Project } from '../shared/project.model';


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
     this.projects = projects;
    });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

  onAddProject() {
    if (this.projectName) {
      this.projectsService.addProject(this.projectName);
    }
    this.projectName = '';
  }


}
