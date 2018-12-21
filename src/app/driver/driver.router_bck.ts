import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreTripInspectionComponent } from './pre-trip-inspection/pre-trip-inspection.component';

export const driverRoutes: Routes = [
    {
        path: '',
        component: PreTripInspectionComponent
    }
];
export const DriverRoutes: ModuleWithProviders = RouterModule.forChild(driverRoutes);
