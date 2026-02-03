import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailsComponent } from './product-details/product-details';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Home page' },
  { path: 'products/:productId', component: ProductDetailsComponent, title: 'Product details' },
  { path: 'providers', component: ProviderListComponent, title: 'Providers' },
  { path: 'cart', component: CartComponent, title: 'Cart' }
];
