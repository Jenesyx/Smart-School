Hello and Welcome to Better Edupage!

To run the project do this!

Clone the project
Run this commands
yarn add react
npm install express
npm install cors
npm install jsonwebtoken bcryptjs

After Installing everything run this command
yarn start

Run this command in Backend directory(in other terminal!)
node ./server.js


Now you can access to 
http://localhost:4000/api/~SOMETHING~ and http://localhost:3000/

What is this Project?

Ziel des Projekts war es, eine bessere Edupage zu schaffen. Die Website besteht aus einem Login, über das Benutzer ihren Arbeitsbereich durch Eingabe von Benutzernamen und Passwort betreten können. Wenn Admin erkannt wird, gelangt der Benutzer auf die Admin-Seite und kann alles steuern und überprüfen. Wenn aber ein normaler Benutzer, ein Student, die Seite betritt, kann er nur seine Ein- und Ausstiegszeit für verschiedene Tage sehen. 

Frameworks

Das React-Framework wird zum Aufbau von Abhängigkeiten(Front-end) verwendet. Zum Erstellen der API und Back-end wurde das Express-Framework verwendet. Zum Speichern von Informationen also Datenbank wird xampp oder phpmyadmin verwendet, da es sehr einfach zu handhaben ist und alles lokal liegt.


Front-end

Wie bereits erwähnt, wird zum Erstellen des Front-ends React verwendet, das sehr einfach und benutzerfreundlich ist. Das Frontend besteht aus verschiedenen Teilen und weist viele Details auf. Das Frontend selbst und die Anwendungen, über die React verfügt, werden zum Erstellen eines Logins verwendet, um festzustellen, ob Benutzername und Passwort korrekt oder falsch sind. Wenn die Person korrekt ist, wird sie auf die gewünschte Seite weitergeleitet. Wenn sie falsch ist, Es wird ein Fehler angezeigt. Selbst eine Person kann die Homepage nicht durch Eingabe der URL betreten, und die Website funktioniert sicherheitstechnisch einwandfrei. Die Axios-Bibliothek wird verwendet, um das Front-end mit dem Back-end zu verbinden, was sehr nützlich und beliebt ist.


Back-end

Im Backend gibt es nichts Kompliziertes, es besteht eine Verbindung zwischen dem Backend selbst und der Datenbank. Mithilfe der SQL-Syntax in Express werden unterschiedliche Pfade verwendet, um unterschiedliche Informationen abzurufen. 
Wie z.B.: countRouter, loginRouter(nur für admin) und noch eine nur für Schüler. Der einzige möglicherweise zu komplizierte Aspekt ist der Verschlüsselungsteil im Backend, zu dem nicht jeder Zugang hat. Dieser wird mit Hilfe der Bibliothek bcryptjs abgewickelt und durch jsonwebtoken ergänzt, welches ein Token im JSON-Format für das Web generiert. Mit diesem Token können wir auf die Informationen der gewünschten Seite zugreifen.