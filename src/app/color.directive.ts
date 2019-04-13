import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit {
  @Input() appColor: string;
  constructor(private _el: ElementRef) {

  }
  ngAfterViewInit(): void {

    this._el.nativeElement.style.color =this.appColor;
    // this._el.nativeElement.click = () => {
    //   console.log("hi this is demo")
    // }
  }

}
