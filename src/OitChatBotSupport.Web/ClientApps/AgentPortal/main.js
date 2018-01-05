import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgentPortalModule } from './src/agent-portal.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
var modulePromise = platformBrowserDynamic().bootstrapModule(AgentPortalModule);
//# sourceMappingURL=main.js.map