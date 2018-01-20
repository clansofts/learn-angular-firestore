import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDataService } from './product-data.service';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolver } from './product.resolver.service';
import { AuthGuard } from '../user/auth.guard.service';
import { effects } from './store';
import { reducer, PRODUCT_FEATURE_STORE_NAME } from './store/reducers/products.reducer';
import { ProductExistsGuard } from './store/guards/product-exists.guard';
import { ProductGuard } from "./store/guards/products.guard";

export const ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent,
    //resolve: {items: ProductResolver},
    canActivate: [AuthGuard, ProductGuard]
  },
  { path: 'new', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: ':productId/edit', component: ProductEditComponent, canActivate: [AuthGuard, ProductExistsGuard] }
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature(PRODUCT_FEATURE_STORE_NAME, reducer),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  providers: [
    ProductResolver,
    ProductDataService,
    AuthGuard,
    ProductExistsGuard,
    ProductGuard
  ]
})
export class ProductModule {
}
