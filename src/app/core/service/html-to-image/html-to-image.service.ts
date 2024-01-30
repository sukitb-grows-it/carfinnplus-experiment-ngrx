import { Injectable } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


@Injectable({
  providedIn: 'root'
})
export class HtmlToImageService {

  constructor() { }

  async createImageFromHtml(html: HTMLElement): Promise<string> {
    return await htmlToImage.toJpeg(html);
  }
}
