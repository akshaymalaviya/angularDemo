import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    ProductDetailComponent,
    CartComponent,
    ProductCardComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
