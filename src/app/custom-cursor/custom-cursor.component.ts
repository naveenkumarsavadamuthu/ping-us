import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.css']
})
export class CustomCursorComponent {
  cursorStyle = {};

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorStyle = {
      top: event.clientY + 'px',
      left: event.clientX + 'px'
    };
  }
}
