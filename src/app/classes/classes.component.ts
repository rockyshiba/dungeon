import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Class } from '../class';
import { NamedAPIResourceList } from '../named-apiresource-list';
import { ClassesService } from '../classes.service';

import { Toolbox } from '../toolbox';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classList: NamedAPIResourceList;
  classes: Class[];

  toolbox: Toolbox = new Toolbox();

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    // change title and meta description
    this.titleService.setTitle('DnD5e Classes');
    this.metaService.updateTag({
      name: 'description', content: 'DnD5e classes information'
    });

    // get list of classes
    this.classesService.getClasses().subscribe( result => this.classList = result );
  }

}
