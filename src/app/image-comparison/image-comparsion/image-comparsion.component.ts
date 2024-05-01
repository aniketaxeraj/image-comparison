import { DOCUMENT } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-image-comparsion',
  standalone: true,
  imports: [],
  templateUrl: './image-comparsion.component.html',
  styleUrl: './image-comparsion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageComparsionComponent {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    if (
      typeof window == 'object' &&
      !window.customElements.get('img-comparison-slider')
    ) {
      this.loadScripts();
      this.loadStylesheets();
    }
  }

  private loadScripts() {
    const scriptUrl = 'assets/vendor/image-comparison/index.js';
    const script = this.renderer.createElement('script');
    script.src = scriptUrl;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }

  private loadStylesheets() {
    const stylesheetUrl = 'assets/vendor/image-comparison/style.css';
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheetUrl;
    this.renderer.appendChild(this.document.head, link);
  }
}
