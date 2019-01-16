import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreTripInspectionComponent } from './driver/pre-trip-inspection/pre-trip-inspection.component';
import { PostTripInspectionComponent } from './driver/post-trip-inspection/post-trip-inspection.component';
import { DvirDefectCheckFormComponent } from './driver/dvir-defect-check-form/dvir-defect-check-form.component';
import { SupervisorViewComponent } from './supervisor/supervisor-view/supervisor-view.component';

export const routes: Routes = [
    {path: 'driver/preInspection', component: PreTripInspectionComponent},
    {path: 'driver/postTripInspection', component: PostTripInspectionComponent},
    {path: 'driver/preTripInspection', component: DvirDefectCheckFormComponent},
    {path: 'supervisor/view', component: SupervisorViewComponent},
    {path: '', redirectTo: 'driver/preInspection', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
}
