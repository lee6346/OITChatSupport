CREATE TABLE [dbo].[DirectLineMessage] (
    [Id]          INT             IDENTITY (1, 1) NOT NULL,
    [ConversationId]    NVARCHAR (30)  NOT NULL,
    [Sender]			NVARCHAR (30) NOT NULL,
    [TimeSent] DATETIME2(7)   NOT NULL,
	[Text] NVARCHAR (200) NOT NULL,
	[RowVersion]	ROWVERSION	NOT NULL,
	CONSTRAINT [FK_DirectLineMessage_DirectLineThread] FOREIGN KEY ([ConversationId])
		REFERENCES [dbo].[DirectLineThread] ([ConversationId])
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT [FK_DirectLineMessage_Agent] FOREIGN KEY ([Sender])
		REFERENCES [dbo].[Agent] ([UtsaId])
		ON DELETE CASCADE
		ON UPDATE CASCADE,
    CONSTRAINT [PK_DirectLineThread] PRIMARY KEY CLUSTERED ([Id] ASC)
);
