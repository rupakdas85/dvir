import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {CalendarModule} from 'primeng/calendar';
 import { FormsModule } from '@angular/forms';
import { PreTripInspectionComponent } from './pre-trip-inspection/pre-trip-inspection.component';
import { DvirDefectCheckFormComponent } from './dvir-defect-check-form/dvir-defect-check-form.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ],
  declarations: [PreTripInspectionComponent, DvirDefectCheckFormComponent]
})
export class DriverModule { }
