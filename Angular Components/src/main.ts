import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'; 


import {DemoMaterialModule} from './app/material.module';
import {AppComponent} from './app/app.component';
import { SalesComponent} from './app/sales/sales.component';
import {SideNavbarComponent} from './app/navigation/side-navbar/side-navbar.component';
import { DashboardComponent} from './app/dashboard/dashboard.component'


const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
 
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: "", component: DashboardComponent},
        { path: "dashboard", component: DashboardComponent},
        { path: "sales", component: SalesComponent},
        
      ]
    )
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    SalesComponent,
    SideNavbarComponent,
  DashboardComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */