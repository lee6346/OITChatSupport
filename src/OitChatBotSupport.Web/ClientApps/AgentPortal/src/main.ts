import './styles.css';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgentPortalModule } from './app/agent-portal.module';
import { environment } from './environment/environment';

if (environment.production) {
    enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AgentPortalModule);