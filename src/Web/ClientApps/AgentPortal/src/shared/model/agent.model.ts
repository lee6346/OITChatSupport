export class Agent {
    agentId: string;
    botHandle: string;
    connected: boolean;
    timeStamp?: string;

   
    constructor() { }

    connect(): void {
        this.connected = true;
        this.timeStamp = undefined;
    }

    disconnect(): void {
        this.connected = false;
        this.timeStamp = Date.now().toLocaleString();
    }
    
}