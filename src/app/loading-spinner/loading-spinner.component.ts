import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  delay: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      this.delay = true;
    }, 10000);
  }

}
