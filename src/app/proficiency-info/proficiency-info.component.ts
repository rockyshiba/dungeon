import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProficienciesService } from '../proficiencies.service';
import { Title, Meta } from '@angular/platform-browser';
import { Proficiency } from '../proficiency';
import { Toolbox } from '../toolbox';

@Component({
  selector: 'app-proficiency-info',
  templateUrl: './proficiency-info.component.html',
  styleUrls: ['./proficiency-info.component.css']
})
export class ProficiencyInfoComponent implements OnInit {
  targetProficiency: Proficiency;
  toolbox: Toolbox = new Toolbox();

  constructor(
    private route: ActivatedRoute,
    private proficienciesService: ProficienciesService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  getProficiency(): void { 
    const id: string = this.route.snapshot.paramMap.get('id');
    // call proficienciesService to get single proficiency
    this.proficienciesService.getProficiency(id).subscribe(result => {
      this.targetProficiency = result;
      this.titleService.setTitle(`DnD5e proficiency: ${result.name}`);
      this.metaService.updateTag({
        name: 'description', content: `DnD5e proficiency information for ${result.name}`
      });
    });
  }

  ngOnInit() {
    // title and meta description
    this.titleService.setTitle('DnD5e proficiency information');
    this.metaService.updateTag({
      name: 'description', content: 'DnD5e spell information of a particular spell'
    });

    this.getProficiency();
  }

}
