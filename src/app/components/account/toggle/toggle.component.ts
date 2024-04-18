import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Output() toggleChange = new EventEmitter<boolean>();

  toggle(isLogin: boolean) {
    this.toggleChange.emit(isLogin);
  }
}
