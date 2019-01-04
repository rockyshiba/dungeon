import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '../condition';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  url = 'http://www.dnd5eapi.co/api/conditions';
  conditions$: Observable<Condition>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.conditions$ = this.http.get<Condition>(this.url);
  }

}
