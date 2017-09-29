﻿CREATE TABLE [dbo].[DirectLineMessage]
(
	[Id] BIGINT NOT NULL PRIMARY KEY CLUSTERED IDENTITY,
	[ConversationId] VARCHAR(30) NOT NULL,
	[Sender] VARCHAR(20) NOT NULL,
	[MessageType] VARCHAR(20) NOT NULL,
	[Text] VARCHAR(300) NOT NULL,
	[TimeSent] DATETIME2 NOT NULL,
	[TimeStamp] ROWVERSION
    
)