import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NamedAPIResourceList } from '../named-apiresource-list';
import { ProficienciesService } from '../proficiencies.service';

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.css']
})
export class ProficienciesComponent implements OnInit {

  proficienciesList: NamedAPIResourceList = new NamedAPIResourceList();
  searchProficienciesList: NamedAPIResourceList = new NamedAPIResourceList();
  loaded: boolean; // determines loading spinner component

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private proficiencyService: ProficienciesService
  ) { }
  
  searchProficiencies(name: string): void{
    // clear array
    this.searchProficienciesList.count = 0;
    this.searchProficienciesList.results = [];

    for(let prof of this.proficienciesList.results){
      // if(prof.name.substr(0, name.length).toLowerCase() == name.toLowerCase().trim() ){
      if(prof.name.toLowerCase().includes(name.toLowerCase().trim())){  
        this.searchProficienciesList.count++;
        this.searchProficienciesList.results.push(prof);
      }
    }
  }

  ngOnInit() {
    // title and meta description
    this.titleService.setTitle('DnD5e Proficiencies catalogue');
    this.metaService.updateTag({
      name: 'description', content: 'A catalogue of the Proficiencies listed in DnD5e'
    });

    this.proficiencyService.getProficiencies().subscribe(results => {
      this.proficienciesList.results = Array(results.count);
      this.proficienciesList.results = results.results;
      this.proficienciesList.results.sort( (a, b) => a.name.localeCompare(b.name) ); // sort alphabtically
      this.loaded = true;
    });
  }

}
