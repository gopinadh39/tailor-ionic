import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldUserComponent } from './old-user.component';

const routes: Routes = [
  {
    path: '',
    component: OldUserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OldUserRoutingModule { }
