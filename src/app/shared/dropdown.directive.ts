import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen: boolean = false;

  @HostListener('click') toggleOpen(eventData: Event): void {
    if (!this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }

    this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}

// export class DropdownDirective2 {
//   @HostBinding('class.open') isOpen: boolean = false;

//   @HostListener('click') toggelOpen(): void {
//     this.isOpen = !this.isOpen;
//   }
// }