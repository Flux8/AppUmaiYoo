import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WinesComponent } from './wines/wines.component';
import { FeatureWinesComponent } from './feature-wines/feature-wines.component';

// Route Configuration
const routes: Routes = [
  { path: '', component: FeatureWinesComponent },
  { path: 'wines/:id', component: WinesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
