import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactUsRate=4;

  ngOnInit(): void {
  }
  onContactUsRatingChanged(rate:number):void
  {
    this.contactUsRate=rate;
//Call API

  }

}
