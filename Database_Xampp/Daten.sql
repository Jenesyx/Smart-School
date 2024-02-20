INSERT INTO Lehrer(Username, Password)
VALUES('netterdon', 'net123');

INSERT INTO Schueler(Vorname, Nachname, Klasse, Password)
VALUES('Marcel', 'Maty', 'AIT30','mmlo123'),('Ali', 'Bidkhori', 'AIT30','ali123'),('Niklas', 'Schmitz', 'AIT30','niki123'),
('Reza', 'Rahimi', 'AIT30','reza123'),('Ben', 'Kirscher', 'AIT30','ben123'),('Jan', 'Kun', 'AIT30','jan123');

INSERT INTO Anwesenheit(Ankunftszeit, Gangzeit, Schueler_ID)
VALUES('2023-11-27 9:00:10','2023-11-27 13:00:10',1), ('2023-11-27 8:00:10','2023-11-27 14:00:10',2)