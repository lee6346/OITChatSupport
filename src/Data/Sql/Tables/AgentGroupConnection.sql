﻿CREATE TABLE [dbo].[AgentGroupConnection]
(
	[Id] BIGINT NOT NULL PRIMARY KEY CLUSTERED IDENTITY,
	[UtsaId] VARCHAR(20) NOT NULL,
	[Department] VARCHAR(20) NOT NULL,
	[TimeConnected] DATETIME2 NOT NULL,
	[TimeDisconnected] DATETIME2 NULL,
	[TimeStamp] ROWVERSION
    
)