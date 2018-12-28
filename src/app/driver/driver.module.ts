import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {CalendarModule} from 'primeng/calendar';
 import { FormsModule } from '@angular/forms';
 import {DialogModule} from 'primeng/dialog';
import { PreTripInspectionComponent } from './pre-trip-inspection/pre-trip-inspection.component';
import { DvirDefectCheckFormComponent } from './dvir-defect-check-form/dvir-defect-check-form.component';
import { PostTripInspectionComponent } from './post-trip-inspection/post-trip-inspection.component';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    DialogModule
  ],
  declarations: [PreTripInspectionComponent, DvirDefectCheckFormComponent, PostTripInspectionComponent]
})
export class DriverModule { }
