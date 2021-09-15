import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { ThirdComponent } from './components/third/third.component';
import { CriketComponent } from './components/third/criket/criket.component';
import { BasketballComponent } from './components/third/basketball/basketball.component';
import { HockeyComponent } from './components/third/hockey/hockey.component';
import { AtheleteModule } from './module/athelete/athelete.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // AtheleteModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
