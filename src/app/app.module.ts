import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { WineService } from './app.service';
import { AppRoutingModule } from './app.routes';

import { WinesComponent } from './wines/wines.component';
import { FeatureWinesComponent } from './feature-wines/feature-wines.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WinesComponent,
    FeatureWinesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
