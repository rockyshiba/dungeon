import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NamedAPIResourceList } from '../named-apiresource-list';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  url = 'http://www.dnd5eapi.co/api/conditions';
  conditions$: Observable<NamedAPIResourceList>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.conditions$ = this.http.get<NamedAPIResourceList>(this.url);
  }

}
