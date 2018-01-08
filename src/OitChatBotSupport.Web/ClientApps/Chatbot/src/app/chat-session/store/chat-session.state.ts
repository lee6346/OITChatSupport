import { Message } from 'botframework-directlinejs';


export type AgentStatus = 'none' | 'waiting' | 'connected' | 'disconnected';

export interface ChatSessionState {
    agentStatus: AgentStatus;
    threadId: string | undefined;
    messages: Message[]
}