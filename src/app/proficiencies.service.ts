import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from './named-apiresource-list';

@Injectable({
  providedIn: 'root'
})
export class ProficienciesService {
  private proficienciesUrl = 'http://www.dnd5eapi.co/api/proficiencies/';
  
  getProficiencies(): Observable<NamedAPIResourceList>{
    return this.http.get<NamedAPIResourceList>(this.proficienciesUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
