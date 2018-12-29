import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../class';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {

  @Input() targetUrl: string;
  targetClass: Class;

  constructor(
    private classService: ClassesService
  ) { }

  ngOnInit() {
    this.classService.getClass(this.targetUrl).subscribe(result => this.targetClass = result);
  }

}
