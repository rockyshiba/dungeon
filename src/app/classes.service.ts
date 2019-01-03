import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from './named-apiresource-list';
import { Class } from './class';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private classesUrl = 'http://www.dnd5eapi.co/api/classes/';

  getClasses(): Observable<NamedAPIResourceList> {
    return this.http.get<NamedAPIResourceList>(this.classesUrl);
  }

  getClass(url: string): Observable<Class> {
    return this.http.get<Class>(url);
  }

  constructor(
    private http: HttpClient
  ) { }
}
