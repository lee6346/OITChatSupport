CREATE TABLE [dbo].[Department] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [DepartmentId]     NVARCHAR (30) NOT NULL,
	[DepartmentName] NVARCHAR (30) NOT NULL,
    [RowVersion] ROWVERSION    NOT NULL,
	CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [AK_Department] UNIQUE NONCLUSTERED ([DepartmentId])
);