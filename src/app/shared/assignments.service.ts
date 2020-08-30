import { Assignment } from './assignment.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  // tslint:disable-next-line: variable-name
  private readonly _assignments = new BehaviorSubject<Assignment[]>([
  ]);

 readonly assignments$ = this._assignments.asObservable();

  constructor() { }

 private get assignments(): Assignment[] {
    return this._assignments.getValue();
 }

 private set assignments(proj: Assignment[]) {
    this._assignments.next(proj);
 }

 addAssignment(projectName: string, time: string) {
   this.assignments.push({
      name: projectName,
      time
     }
   )
 }
}
