import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  Injectable,
  provideZonelessChangeDetection,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';
import { provideNgtRenderer } from 'angular-three/dom';

import { appRoutes } from './app.routes';

@Injectable({ providedIn: 'root' })
class TemplatePageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  constructor() {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`${title ? title : 'NX Workspace'}`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideNgtRenderer(),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
};
