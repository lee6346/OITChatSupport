import 'rxjs/add/operator/first';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgentPortalModule } from './src/agent-portal.client.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AgentPortalModule);