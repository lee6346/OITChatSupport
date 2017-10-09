import {
    Agent,
    AgentMessage,
    DirectLineConnection,
    LiveRequest
} from './';


export interface AppDataModel {
    agents: Agent[];
    agentMessages: AgentMessage[];
    directLineConnections: DirectLineConnection[];
    liveRequests: LiveRequest[];
}