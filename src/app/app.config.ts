import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //habilitando a biblioteca @angular/router
    provideRouter(routes),
    //habilitando a biblioteca @angular/common/http
    provideHttpClient()
  ]
};
