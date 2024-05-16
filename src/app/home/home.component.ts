import { Component } from '@angular/core';
import { CustomCursorComponent } from '../custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageOpenIndex: number | null = 0; // Default to index 0 for initial display
  showOverlay = false;

  showFullImage() {
    this.showOverlay = true;
  }

  hideFullImage() {
    this.showOverlay = false;
  }
  toggleImage(index: number): void {
    if (this.imageOpenIndex === index) {
      this.imageOpenIndex = null; // Close the image if it's already open
    } else {
      this.imageOpenIndex = index; // Open the clicked image
    }
  }

  isActive(index: number): boolean {
    return this.imageOpenIndex === index;
  }
}
