import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

type Card = {
  title: string;
  description: string;
  content: string;
  number: number;
};

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    MatCardModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  typeOfSeasons: string[] = ['Spring', 'Summer', 'Fall', 'Winter'];

  cards: Card[] = [
    {
      title: 'Simple card',
      description: '',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      number: 1,
    },
    {
      title: 'Another simple card',
      description: '',
      content: '',
      number: 2,
    },
    {
      title: 'Complicated card',
      description: '',
      content: '',
      number: 0,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
    {
      title: 'Another Complicated card',
      description: '',
      content: '',
      number: 40,
    },
  ];
}
