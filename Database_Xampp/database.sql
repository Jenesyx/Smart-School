DROP DATABASE if EXISTS Anwesenheit;
Create DATABASE Anwesenheit;
Use Anwesenheit;

Create TABLE Lehrer(
    Lehrer_ID int AUTO_INCREMENT Primary key,
    Username varchar(30) not null,
    Password varchar(50) not null
);

Create TABLE Schueler(
    Schueler_ID int AUTO_INCREMENT Primary key,
    Vorname varchar(20) not null,
    Nachname varchar(20) not null,
    Klasse varchar(5) not null,
    Password varchar(30) not null,
    Anwesend int not null
);

CREATE TABLE Anwesenheit(
    Anwesenheit_ID int AUTO_INCREMENT Primary key,
    Ankunftszeit Timestamp,
    Gangzeit Datetime,
    Schueler_ID int,
    FOREIGN KEY (Schueler_ID) REFERENCES Schueler(Schueler_ID)
);