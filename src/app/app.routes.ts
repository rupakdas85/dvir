import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreTripInspectionComponent } from './driver/pre-trip-inspection/pre-trip-inspection.component';

export const routes: Routes = [
    {path: 'preInspection', component: PreTripInspectionComponent},
    {path: '', redirectTo: 'preInspection', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
}
