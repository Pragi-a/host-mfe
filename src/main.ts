import { initFederation } from '@softarc/native-federation-orchestrator';
import type { NativeFederationResult } from '@softarc/native-federation-orchestrator';
import {
  useShimImportMap,
  consoleLogger,
  globalThisStorageEntry,
} from '@softarc/native-federation-orchestrator/options';

initFederation('federation.manifest.json', {
  ...useShimImportMap({ shimMode: true }),
  logger: consoleLogger,
  storage: globalThisStorageEntry,
  hostRemoteEntry: './remoteEntry.json',
  logLevel: 'debug',
})
  .then((nativeFederation: NativeFederationResult) =>
    import('./bootstrap').then((module) => module.bootstrap(nativeFederation))
  )
  .catch(err => console.error(err));
