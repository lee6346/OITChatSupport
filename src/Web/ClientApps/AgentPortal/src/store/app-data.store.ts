import {
    Agent,
    AgentMessage,
    DirectLineConnection,
    LiveRequest
} from '../shared/model';

export interface AppDataStore {
    agents: { [key: number]: Agent };
    agentMessages: { [key: number]: AgentMessage };
    directLineThreads: { [key: number]: DirectLineConnection };
    liveRequests: { [key: number]: LiveRequest };
}

export const initialAppDataStore: AppDataStore = {
    agents: {},
    agentMessages: {},
    directLineThreads: {},
    liveRequests: {}
};

export interface UserInterfaceState {
    agentId: string;
    currentChatSessionId: string;

}

export const initialUIState: UserInterfaceState = {
    agentId: '',
    currentChatSessionId: ''
};

export interface ApplicationState {
    appDataStore: AppDataStore;
    userDataState: UserInterfaceState;
}

export const initialApplicationState: ApplicationState = {
    appDataStore: initialAppDataStore,
    userDataState: initialUIState
};


