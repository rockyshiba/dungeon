import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NamedAPIResourceList } from '../named-apiresource-list';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  url = 'http://www.dnd5eapi.co/api/conditions';
  conditions$: Observable<NamedAPIResourceList>;

  constructor(
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    // title and meta description
    this.titleService.setTitle('DnD5e Conditions catalogue');
    this.metaService.updateTag({
      name: 'description', content: 'A catalogue of the Conditions listed in DnD5e'
    })

    this.conditions$ = this.http.get<NamedAPIResourceList>(this.url);
  }

}
