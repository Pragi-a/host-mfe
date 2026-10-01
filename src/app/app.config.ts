import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import type { NativeFederationResult } from '@softarc/native-federation-orchestrator';

import { routes } from './app.routes';

export const NATIVE_FEDERATION = new InjectionToken<NativeFederationResult>('native federation');

export const appConfig = (nativeFederation: NativeFederationResult): ApplicationConfig => ({
  providers: [
    { provide: NATIVE_FEDERATION, useValue: nativeFederation },
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes(nativeFederation))
  ]
});
