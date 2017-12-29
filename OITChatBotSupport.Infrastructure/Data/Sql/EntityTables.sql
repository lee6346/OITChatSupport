CREATE TABLE [dbo].[Agent] (
    [Id]         INT(30)   IDENTITY (1, 1) NOT NULL,
	[UtsaId]	 NVARCHAR(30) NOT NULL,
    [Connected]  BIT           DEFAULT ((0)) NOT NULL,
	[RowVersion] ROWVERSION     NULL,
    CONSTRAINT [PK_Agent] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [AK_Agent_UtsaId] UNIQUE NONCLUSTERED ([UtsaId])
);
GO;
CREATE TABLE [dbo].[DirectLineMessage] (
    [Id]             INT            IDENTITY (1, 1) NOT NULL,
    [ConversationId] NVARCHAR (30)  NOT NULL,
    [Sender]         NVARCHAR (30)  NOT NULL,
    [Text]           NVARCHAR (200) NOT NULL,
    [Timestamp]      DATETIME2 (7)  NOT NULL,
    CONSTRAINT [PK_DirectLineMessage] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO;
CREATE TABLE [dbo].[DirectLineThread] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [ConversationId] NVARCHAR (30) NOT NULL,
    [Created]    DATETIME2 (7) NOT NULL,
    CONSTRAINT [PK_DirectLineThread] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [AK_DirectLineThread_ConversationId] UNIQUE NONCLUSTERED ([ConversationId])
);
GO;
CREATE TABLE [dbo].[AgentTransfer] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [ConversationId] NVARCHAR (30) NOT NULL,
    [Requested]    DATETIME2 (7) NOT NULL,
	[BotHandle] NVARCHAR (30) NOT NULL,
	[LastMessage] NVARCHAR(MAX) NOT NULL,
	[TransferStatus] NVARCHAR(30) NOT NULL,
	[AssistingAgent] NVARCHAR(30) NULL,
	[RowVersion] ROWVERSION NULL,
    CONSTRAINT [PK_AgentTransfer] PRIMARY KEY CLUSTERED ([Id] ASC),
);