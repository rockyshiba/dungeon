import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subclass } from '../subclass';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subclass',
  templateUrl: './subclass.component.html',
  styleUrls: ['./subclass.component.css']
})
export class SubclassComponent implements OnInit {

  @Input() url: string;

  subclass$: Observable<Subclass>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.subclass$ = this.http.get<Subclass>(this.url);
  }

}
