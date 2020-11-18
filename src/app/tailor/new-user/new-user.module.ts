import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  declarations: [
    NewUserComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewUserRoutingModule,
    ExploreContainerComponentModule
  ]
})
export class NewUserModule { }
