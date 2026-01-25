import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  template: ` <youtube-player videoId="mVjYG9TSN88" /> `,
  imports: [YouTubePlayerModule],
})
export class VideoComponent {}
