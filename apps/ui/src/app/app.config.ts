import {
  ApplicationConfig,
  inject,
  Injectable,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';
import { provideNgtRenderer } from 'angular-three/dom';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  Title,
  withEventReplay,
} from '@angular/platform-browser';

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
    provideClientHydration(withEventReplay()),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
};
