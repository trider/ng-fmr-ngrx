import { ApplicationConfig, provideZoneChangeDetection, NgModule } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { usersReducer } from './state/users.reducer';
import { userReducer } from './state/user/user.reducer';
import { StoreModule } from '@ngrx/store';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'users', reducer: usersReducer }),
    provideState({ name: 'user', reducer: userReducer })
  ],
};
