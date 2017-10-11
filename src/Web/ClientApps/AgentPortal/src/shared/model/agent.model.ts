export class Agent {

    public agentId: string;
    public botHandle: string;
    public connected: boolean;
    public timeStamp?: string;
   
    constructor() { }

    sameAs(agent: Agent) {
        return this.agentId === agent.agentId;
    }
}