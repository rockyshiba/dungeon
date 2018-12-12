import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NamedAPIResourceList } from './named-apiresource-list';
import { Observable, of } from 'rxjs';
import { Spell } from './spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spellsUrl: string = 'http://www.dnd5eapi.co/api/spells/';

  getSpells(): Observable<NamedAPIResourceList>{
    return this.http.get<NamedAPIResourceList>(this.spellsUrl);
  }

  getSpell(id: string): Observable<Spell>{
    return this.http.get<Spell>(this.spellsUrl + id);
  }

  constructor(
    private http: HttpClient
  ) { }
}
