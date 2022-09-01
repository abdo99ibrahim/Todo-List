import { Directive, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[only-arabic]'
})
export class ArabicDirectiveDirective {

  changed = new EventEmitter<Date>();

  constructor(private _elementRef:ElementRef) {
    // this._elementRef.nativeElement.style.backgroundColor='red';
    // this._elementRef.nativeElement.style.color='yellow';
   }
  @HostListener('keydown') onKeyDown(){
    let value = this._elementRef.nativeElement.value as string;
    let latChar = value.substring(value.length,1);
    
  }

}
