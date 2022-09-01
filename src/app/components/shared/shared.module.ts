import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { ArabicDatePipe } from 'src/app/pipes/arabic-date.pipe';
import { MaxLengthPipe } from 'src/app/pipes/max-length.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RatingComponent,ArabicDatePipe,
    MaxLengthPipe],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  exports:[RatingComponent,ArabicDatePipe,MaxLengthPipe,ReactiveFormsModule,FormsModule,HttpClientModule]
})
export class SharedModule { }
