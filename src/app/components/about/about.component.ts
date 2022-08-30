import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  aboutRate=4;
  ngOnInit(): void {
  }
  onAboutRatingChanged(newRate:number):void{
    this.aboutRate=newRate;
  }
}
