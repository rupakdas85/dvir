import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreTripInspectionComponent } from './pre-trip-inspection/pre-trip-inspection.component';
import {InputTextModule} from 'primeng/inputtext';
import { DvirDefectCheckFormComponent } from './dvir-defect-check-form/dvir-defect-check-form.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule
  ],
  declarations: [PreTripInspectionComponent, DvirDefectCheckFormComponent]
})
export class DriverModule { }
