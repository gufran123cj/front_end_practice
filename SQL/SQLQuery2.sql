use SQLFULL
GO
create table number
(
PersonelIds int,
Names nvarchar(40),
Surnames nvarchar(40),
Emails nvarchar(60)
)

Alter table number 
Drop column Surnames
