import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChatBotPortalModule } from './src/chat-bot-portal.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(ChatBotPortalModule);