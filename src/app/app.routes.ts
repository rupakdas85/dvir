import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreTripInspectionComponent } from './driver/pre-trip-inspection/pre-trip-inspection.component';
import { DvirDefectCheckFormComponent } from './driver/dvir-defect-check-form/dvir-defect-check-form.component';

export const routes: Routes = [
    {path: 'preInspection', component: PreTripInspectionComponent},
    {path: 'defectCheck', component: DvirDefectCheckFormComponent},
    {path: '', redirectTo: 'preInspection', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
}
