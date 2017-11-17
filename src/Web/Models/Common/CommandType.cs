namespace Web.Models.Common
{
    public enum CommandType
    {
        RequestAgentTransfer,
        AcceptAgentRequest,
        CancelAgentRequest,
        StartDirectLineConnection,
        JoinDirectLineConnection,
        SendChatMessage,
    }
}
