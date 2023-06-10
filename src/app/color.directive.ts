import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hilightBg]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') mouseout() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}
