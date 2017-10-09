export interface Agent {
    agentId: string;
    agentName: string;
    connected: boolean;
    timeStamp?: string;

    /*
        constructor() { }

    sameAgent(agent: Agent): boolean {
        return this.agentId === agent.agentId;
    }
    */
}