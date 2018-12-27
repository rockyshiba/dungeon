import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from '../app/spells/spells.component';
import { SpellInfoComponent } from '../app/spell-info/spell-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'spells/:id', component: SpellInfoComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'classes', component: ClassesComponent }
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
