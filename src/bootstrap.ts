import { bootstrapApplication } from '@angular/platform-browser';
import type { NativeFederationResult } from '@softarc/native-federation-orchestrator';
import { appConfig } from './app/app.config';
import { App } from './app/app';

export const bootstrap = (nativeFederation: NativeFederationResult) =>
  bootstrapApplication(App, appConfig(nativeFederation)).catch((err) => console.error(err));
