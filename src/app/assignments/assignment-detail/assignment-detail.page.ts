import { Assignment } from 'src/app/shared/assignment.model';
import { AssignmentsService } from './../../shared/assignments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.page.html',
  styleUrls: ['./assignment-detail.page.scss'],
})
export class AssignmentDetailPage implements OnInit {
  public loadedassignment: Assignment;
  public newProjectName: string;
  public time: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private assignmentsService: AssignmentsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('assignmentId')) {
        // redirect
        this.router.navigate(['/assignments']);
        return;
      }
      const assignmentId = paramMap.get('assignmentId');
      this.loadedassignment = this.assignmentsService.getAssignmentById(assignmentId);
      console.log(this.loadedassignment);
    });
  }

  onEditAssignment() {
    if (this.time) {
      this.loadedassignment.time = this.time;
      this.assignmentsService.updateAssignment(this.loadedassignment);
      this.router.navigate(['/assignments']);
    }
  }

  onDeleteAssignment() {
    this.assignmentsService.deleteAssignment(this.loadedassignment);
    this.router.navigate(['/assignments']);
  }

}
