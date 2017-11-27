import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routing';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './authentication/login.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { ProductList } from './product-list/product-list.component';

import { AuthenticationService } from './authentication/authentication.service';
import { ProductDataResolver } from './product-list/product-list-data-resolver';
import { ProductDataService } from './product-list/product-data.service';

@NgModule({
  declarations: [
    LoginComponent,
    ProductList,
    ProductDetailComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    AuthenticationService,
    ProductDataResolver,
    ProductDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }