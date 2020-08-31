import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsPage } from './assignments.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsPage
  },
  {
    path: ':assignmentId',
    loadChildren: () => import('./assignment-detail/assignment-detail.module').then( m => m.AssignmentDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsPageRoutingModule {}
