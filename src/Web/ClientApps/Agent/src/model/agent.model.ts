export class Agent{
    public agentId: string;
    public connected: boolean;
    public connectionId: string;

    constructor() { }

    sameAgent(agent: Agent): boolean {
        return this.agentId === agent.agentId;
    }

}
