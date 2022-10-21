import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main/components/main-header/main-header.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './main/components/homepage/homepage.component';
import { BreadCrumbsComponent } from './main/components/bread-crumbs/bread-crumbs.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './main/components/footer/footer.component';
import { CustomerLoginComponent } from './main/components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './main/components/customer-signup/customer-signup.component';
import { ProductPreviewComponent } from './main/components/product-preview/product-preview.component';
const routes: Routes = [
  {
    path: 'deligo-ecommerce',
    component: MainComponent,
    children: [
      {
        path: 'shop',
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
        path: 'product-preview/:id',
        component: ProductPreviewComponent,
      },
      {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: 'deligo-ecommerce',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainComponent,
    HomepageComponent,
    BreadCrumbsComponent,
    FooterComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    ProductPreviewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SwiperModule],
})
export class CustomerSideModule {}
