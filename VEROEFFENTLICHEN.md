# Fächerquiz veröffentlichen und einbetten

## 1. Gemeinsame Datenbank einrichten

1. Erstelle ein Supabase-Projekt und öffne dort den **SQL Editor**.
2. Führe den gesamten Inhalt von `supabase-setup.sql` aus.
3. Öffne **Project Settings → API** und kopiere die Project URL und den **anon/publishable key** in `supabase-config.js`:

   ```js
   window.FAECHERQUIZ_SUPABASE_CONFIG = {
     url: 'https://DEIN-PROJEKT.supabase.co',
     anonKey: 'DEIN-PUBLISHABLE-KEY'
   };
   ```

   Der publishable/anon key ist für die Verwendung im Browser gedacht. **Niemals** den `service_role`- oder einen geheimen Schlüssel in diese Datei eintragen.

4. In Supabase unter **Authentication → Providers → Email** die E-Mail-Bestätigung ausschalten. Die Quiz-Konten verwenden absichtlich keine E-Mail-Adresse; Supabase erhält eine technische Adresse aus dem Spielernamen. Deshalb gibt es keine E-Mail zum Zurücksetzen des Passworts. Lehrkräfte können vergessene Konten über die Supabase-Verwaltung zurücksetzen.
5. Lade `index.html`, `script.js`, `style.css`, `supabase-config.js` und `supabase-setup.sql` auf einen statischen Webhost (z. B. GitHub Pages, Netlify oder einen Schulserver). Die Seite benötigt HTTPS, damit Anmeldung und Einbettung zuverlässig funktionieren.

## 2. Lehrkraft-Zugang vergeben

Ein Schüler kann sich nicht selbst zur Lehrkraft machen. Eine Projekt-Administratorin oder ein Projekt-Administrator vergibt das Recht im Supabase SQL Editor, nachdem die Lehrkraft einmal ein Konto angelegt hat:

```sql
update public.profiles
set role = 'teacher'
where lower(username) = lower('LEHRKRAFT-SPIELERNAME');
```

Lehrkräfte melden sich über dasselbe Formular an. Sie sehen danach den Bereich mit den gespeicherten Quiz-Ergebnissen. Schülerkonten sehen diesen Bereich nicht. Die Rangliste zeigt pro Spieler die Summe der jeweils besten Olympiade-Punkte je Fach; Trainingsrunden zählen nicht zur Rangliste.

## 3. In eine andere Webseite einbetten

Ersetze `https://DEINE-QUIZ-ADRESSE.example` durch die veröffentlichte Adresse:

```html
<iframe
  src="https://DEINE-QUIZ-ADRESSE.example"
  title="Fächerquiz Arena"
  width="100%"
  height="900"
  loading="lazy"
  style="border: 0; border-radius: 12px"
  allow="clipboard-read; clipboard-write"
></iframe>
```

Die Ziel-Webseite muss iFrames erlauben. Wenn sie fremde iFrames blockiert, kann sie die Quiz-Seite stattdessen direkt verlinken.

## Datenschutz und Grenzen

Vor der Nutzung mit Schülern müssen Schule bzw. verantwortliche Lehrkräfte prüfen und freigeben, ob Supabase als Anbieter eingesetzt werden darf und welche Datenschutz-/Einwilligungsregeln gelten. Das Quiz speichert Spielernamen, erreichte Punkte, Fächer, Quiz-Art und Zeitstempel in der gewählten Supabase-Region. Nutzt keine Klarnamen, wenn eure Schule das nicht ausdrücklich freigegeben hat.

Die bisherigen lokalen Browser-Konten werden nicht übernommen; die Schülerinnen und Schüler legen neue Konten an. Die Rangliste ist für einen spielerischen Wettbewerb gedacht. Der Browser übermittelt das Ergebnis eines abgeschlossenen Quiz; ohne serverseitige Auswertung der Antworten kann ein technisch versierter Nutzer Punkte manipulieren. Für benotete Prüfungen ist die Rangliste nicht geeignet. Der Wettbewerb vor Ort wird nur auf dem Gerät ausgewertet und nicht in die gemeinsame Rangliste übernommen.
