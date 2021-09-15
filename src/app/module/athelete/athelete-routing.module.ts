import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from 'src/app/components/third/basketball/basketball.component';
import { CriketComponent } from 'src/app/components/third/criket/criket.component';
import { HockeyComponent } from 'src/app/components/third/hockey/hockey.component';
import { ThirdComponent } from 'src/app/components/third/third.component';

const routes: Routes = [
  {
    path :'',
    component: ThirdComponent,
    children:[
      { path: 'cricket', component: CriketComponent },
      { path: 'basketball', component: BasketballComponent },
      { path: 'hockey', component: HockeyComponent }
    ]
  }
  // ,{
  //   path:'', redirectTo: 'athelete', pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtheleteRoutingModule { }
