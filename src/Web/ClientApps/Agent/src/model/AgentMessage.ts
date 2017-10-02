/**
 * Message object to send to other agents in his/her group
 */
export class AgentMessage {
    public agentId: string;
    public text: string;
    public groupName: string;
}