import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComparsionComponent } from './image-comparison/image-comparsion/image-comparsion.component';
import { CarouselComponent } from './custom-ui/carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImageComparsionComponent,
    CarouselComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'image-compare';
}
