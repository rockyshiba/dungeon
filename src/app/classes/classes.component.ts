import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    // change title and meta description
    this.titleService.setTitle('DnD5e Classes');
    this.metaService.updateTag({
      name: 'description', content: 'DnD5e classes information'
    });
  }

}
