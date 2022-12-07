USE [master]

IF db_id('YourPlace') IS NULL
	CREATE DATABASE [YourPlace]
GO

USE [YourPlace]
GO

DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [Friends];
DROP TABLE IF EXISTS [Bulletins];
DROP TABLE IF EXISTS [Status];
DROP TABLE IF EXISTS [BulletinComments];
DROP TABLE IF EXISTS [StatusComments];
DROP TABLE IF EXISTS [Top8Friends];
DROP TABLE IF EXISTS [Ranking];
DROP TABLE IF EXISTS [Messages];
DROP TABLE IF EXISTS [userProfilePage];


CREATE TABLE [User] (
  [Id] integer PRIMARY KEY IDENTITY,
  [firstName] nvarchar(255),
  [lastName] nvarchar(255),
  [photoUrl] nvarchar(255),
  [email] nvarchar(255)
)
GO

CREATE TABLE [Friends] (
  [Id] integer PRIMARY KEY IDENTITY,
  [userProfileIdSender] int,
  [userProfileIdReceive] int
)
GO

CREATE TABLE [Bulletins] (
  [Id] integer PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [subject] nvarchar(255),
  [content] nvarchar(255)
)
GO

CREATE TABLE [Status] (
  [Id] integer PRIMARY KEY IDENTITY,
  [userProfileId] int,
  [content] nvarchar(255)
)
GO

CREATE TABLE [BulletinComments] (
  [Id] integer PRIMARY KEY IDENTITY,
  [postId] int,
  [userProfileId] int,
  [content] nvarchar(255)
)
GO

CREATE TABLE [StatusComments] (
  [Id] integer PRIMARY KEY IDENTITY,
  [statusId] int,
  [userProfileId] int,
  [content] nvarchar(255)
)
GO

CREATE TABLE [Top8Friends] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FriendId] int,
  [RankingId] int,
  [userId] int
)
GO

CREATE TABLE [Ranking] (
  [Id] integer PRIMARY KEY IDENTITY,
  [rank] int
)
GO

CREATE TABLE [Messages] (
  [Id] integer PRIMARY KEY IDENTITY,
  [userId] int,
  [friendId] int,
  [Subject] nvarchar(255),
  [content] nvarchar(255)
)
GO



ALTER TABLE [Bulletins] ADD FOREIGN KEY ([userProfileId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Status] ADD FOREIGN KEY ([userProfileId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Friends] ADD FOREIGN KEY ([userProfileIdReceive]) REFERENCES [User] ([Id])
GO

ALTER TABLE [BulletinComments] ADD FOREIGN KEY ([postId]) REFERENCES [Bulletins] ([Id])
GO

ALTER TABLE [BulletinComments] ADD FOREIGN KEY ([userProfileId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Friends] ADD FOREIGN KEY ([userProfileIdSender]) REFERENCES [User] ([Id])
GO

ALTER TABLE [StatusComments] ADD FOREIGN KEY ([userProfileId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [StatusComments] ADD FOREIGN KEY ([statusId]) REFERENCES [Status] ([Id])
GO

ALTER TABLE [Top8Friends] ADD FOREIGN KEY ([RankingId]) REFERENCES [Ranking] ([Id])
GO

ALTER TABLE [Top8Friends] ADD FOREIGN KEY ([FriendId]) REFERENCES [Friends] ([Id])
GO

ALTER TABLE [Messages] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Messages] ADD FOREIGN KEY ([friendId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Top8Friends] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([Id])