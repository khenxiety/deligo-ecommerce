import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPortalComponent } from './delivery-portal/delivery-portal.component';
import { RouterModule, Routes } from '@angular/router';
import { MainHeaderComponent } from './delivery-portal/components/main-header/main-header.component';
import { BreadCrumbsComponent } from './delivery-portal/components/bread-crumbs/bread-crumbs.component';
import { FooterComponent } from './delivery-portal/components/footer/footer.component';
import { HomepageComponent } from './delivery-portal/components/homepage/homepage.component';
import { CustomerLoginComponent } from './delivery-portal/components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './delivery-portal/components/customer-signup/customer-signup.component';

const routes: Routes = [
  {
    path: 'delivery.deligo-ecommerce',
    component: DeliveryPortalComponent,
    children: [
      {
        path: 'delivery-portal',
        component: HomepageComponent,
      },
      {
        path: 'customer-login',
        component: CustomerLoginComponent,
      },
      {
        path: 'customer-signup',
        component: CustomerSignupComponent,
      },

      {
        path: '',
        redirectTo: 'delivery-portal',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: 'delivery.deligo-ecommerce',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    DeliveryPortalComponent,
    MainHeaderComponent,
    BreadCrumbsComponent,
    FooterComponent,
    HomepageComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DeliveryGuyModule {}

// EMAIL, PASSWORD, USERNAME

// DRIVERS, FRANCHISE, ID, LOCATION, PHOTO
