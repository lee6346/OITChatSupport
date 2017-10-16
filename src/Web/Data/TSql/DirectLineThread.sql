CREATE TABLE [dbo].[DirectLineThread] (
    [Id]          INT             IDENTITY (1, 1) NOT NULL,
    [ConversationId]    NVARCHAR (30)  NOT NULL,
	[BotHandle] NVARCHAR (30) NOT NULL,
    [TimeConnected]			DATETIME2 (7) NOT NULL,
	[RowVersion]	ROWVERSION	NOT NULL,
	CONSTRAINT [AK_DirectLineThread] UNIQUE (ConversationId),
    CONSTRAINT [PK_DirectLineThread] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_DirectLineThread_ChatBot] FOREIGN KEY ([BotHandle])
		REFERENCES [dbo].[ChatBot] ([BotHandle])
		ON DELETE CASCADE
		ON UPDATE CASCADE,
);
