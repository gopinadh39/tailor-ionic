import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TailorRoutingModule } from './tailor-routing.module';
import { TailorComponent } from './tailor.component';

@NgModule({
  declarations: [
    TailorComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TailorRoutingModule
  ]
})
export class TailorModule { }
