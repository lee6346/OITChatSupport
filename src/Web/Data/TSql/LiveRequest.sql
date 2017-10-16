CREATE TABLE [dbo].[LiveRequest] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [ConversationId] NVARCHAR (15) NOT NULL,
    [BotHandle]      NVARCHAR (15) NOT NULL,
    [RequestTime]    DATETIME2 (7) NOT NULL,
    [AgentId]        NVARCHAR (15) NULL,
    [AcceptTime]     DATETIME2 (7) NULL,
    [RowVersion]     ROWVERSION    NOT NULL,
    CONSTRAINT [PK_LiveRequest] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_LiveRequest_DirectLineThread] FOREIGN KEY (ConversationId)
		REFERENCES [dbo].[DirectLineThread] ([ConversationId])
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT [FK_LiveRequest_UtsaId] FOREIGN KEY (AgentId)
		REFERENCES [Agent] ([UtsaId])
		ON DELETE CASCADE
		ON UPDATE CASCADE
);