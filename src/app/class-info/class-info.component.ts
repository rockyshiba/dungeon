import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../class';
import { ClassesService } from '../classes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {

  targetUrl = 'http://www.dnd5eapi.co/api/classes/';
  targetClass: Class;

  constructor(
    private classService: ClassesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.classService.getClass(`${this.targetUrl}${id}`).subscribe(result => this.targetClass = result);
  }

}
