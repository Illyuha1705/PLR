import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ButtonType }                                       from '../../interfaces/button.interface';

@Component({
  selector: 'button[ul-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() btnType: ButtonType = 'primary';
  @Input() ariaLabel: string | undefined;

  @HostBinding('class') get bindClasses(): string {
    return `ul-btn ul-btn--${this.btnType}`;
  }

  @HostBinding('attr.aria-label') get bindAriaLabel(): string {
    return this.ariaLabel ? this.ariaLabel : `${this.btnType} button`;
  }
}
