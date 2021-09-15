import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtheleteRoutingModule } from './athelete-routing.module';
import { BasketballComponent } from 'src/app/components/third/basketball/basketball.component';
import { CriketComponent } from 'src/app/components/third/criket/criket.component';
import { HockeyComponent } from 'src/app/components/third/hockey/hockey.component';
import { ThirdComponent } from 'src/app/components/third/third.component';


@NgModule({
  declarations: [
    ThirdComponent,
    CriketComponent,
    BasketballComponent,
    HockeyComponent
  ],
  imports: [
    CommonModule,
    AtheleteRoutingModule
  ],
  exports:[AtheleteRoutingModule]
})
export class AtheleteModule { }
