import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MagicSchool } from '../magic-school';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-magic-school',
  templateUrl: './magic-school.component.html',
  styleUrls: ['./magic-school.component.css']
})
export class MagicSchoolComponent implements OnInit {

  @Input() url: string;
  magicSchool$: Observable<MagicSchool>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.magicSchool$ = this.http.get<MagicSchool>(this.url);
  }

}
