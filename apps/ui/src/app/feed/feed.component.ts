import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../environments/environment';

interface FeedItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  // Using httpResource so template can react to loading/value/error states
  private feedUrl = environment.rssfeed;

  feed = httpResource<FeedItem[]>(
    () => ({ url: this.feedUrl, method: 'GET', responseType: 'text' }),
    {
      parse: (value: unknown) => {
        try {
          const xmlString = value as string | null;
          if (!xmlString) return [];
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

          if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
            throw new Error('Failed to parse XML');
          }

          const items = xmlDoc.getElementsByTagName('item');
          const parsed: FeedItem[] = [];

          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const title =
              item.getElementsByTagName('title')[0]?.textContent || '';
            const description =
              item.getElementsByTagName('description')[0]?.textContent || '';
            const link =
              item.getElementsByTagName('link')[0]?.textContent || '';
            const pubDate =
              item.getElementsByTagName('pubDate')[0]?.textContent || '';

            parsed.push({
              title: FeedComponent.stripHtml(title),
              description: FeedComponent.stripHtml(description),
              link,
              pubDate,
            });
          }

          return parsed;
        } catch (e) {
          console.error('Error parsing feed in resource parse:', e);
          return [];
        }
      },
    },
  );

  ngOnInit(): void {
    this.feed.reload();
  }

  private static stripHtml(html: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  openLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
