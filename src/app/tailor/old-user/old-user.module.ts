import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldUserRoutingModule } from './old-user-routing.module';
import { OldUserComponent } from './old-user.component';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  declarations: [
    OldUserComponent
  ],
  imports: [
    CommonModule,
    OldUserRoutingModule,
    ExploreContainerComponentModule
  ]
})
export class OldUserModule { }
