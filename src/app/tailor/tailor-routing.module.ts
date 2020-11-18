import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailorComponent } from './tailor.component';

const routes: Routes = [
  {
    path: 'tailor-dashboard',
    component: TailorComponent,
    children: [
      {
        path: 'oldUser',
        loadChildren: () => import('./old-user/old-user.module').then(m => m.OldUserModule)
      },
      {
        path: 'newUser',
        loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: 'oldUser',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tailor-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TailorRoutingModule { }
