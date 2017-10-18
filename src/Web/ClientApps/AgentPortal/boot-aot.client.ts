import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AgentPortalModule } from './src/agent-portal.client.module';
import { environment } from './environments/environment';


if (environment.production) {
    enableProdMode();
}

//platformBrowserDynamic().bootstrapModuleFactory(AgentPortalModuleFactory);