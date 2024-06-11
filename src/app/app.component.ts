import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    MatMenuModule,
    MatListModule,
    RouterLinkActive,
    NgClass,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-playwright-code-coverage';
  darkMode = false;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<{
        numFound: number;
      }>('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .subscribe((res) => {
        console.log(`Found 'lord of the rings' book: ${res.numFound}`);
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // @ts-expect-error google not defined
      google.accounts.id.initialize({
        client_id: environment.Client_ID,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-expect-error google not defined
      google.accounts.id.renderButton(
        // @ts-expect-error google not defined
        document.getElementById('google-button'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
      // @ts-expect-error google not defined
      google.accounts.id.prompt((notification: PromptMomentNotification) => {
        notification.toString();
      });
    }, 0);
  }

  // @ts-expect-error google not defined
  async handleCredentialResponse(response) {
    // Here will be your response from Google.
    console.log(response);
  }
}
