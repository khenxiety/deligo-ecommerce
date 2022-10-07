import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule],
})
export class AdminSideModule {}
