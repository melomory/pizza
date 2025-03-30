import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBackgroundColor: string = 'white';
  @Input() coolInputFocusBackgroundColor: string = 'orange';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBackgroundColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }


  @HostListener('focus')
  onFocus() {
    this.changeElementBackgroundColor(this.coolInputFocusBackgroundColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElementBackgroundColor(this.coolInputDefaultBackgroundColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(event);
    console.log(target);
  }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    // // this.element.nativeElement.style.backgroundColor = 'yellow';
    //
    // this.renderer.setAttribute(this.element.nativeElement, 'placeholder', this.element.nativeElement.getAttribute('placeholder') + '*');
    //
    // const text = this.renderer.createElement('span');
    // this.renderer.setProperty(text, 'innerText', '*Обязательно для залполнения');
    // this.renderer.setStyle(text, 'color', 'red');
    // this.renderer.insertBefore(this.element.nativeElement.parentElement, text, this.renderer.nextSibling(this.element.nativeElement));

    this.changeElementBackgroundColor(this.coolInputDefaultBackgroundColor);
    this.renderer.setAttribute(this.element.nativeElement, 'placeholder', this.element.nativeElement.getAttribute('placeholder') + '*');
  }

  changeElementBackgroundColor(color: string) {
    this._backgroundColor = color;
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }
}
