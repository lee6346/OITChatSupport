CREATE TABLE [dbo].[Agent] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [UtsaId]     NVARCHAR (30) NOT NULL,
	[UtsaDepartment] NVARCHAR (30) NOT NULL,
    [Connected]  BIT           NOT NULL DEFAULT(0),
    [RowVersion] ROWVERSION    NOT NULL,
	CONSTRAINT [PK_Agent] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [AK_Agent] UNIQUE NONCLUSTERED ([UtsaId]),
	CONSTRAINT [FK_Agent_Department] FOREIGN KEY ([UtsaDepartment])
		REFERENCES [dbo].[Department] ([DepartmentId])
		ON DELETE CASCADE
		ON UPDATE CASCADE
);