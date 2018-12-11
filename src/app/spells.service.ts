import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NamedAPIResourceList } from './named-apiresource-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spellsUrl: string = 'http://www.dnd5eapi.co/api/spells';

  getSpells(): Observable<NamedAPIResourceList>{
    return this.http.get<NamedAPIResourceList>(this.spellsUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
