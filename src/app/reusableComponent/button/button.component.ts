import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() clickBtn = new EventEmitter<any>();

  onClick() {
    this.clickBtn.emit();
  }

}
