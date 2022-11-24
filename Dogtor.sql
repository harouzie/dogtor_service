CREATE DATABASE Dogtor
GO
USE Dogtor
GO

/*
Considerations
Is the doctor free? 
	Might not need since PatID == 0 == Free
	But there's also another thing that one doctor can work for multiple patients, 
	like having multiple appointments at once in a work day
*/

CREATE TABLE Doctors(
	DocID int IDENTITY(000001,1) primary key,
	PassDoc nvarchar(128) NOT NULL,
	--PatID int IDENTITY(100001,1),
	DocName nvarchar(64),
	EmailDoc nvarchar(64),
	DoB date,
	gender_id tinyint,
	Field nvarchar(64)
)

CREATE TABLE Patient(
	PatID int IDENTITY(200001,1) primary key,
	PassPat nvarchar(128) NOT NULL,
	--PatID int IDENTITY(100001,1),
	PatName nvarchar(64),
	EmailPat nvarchar(64),
	DoB date,
	gender_id tinyint,
)

CREATE TABLE Appointment(
	Appointment_ID int IDENTITY(1,1) primary key,
	DocID int references Doctors(DocID),
	PatID int references Patient(PatID) NOT NULL,
	AppointmentTime date,
	Aliments nvarchar(1024) NOT NULL
)


insert into Doctors values('cook meth','Walter White','walterwhite@gmail.com','1974/05/12',1,'Dermatology')
insert into Doctors values('ayo mister white','Jessie Pinkman','jessiepink@gmail.com','1989/09/02',1,'Psychology')

insert into Patient values('hektor','Gus Fring','gusfring@gmail.com','07/02/1956',1)


INSERT INTO Appointment(DocID,PatID,AppointmentTime,Aliments)
VALUES(000001,200001,'2022/11/22','Pneumonia');




                         