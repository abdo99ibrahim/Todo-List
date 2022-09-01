import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { ArabicDatePipe } from 'src/app/pipes/arabic-date.pipe';
import { MaxLengthPipe } from 'src/app/pipes/max-length.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArabicDirectiveDirective } from 'src/app/directives/arabic-directive.directive';



@NgModule({
  declarations: [RatingComponent,ArabicDatePipe,
    MaxLengthPipe,ArabicDirectiveDirective],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  exports:[RatingComponent,ArabicDatePipe,MaxLengthPipe,ArabicDirectiveDirective,ReactiveFormsModule,FormsModule,HttpClientModule]
})
export class SharedModule { }
