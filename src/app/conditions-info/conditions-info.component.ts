import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '../condition';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conditions-info',
  templateUrl: './conditions-info.component.html',
  styleUrls: ['./conditions-info.component.css']
})
export class ConditionsInfoComponent implements OnInit {
  @Input() url: string;
  condition$: Observable<Condition>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.condition$ = this.http.get<Condition>(this.url);
  }

}
