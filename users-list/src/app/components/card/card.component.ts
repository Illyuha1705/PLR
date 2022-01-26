import { Component, Input, Output } from '@angular/core';
import { UserInterface }                          from '../../interfaces/user.interface';
import { Subject }                                from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() closeButtonWasClicked$: Subject<void> = new Subject<void>();
  @Input() user: UserInterface | undefined;

  closeCard(): void {
    this.closeButtonWasClicked$.next();
  }
}
