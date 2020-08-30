import { Assignment } from 'src/app/shared/assignment.model';
import { AssignmentsService } from './../shared/assignments.service';
import { Project } from './../shared/project.model';
import { ProjectsService } from './../shared/projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit, OnDestroy {
  public projects: Project[] = [];
  public assignments: Assignment[] = [];
  public projectsSubscription: Subscription;
  public assignmentsSubscription: Subscription;
  public time: number;

  constructor(
    private projectsService: ProjectsService,
    private assignmentsService: AssignmentsService
    ) { }

  ngOnInit() {
    this.projectsSubscription = this.projectsService.projects$.subscribe((projects: Project[]) => {
      this.projects = projects;
     });

    this.assignmentsSubscription = this.assignmentsService.assignments$.subscribe((assignments: Assignment[]) => {
      console.log('observable changed');
      this.assignments = assignments;
     }); 
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

  onAddAssignment(projectName: string) {
    console.log(projectName);
    if (projectName && this.time) {
      this.assignmentsService.addAssignment(projectName, this.time.toString());
    }

  }

}
