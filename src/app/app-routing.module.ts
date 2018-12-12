import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from '../app/spells/spells.component';
import { SpellInfoComponent } from '../app/spell-info/spell-info.component';

const routes: Routes = [
  { path: 'spells/:id', component: SpellInfoComponent },
  { path: 'spells', component: SpellsComponent }
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
