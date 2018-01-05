export interface Agent {
    agentId: string;
    botHandle: string;
    connected: boolean;
    timeDisconnected?: string;
}