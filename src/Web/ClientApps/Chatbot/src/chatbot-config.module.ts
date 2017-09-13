import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<ApiConfig>('chatbot.config');
export let ERR_CONFIG = new InjectionToken<ErrorMessageConfig>('error.message.config');

export class ApiConfig {
    oitEndpoint: string;
    oitTokenUri: string;
    oitErrorUri: string;
    oitLiveTransferUri: string;
    oitMessageUri: string;
    directLineEndpoint: string;
    directLineSendActivityUri: string;
    
}

export class ErrorMessageConfig {

}

export const API_CONFIG: ApiConfig = {
    oitEndpoint: 'http://localhost:5000/api',
    oitTokenUri: '/',
    oitErrorUri: '/',
    oitLiveTransferUri: '/',
    oitMessageUri: '/',
    directLineEndpoint: '',
    directLineSendActivityUri: ''
};

export const ERR_MSG_CONFIG: ErrorMessageConfig = {

};

@NgModule({
    providers: [
        {
            provide: APP_CONFIG,
            useValue: API_CONFIG
        },
        {
            provide: ERR_CONFIG,
            useValue: ERR_MSG_CONFIG
        }

    ]
})
export class ChatbotConfigModule { }