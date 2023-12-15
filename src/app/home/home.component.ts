import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcome_message = 'welcome';
  flag = false;

  clickMe() {
    this.welcome_message = 'welcome world!';
  }

  clickMeAgain() {
    of({ message: 'hello world' }).subscribe({
      next: (res) => {
        this.welcome_message = res.message;
      },
      error: () => {
        this.welcome_message = 'Error loading.';
      },
    });
  }
}
