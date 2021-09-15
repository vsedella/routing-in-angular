import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { SecondComponent } from './components/second/second.component';
import { AtheleteModule } from './module/athelete/athelete.module';
// import { BasketballComponent } from './components/third/basketball/basketball.component';
// import { CriketComponent } from './components/third/criket/criket.component';
// import { HockeyComponent } from './components/third/hockey/hockey.component';
// import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path :'second',
    component: SecondComponent
  },
  {
    path :'second/:id',
    component: SecondComponent
  },{
    path:'athelete',
    loadChildren: () => import('./module/athelete/athelete.module').then(x => x.AtheleteModule)
  },
  {
    path: '**', // wildcard route
    component: RouteNotFoundComponent
  }
];


// {
//   path :'athelete',
//   component: ThirdComponent,
//   children:[
//     { path: 'cricket', component: CriketComponent },
//     { path: 'basketball', component: BasketballComponent },
//     { path: 'hockey', component: HockeyComponent }
//   ]
// }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
