import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { AppRoutingModule } from './/app-routing.module';
import { SpellInfoComponent } from './spell-info/spell-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ClassesComponent } from './classes/classes.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { SubclassComponent } from './subclass/subclass.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MagicSchoolComponent } from './magic-school/magic-school.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConditionsInfoComponent } from './conditions-info/conditions-info.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    SpellInfoComponent,
    DashboardComponent,
    LoadingSpinnerComponent,
    ClassesComponent,
    ClassInfoComponent,
    SubclassComponent,
    MagicSchoolComponent,
    ConditionsComponent,
    ConditionsInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    NgbModule
  ],
  providers: [
    HttpClientModule,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
