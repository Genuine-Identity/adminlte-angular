import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './app/core/environment';

if (environment.production) {
  console.log('a');
  enableProdMode();
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    console.log('ab');
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
