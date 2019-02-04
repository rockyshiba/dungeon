import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from '../app/spells/spells.component';
import { SpellInfoComponent } from '../app/spell-info/spell-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'spells/:id', component: SpellInfoComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'classes/:id', component: ClassInfoComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'proficiencies', component: ProficienciesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
