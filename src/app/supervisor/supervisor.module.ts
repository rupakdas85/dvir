import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { SupervisorViewComponent } from './supervisor-view/supervisor-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [SupervisorViewComponent],
  exports: [SupervisorViewComponent]
})
export class SupervisorModule { }
