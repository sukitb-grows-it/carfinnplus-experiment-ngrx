import { Component } from '@angular/core';
import { HtmlToImageService } from '../../core/service/html-to-image/html-to-image.service';

@Component({
  selector: 'app-demo-create-image-from-html',
  templateUrl: './demo-create-image-from-html.component.html',
  styleUrl: './demo-create-image-from-html.component.scss'
})
export class DemoCreateImageFromHtmlComponent {

  constructor(private htmlToImage: HtmlToImageService) { }

  downloadImage(): void {
    const html = document.getElementById('test');
    if (!html) {
      return;
    }
    this.htmlToImage.createImageFromHtml(html).then(
      (dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
      }
    )
  }

}
