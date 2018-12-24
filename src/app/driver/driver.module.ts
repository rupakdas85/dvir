import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreTripInspectionComponent } from './pre-trip-inspection/pre-trip-inspection.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule
  ],
  declarations: [PreTripInspectionComponent]
})
export class DriverModule { }
