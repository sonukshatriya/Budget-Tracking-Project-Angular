import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'budget-tracking', loadChildren:()=> import('./budget-tracking/budget-tracking.module').then(m => m.BudgetTrackingModule)}
];
