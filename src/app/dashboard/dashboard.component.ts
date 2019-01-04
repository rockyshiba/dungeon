import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta ) { }

  dashboardNav = [
    {
      'title': 'Spells',
      // tslint:disable-next-line:max-line-length
      'description': 'A reference list of the spells outlined in Dungeons and Dragons 5th edition. Browse or search for specific spells to learn more about them.',
      'route': '/spells'
    },
    {
      'title': 'Classes',
      'description': 'Browse the available classes of Dungeons and Dragons 5th edition here.',
      'route': '/classes'
    },
    {
      'title': 'Conditions',
      'description': 'Look up the various conditions characters can experience in Dungeons and Dragons 5th edition.',
      'route': '/conditions'
    }
  ];

  ngOnInit() {
    this.titleService.setTitle('DnD5e');
    this.metaService.updateTag({
      name: 'description', content: 'Dnd5e web browser application using Dnd5e api'
    });
  }

}
