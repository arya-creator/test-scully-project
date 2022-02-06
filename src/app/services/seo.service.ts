import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  siteName = 'Decentral School';

  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title?: string) {
    let titleString = this.siteName;
    if (title) {
      titleString = this.siteName + ' : ' + title;
    }
    this.title.setTitle(titleString);
  }

  updateDescription(desc: string) {
 this.meta.updateTag({ name: 'Description', content: desc });
  }
  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'Keywords', content: keywords });
  }
}
