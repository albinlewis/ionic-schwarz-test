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
  public date = '';

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
    let assignment: Assignment;
    if (projectName && this.time) {
       assignment = this.assignmentsService.getAssignmentByName(projectName);
       if (Object.keys(assignment).length > 0) {
         assignment.time += this.time;
         this.assignmentsService.updateAssignment(assignment);
      } else {
        console.log(this.date);
        this.assignmentsService.addAssignment(projectName, this.time, this.date);
      }
    }

  }

  getTotal() {
    let totalTime = 0;
    for (const assignment of this.assignments) {
       totalTime += assignment.time;
    }
    return totalTime;
  }

}
