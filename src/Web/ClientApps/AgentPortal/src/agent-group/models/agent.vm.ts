export interface AgentVm {
    agentId: string;
    agentName: string;
    connected: boolean;
    threads: number;
    timeStamp?: string;
}