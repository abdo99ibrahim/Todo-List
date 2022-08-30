import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  star = [1,2,3,4,5];
@Input() rate=5;

@Output() changed = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onRatingChange(newRate:number):void{
    this.rate = newRate;
    this.changed.emit(newRate);
    // alert(newRate);
  }
}
