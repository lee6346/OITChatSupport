CREATE TABLE [dbo].[ChatBot] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [BotId]     NVARCHAR (50) NOT NULL,
	[UtsaDepartment] NVARCHAR (30) NOT NULL,
    [BotHandle]  NVARCHAR (30) NOT NULL,
    [Connected]  BIT           NOT NULL DEFAULT(1),
    [RowVersion] ROWVERSION    NOT NULL,
	CONSTRAINT [PK_ChatBot] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [AK_ChatBot] UNIQUE NONCLUSTERED ([BotHandle]),
	CONSTRAINT [FK_ChatBot_Department] FOREIGN KEY ([UtsaDepartment])
		REFERENCES [dbo].[Department] ([DepartmentId])
		ON DELETE CASCADE
		ON UPDATE CASCADE
);