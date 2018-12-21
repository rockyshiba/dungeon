import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { AppRoutingModule } from './/app-routing.module';
import { SpellInfoComponent } from './spell-info/spell-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    SpellInfoComponent,
    DashboardComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
