import { Routes } from '@angular/router';
import { Type } from '@angular/core';
import type { NativeFederationResult } from '@softarc/native-federation-orchestrator';

import { HomeComponent } from './home.component';
import { RemotePlaceholderComponent } from './remote-placeholder.component';

export const routes = ({ loadRemoteModule }: NativeFederationResult): Routes => [
  { path: '', component: HomeComponent, title: 'Pragi.dev · Portfolio Labs' },
  {
    path: 'security',
    loadComponent: () =>
      loadRemoteModule<{ App: Type<unknown> }>('security-mfe', './Component').then((module) => module.App),
    title: 'Security Lab · Pragi.dev'
  },
  {
    path: 'observability', component: RemotePlaceholderComponent,
    data: { lab: 'Observability Lab', description: 'Traces, metrics, and distributed-system diagnostics.' },
    title: 'Observability Lab · Pragi.dev'
  },
  {
    path: 'ai', component: RemotePlaceholderComponent,
    data: { lab: 'AI Labs', description: 'RAG and agent experiences, composed as independent applications.' },
    title: 'AI Labs · Pragi.dev'
  },
  { path: '**', redirectTo: '' }
];
