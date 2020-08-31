import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentDetailPageRoutingModule } from './assignment-detail-routing.module';

import { AssignmentDetailPage } from './assignment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentDetailPageRoutingModule
  ],
  declarations: [AssignmentDetailPage]
})
export class AssignmentDetailPageModule {}
