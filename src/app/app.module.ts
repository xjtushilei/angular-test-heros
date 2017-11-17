import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HeroesComponent} from './heros/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './heros/hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './heros/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
