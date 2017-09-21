import { NgModule, InjectionToken } from '@angular/core';
import { Activity } from 'botframework-directlinejs';

export let APP_CONFIG = new InjectionToken<ApiConfig>('chatbot.config');
export let ERR_CONFIG = new InjectionToken<ErrorConfig>('error.config');
export let CHAT_MSG_CONFIG = new InjectionToken<ChatMsgConfig>('chatmessage.config');


export class ChatMsgConfig {
    waiting: Activity;
    unavailable: Activity;
    available: Activity;
    closeConnection: Activity;
}

export const CHAT_MESSAGE_CONFIG: ChatMsgConfig = {
    waiting: { from: { id: 'Default' }, type: 'message', text: 'Waiting for live agent, please hold' },
    unavailable: { from: { id: 'Default' }, type: 'message', text: 'There are no agents available at this time ' },
    available: { from: { id: 'Default' }, type: 'message', text: 'You are now disconnecting with the bot, An agent will be with you shortly' },
    closeConnection: { from: { id: 'Default' }, type: 'message', text: 'The agent has closed the connection' }
};

export class ApiConfig {
    oitEndpoint: string;
    oitTokenUri: string;
    oitLiveTransferUri: string;
    oitCancelTransferUri: string;
    oitMessageUri: string;
    directLineEndpoint: string;
    directLineSendActivityUri: string;
    
}
export const API_CONFIG: ApiConfig = {
    oitEndpoint: 'http://localhost:5000/api',
    oitTokenUri: '/DirectLine/GetToken',
    oitLiveTransferUri: '/AgentTransfer/MakeRequest',
    oitCancelTransferUri: '/AgentTransfer/CancelRequest',
    oitMessageUri: '/ChatMessage/Store',
    directLineEndpoint: '',
    directLineSendActivityUri: ''
};

export class ErrorConfig {
    oitErrorUri: string;
}



export const ERROR_CONFIG: ErrorConfig = {
    oitErrorUri: 'http://localhost:5000/api/Home/Error'
    
};

@NgModule({
    providers: [
        {
            provide: APP_CONFIG,
            useValue: API_CONFIG
        },
        {
            provide: ERR_CONFIG,
            useValue: ERROR_CONFIG
        },
        {
            provide: CHAT_MSG_CONFIG,
            useValue: CHAT_MESSAGE_CONFIG
        }

    ]
})
export class ChatbotConfigModule { }