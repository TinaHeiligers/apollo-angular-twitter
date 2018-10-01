import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  },
  {path: 'tweets', component: DataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }