import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ButtonType } from '../../../../../../src/app/interfaces/button.interface';

@Component({
  selector: 'button[gc-button]',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AtomButtonComponent {
  @Input() btnType: ButtonType = 'primary';
  @Input() ariaLabel: string | undefined;

  @HostBinding('class') get bindClasses(): string {
    return `ul-btn ul-btn--${this.btnType}`;
  }

  @HostBinding('attr.aria-label') get bindAriaLabel(): string {
    return this.ariaLabel ? this.ariaLabel : `${this.btnType} button`;
  }
}
