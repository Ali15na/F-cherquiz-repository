console.log('FÄCHERQUIZ-ACCOUNTED-LOADED');

const subjects = [
  { name: 'Mathematik', icon: '📐' },
  { name: 'Chemie', icon: '🧪' },
  { name: 'Deutsch', icon: '📖' },
  { name: 'Biologie', icon: '🧬' },
  { name: 'Geschichte', icon: '🏛️' },
  { name: 'Englisch', icon: '🇬🇧' },
  { name: 'Physik', icon: '⚡' },
  { name: 'Geografie', icon: '🌍' }
];

const questionPools = {
  Mathematik: [
    { question: 'Wenn 3x + 7 = 19 ist, wie groß ist x?', answers: ['3', '4', '5', '6'], correct: '4' },
    { question: 'Welcher Wert ist 25 % von 320?', answers: ['70', '80', '90', '100'], correct: '80' },
    { question: 'Wie groß ist der Winkel in einem gleichseitigen Dreieck?', answers: ['60°', '90°', '45°', '30°'], correct: '60°' },
    { question: 'Was ist 12²?', answers: ['144', '132', '124', '154'], correct: '144' },
    { question: 'Welche Zahl ist durch 9 teilbar?', answers: ['47', '81', '52', '67'], correct: '81' },
    { question: 'Wie lautet die Lösung von 2(x - 3) = 10?', answers: ['x = 5', 'x = 6', 'x = 7', 'x = 8'], correct: 'x = 8' },
    { question: 'Welches ist eine Primzahl?', answers: ['21', '27', '29', '33'], correct: '29' },
    { question: 'Was ist die Fläche eines Rechtecks mit 8 cm und 5 cm?', answers: ['26 cm²', '40 cm²', '45 cm²', '13 cm²'], correct: '40 cm²' },
    { question: 'Wie viel ist 7 × 9 ÷ 3?', answers: ['19', '21', '23', '27'], correct: '21' },
    { question: 'Welche Zahl ist das Produkt aus 6 und 12?', answers: ['62', '72', '74', '84'], correct: '72' },
    { question: 'Was ist der Kehrwert von 4/5?', answers: ['5/4', '4/5', '1/5', '5/9'], correct: '5/4' },
    { question: 'Welche Zahl ist eine rationale Zahl?', answers: ['√2', 'π', '0,75', '√5'], correct: '0,75' },
    { question: 'Was ist 15 % von 240?', answers: ['24', '30', '36', '42'], correct: '36' },
    { question: 'Wie viel ist 3³?', answers: ['9', '12', '18', '27'], correct: '27' },
    { question: 'Welches Ergebnis liefert 18 - 3 × 4?', answers: ['6', '12', '18', '24'], correct: '6' }
  ],
  Chemie: [
    { question: 'Welches Element hat das Symbol Na?', answers: ['Natrium', 'Neon', 'Nickel', 'Nobelium'], correct: 'Natrium' },
    { question: 'Wie lautet die Formel von Kohlendioxid?', answers: ['CO', 'CO₂', 'C₂O', 'CH₄'], correct: 'CO₂' },
    { question: 'Welches Teilchen trägt eine positive Ladung?', answers: ['Elektron', 'Neutron', 'Proton', 'Atomkern'], correct: 'Proton' },
    { question: 'Welche Stoffklasse ist Salz?', answers: ['Säure', 'Base', 'Salz', 'Metall'], correct: 'Salz' },
    { question: 'Wie nennt man den Vorgang von Flüssigkeit zu Gas?', answers: ['Kondensation', 'Verdampfung', 'Gefrieren', 'Sublimation'], correct: 'Verdampfung' },
    { question: 'Wie lautet die Formel von Wasser?', answers: ['H₂O', 'HO₂', 'H₂O₂', 'OH₂'], correct: 'H₂O' },
    { question: 'Welche pH-Werte sind sauer?', answers: ['2 bis 4', '7 bis 9', '10 bis 12', '13 bis 14'], correct: '2 bis 4' },
    { question: 'Wie viele Atome hat ein Wasserstoffmolekül H₂?', answers: ['1', '2', '3', '4'], correct: '2' },
    { question: 'Welches Gas ist für Verbrennungen nötig?', answers: ['Kohlendioxid', 'Sauerstoff', 'Helium', 'Stickstoff'], correct: 'Sauerstoff' },
    { question: 'Welche Verbindung ist ionisch?', answers: ['NaCl', 'H₂O', 'CO₂', 'O₂'], correct: 'NaCl' },
    { question: 'Welche Teilchen bewegen sich in der Atomhülle?', answers: ['Neutronen', 'Elektronen', 'Protonen', 'Kerne'], correct: 'Elektronen' },
    { question: 'Welches Element hat die Ordnungszahl 8?', answers: ['Stickstoff', 'Sauerstoff', 'Kohlenstoff', 'Neon'], correct: 'Sauerstoff' },
    { question: 'Was entsteht bei der neutralen Reaktion von Säure und Base?', answers: ['Wasser und Salz', 'Metall und Gas', 'Kohle und Ozon', 'Luft und Wärme'], correct: 'Wasser und Salz' },
    { question: 'Was ist das chemische Symbol für Gold?', answers: ['Ag', 'Au', 'Go', 'Gd'], correct: 'Au' },
    { question: 'Welche Substanz ist ein Metall?', answers: ['Kupfer', 'Kiesel', 'Kalk', 'Luft'], correct: 'Kupfer' }
  ],
  Deutsch: [
    { question: 'Welche Wortart beschreibt eine Eigenschaft?', answers: ['Verb', 'Adjektiv', 'Artikel', 'Pronomen'], correct: 'Adjektiv' },
    { question: 'Was ist die korrekte Form des Wortes in der Mehrzahl: das Buch?', answers: ['Bücher', 'Bucher', 'Büch', 'Buchs'], correct: 'Bücher' },
    { question: 'Welches Wort ist ein Substantiv?', answers: ['laufen', 'schnell', 'Haus', 'dort'], correct: 'Haus' },
    { question: 'Welcher Satz ist grammatisch korrekt?', answers: ['Er gehen nach Hause.', 'Er geht nach Hause.', 'Er ging nach Hause gestern.', 'Er gehen nach Hause gestern.'], correct: 'Er geht nach Hause.' },
    { question: 'Was ist ein Synonym zu „schnell“?', answers: ['ruhig', 'flink', 'falsch', 'hässlich'], correct: 'flink' },
    { question: 'Was ist das Gegenteil von „laut“?', answers: ['groß', 'leise', 'schnell', 'nah'], correct: 'leise' },
    { question: 'Welche Wortart ist „weil“?', answers: ['Substantiv', 'Konjunktion', 'Adverb', 'Interjektion'], correct: 'Konjunktion' },
    { question: 'Was ist das Thema eines Textes?', answers: ['Der Titel des Textes', 'Das zentrale Thema', 'Die Seite', 'Das Datum'], correct: 'Das zentrale Thema' },
    { question: 'Welcher Satz enthält ein Aktivverb?', answers: ['Das Buch ist interessant.', 'Das Kind liest ein Buch.', 'Das Fenster ist groß.', 'Das ist ein Tisch.'], correct: 'Das Kind liest ein Buch.' },
    { question: 'Was ist die richtige Zeitform für „ich habe gespielt“?', answers: ['Präsens', 'Präteritum', 'Perfekt', 'Futur'], correct: 'Perfekt' },
    { question: 'Welches Wort ist ein Pronomen?', answers: ['rot', 'wir', 'Tisch', 'laufen'], correct: 'wir' },
    { question: 'Welcher Satz hat die richtige Zeichensetzung?', answers: ['Wo bist du?', 'Wo bist du', 'Wo bist du!', 'Wo bist du.'], correct: 'Wo bist du?' },
    { question: 'Welches Wort ist ein Adverb?', answers: ['schön', 'morgen', 'Haus', 'laut'], correct: 'morgen' },
    { question: 'Was ist die Nennform eines Verbs?', answers: ['Infinitiv', 'Präteritum', 'Partizip', 'Konjunktiv'], correct: 'Infinitiv' },
    { question: 'Welches Wort ist ein zusammengesetztes Nomen?', answers: ['Buch', 'Schulhaus', 'schnell', 'laufen'], correct: 'Schulhaus' }
  ],
  Biologie: [
    { question: 'Welche Zelle besitzt einen Zellkern?', answers: ['Bakterienzelle', 'Tierzelle', 'Viren', 'Plasmamembran'], correct: 'Tierzelle' },
    { question: 'Welches Organ pumpt Blut durch den Körper?', answers: ['Lunge', 'Leber', 'Herz', 'Niere'], correct: 'Herz' },
    { question: 'Wie nennt man die kleinste lebende Einheit?', answers: ['Organ', 'Gewebe', 'Zelle', 'System'], correct: 'Zelle' },
    { question: 'Wo findet die Fotosynthese bei Pflanzen statt?', answers: ['in der Wurzel', 'im Blattgrün', 'im Holz', 'in der Blüte'], correct: 'im Blattgrün' },
    { question: 'Welcher Stoff ist für Pflanzen grün?', answers: ['Klorophyll', 'Cellulose', 'Glykogen', 'Insulin'], correct: 'Klorophyll' },
    { question: 'Welche Funktion hat die Lunge?', answers: ['Blut reinigen', 'Sauerstoff austauschen', 'Nahrung verdauen', 'Hormone produzieren'], correct: 'Sauerstoff austauschen' },
    { question: 'Welches Organ produziert Galle?', answers: ['Niere', 'Leber', 'Milz', 'Lunge'], correct: 'Leber' },
    { question: 'Was ist ein Lebewesen mit einem Zellkern?', answers: ['Bakterium', 'Virus', 'Pilz', 'Mikrovirus'], correct: 'Pilz' },
    { question: 'Welches Organ gehört zum Verdauungssystem?', answers: ['Aorta', 'Bronchie', 'Magen', 'Hoden'], correct: 'Magen' },
    { question: 'Wie nennt man die Bewegung von Wasser durch die Zellmembran?', answers: ['Diffusion', 'Osmose', 'Filtration', 'Atmung'], correct: 'Osmose' },
    { question: 'Was ist das Genmaterial in den Zellen?', answers: ['Mitochondrien', 'DNA', 'Protein', 'Lipid'], correct: 'DNA' },
    { question: 'Welche Körperzelle enthält keine Chromosomenpaare?', answers: ['Blutzelle', 'Eizelle', 'Hautzelle', 'Muskelzelle'], correct: 'Eizelle' },
    { question: 'Wie heißt die äußere Schicht von Pflanzenzellen?', answers: ['Zellkern', 'Zellwand', 'Mitochondrium', 'Cytoplasma'], correct: 'Zellwand' },
    { question: 'Welche Verbindung hilft bei der Atmung?', answers: ['Adern', 'Bronchien', 'Neuronen', 'Sehnen'], correct: 'Bronchien' },
    { question: 'Welcher Organismus ist ein Einzeller?', answers: ['Mensch', 'Hund', 'Amöbe', 'Farn'], correct: 'Amöbe' }
  ],
  Geschichte: [
    { question: 'In welchem Jahr begann der Erste Weltkrieg?', answers: ['1914', '1918', '1939', '1905'], correct: '1914' },
    { question: 'Wer war der erste Kaiser von Rom?', answers: ['Augustus', 'Julius Caesar', 'Nero', 'Trajan'], correct: 'Augustus' },
    { question: 'In welchem Jahr fiel die Berliner Mauer?', answers: ['1987', '1989', '1991', '1993'], correct: '1989' },
    { question: 'Wer war der deutsche Reichskanzler im Jahr 1933?', answers: ['Konrad Adenauer', 'Helmut Schmidt', 'Adolf Hitler', 'Bismarck'], correct: 'Adolf Hitler' },
    { question: 'Welches Reich wurde von Alexander dem Großen gegründet?', answers: ['Perserreich', 'Makedonisches Reich', 'Römisches Reich', 'Byzantinisches Reich'], correct: 'Makedonisches Reich' },
    { question: 'Wer war in Deutschland „Führer“?', answers: ['Wilhelm II.', 'Bismarck', 'Hitler', 'Goebbels'], correct: 'Hitler' },
    { question: 'Welches Ereignis markierte den Beginn der Französischen Revolution?', answers: ['Sturm auf die Bastille', 'Wiener Kongress', 'Schlacht von Waterloo', 'Prager Fenstersturz'], correct: 'Sturm auf die Bastille' },
    { question: 'Wer war der erste Präsident der USA?', answers: ['Lincoln', 'Washington', 'Kennedy', 'Roosevelt'], correct: 'Washington' },
    { question: 'In welchem Jahr landete Kolumbus in Amerika?', answers: ['1492', '1453', '1517', '1607'], correct: '1492' },
    { question: 'Welche Stadt war das Zentrum des Byzantinischen Reiches?', answers: ['Athens', 'Konstantinopel', 'Rom', 'Alexandria'], correct: 'Konstantinopel' },
    { question: 'Wer war der deutsche Kaiser von 1871 bis 1918?', answers: ['Wilhelm II.', 'Friedrich III.', 'Otto von Bismarck', 'Franz Joseph'], correct: 'Wilhelm II.' },
    { question: 'Welche Bedeutung hatte der 9. November 1989?', answers: ['Ende des Zweiten Weltkriegs', 'Sturz der DDR-Führung', 'Mauerfall', 'Wiedervereinigung'], correct: 'Mauerfall' },
    { question: 'Was war die Renaissance?', answers: ['eine Erfindung', 'eine Zeit kultureller Blüte', 'eine Revolution', 'eine Staatsform'], correct: 'eine Zeit kultureller Blüte' },
    { question: 'Wer schrieb „Die Odyssee“?', answers: ['Homer', 'Sophokles', 'Platon', 'Vergil'], correct: 'Homer' },
    { question: 'Welches Volk baute das Reich von Tikal?', answers: ['Maya', 'Römer', 'Griechen', 'Vikinger'], correct: 'Maya' }
  ],
  Englisch: [
    { question: 'Was bedeutet „although“ auf Deutsch?', answers: ['weil', 'obwohl', 'wann', 'während'], correct: 'obwohl' },
    { question: 'Welche Form ist das Simple Past von „go“?', answers: ['goed', 'went', 'gone', 'going'], correct: 'went' },
    { question: 'Was ist die Mehrzahl von „child“?', answers: ['childs', 'childes', 'children', 'childrens'], correct: 'children' },
    { question: 'Wie übersetzt man „I have eaten“?', answers: ['Ich esse', 'Ich habe gegessen', 'Ich werde essen', 'Ich hatte gegessen'], correct: 'Ich habe gegessen' },
    { question: 'Welches Wort ist ein Adverb?', answers: ['happy', 'quickly', 'book', 'friend'], correct: 'quickly' },
    { question: 'Welche Antwort ist korrekt?', answers: ['He are late.', 'He is late.', 'He am late.', 'He be late.'], correct: 'He is late.' },
    { question: 'Was bedeutet „important“?', answers: ['wichtig', 'langsam', 'falsch', 'schwierig'], correct: 'wichtig' },
    { question: 'Welches Wort ist das Gegenteil von „expensive“?', answers: ['cheap', 'large', 'new', 'quick'], correct: 'cheap' },
    { question: 'Wie lautet die Vergangenheit von „write“?', answers: ['wrote', 'written', 'writed', 'writing'], correct: 'wrote' },
    { question: 'Was ist die korrekte Frageform?', answers: ['Where you live?', 'Where do you live?', 'Where are you live?', 'Where you living?'], correct: 'Where do you live?' },
    { question: 'Welche Form ist richtig: „She ___ a book.“', answers: ['have', 'has', 'had', 'haves'], correct: 'has' },
    { question: 'Was bedeutet „dangerous“?', answers: ['sicher', 'gefährlich', 'ruhig', 'fremd'], correct: 'gefährlich' },
    { question: 'Wie heißt „Berg“ auf Englisch?', answers: ['mountain', 'river', 'forest', 'village'], correct: 'mountain' },
    { question: 'Was ist die richtige Übersetzung von „Wir gehen morgen zum Park.“?', answers: ['We go to the park tomorrow.', 'We are going to the park tomorrow.', 'We went to the park yesterday.', 'We go to the park yesterday.'], correct: 'We are going to the park tomorrow.' },
    { question: 'Welches Wort ist das richtige Pronomen in diesem Satz: „___ are friends.“', answers: ['They', 'Them', 'Their', 'Themself'], correct: 'They' }
  ],
  Physik: [
    { question: 'Welche Einheit misst die Kraft?', answers: ['Joule', 'Newton', 'Volt', 'Watt'], correct: 'Newton' },
    { question: 'Wie schnell ist Licht im Vakuum ungefähr?', answers: ['3 km/s', '30 km/s', '300.000 km/s', '300.000.000 km/s'], correct: '300.000 km/s' },
    { question: 'Welche Energie hat ein bewegter Gegenstand?', answers: ['Potenzielle Energie', 'Bewegungsenergie', 'Chemische Energie', 'Kernenergie'], correct: 'Bewegungsenergie' },
    { question: 'Welches Teilchen trägt negative Ladung?', answers: ['Proton', 'Neutron', 'Elektron', 'Atomkern'], correct: 'Elektron' },
    { question: 'Was ist die SI-Einheit für Strom?', answers: ['Volt', 'Ohm', 'Ampere', 'Watt'], correct: 'Ampere' },
    { question: 'Was passiert bei der Reibung?', answers: ['Elektrische Energie entsteht', 'Wärme entsteht', 'Licht verschwindet', 'Schwerkraft nimmt zu'], correct: 'Wärme entsteht' },
    { question: 'Wie lautet die Formel für Leistung?', answers: ['P = m × g', 'P = W / t', 'P = F × s', 'P = v / t'], correct: 'P = W / t' },
    { question: 'Welcher Stoff leitet Elektrizität gut?', answers: ['Kupfer', 'Holz', 'Glas', 'Karton'], correct: 'Kupfer' },
    { question: 'Was bedeutet „Vakuum“?', answers: ['Luftleerer Raum', 'Heißer Raum', 'Wasserreicher Raum', 'Dichter Raum'], correct: 'Luftleerer Raum' },
    { question: 'Wie entsteht Schall?', answers: ['durch Lichtwellen', 'durch elektromagnetische Wellen', 'durch Schwingungen', 'durch Strahlung'], correct: 'durch Schwingungen' },
    { question: 'Was ist die Masse eines Körpers?', answers: ['Die Menge an Materie', 'Die Kraft auf ihn', 'Die Temperatur', 'Sein Volumen'], correct: 'Die Menge an Materie' },
    { question: 'Welche Art von Energie besitzt ein gespanntes Gummiband?', answers: ['Wärmeenergie', 'Chemische Energie', 'Potenzielle Energie', 'Kinetische Energie'], correct: 'Potenzielle Energie' },
    { question: 'Was ist der Stromkreis?', answers: ['Ein geschlossener Weg für Elektronen', 'Ein magnetisches Feld', 'Die Bewegung von Licht', 'Die Wärme in einem Körper'], correct: 'Ein geschlossener Weg für Elektronen' },
    { question: 'Wie nennt man die Kraft, die ein Körper nach unten zieht?', answers: ['Magnetische Kraft', 'Reibung', 'Schwerkraft', 'Zentrifugalkraft'], correct: 'Schwerkraft' },
    { question: 'Welche Einheit misst die Temperatur?', answers: ['Newton', 'Volt', 'Celsius', 'Meter'], correct: 'Celsius' }
  ],
  Geografie: [
    { question: 'Welcher Kontinent ist der größte?', answers: ['Afrika', 'Europa', 'Asien', 'Südamerika'], correct: 'Asien' },
    { question: 'Wie heißt die Hauptstadt von Frankreich?', answers: ['Rom', 'Paris', 'Madrid', 'Berlin'], correct: 'Paris' },
    { question: 'Welcher Ozean ist der größte?', answers: ['Atlantik', 'Indik', 'Pazifik', 'Arktik'], correct: 'Pazifik' },
    { question: 'Welche Stadt liegt an der Elbe?', answers: ['München', 'Hamburg', 'Köln', 'Bremen'], correct: 'Hamburg' },
    { question: 'Was ist die längste Fluss auf der Erde?', answers: ['Nil', 'Amazonas', 'Rhein', 'Mississippi'], correct: 'Amazonas' },
    { question: 'In welchem Land liegt Rom?', answers: ['Spanien', 'Italien', 'Frankreich', 'Griechenland'], correct: 'Italien' },
    { question: 'Welcher Planet ist der Sonne am nächsten?', answers: ['Venus', 'Mars', 'Merkur', 'Erde'], correct: 'Merkur' },
    { question: 'Wie nennt man die Landfläche zwischen zwei Bergketten?', answers: ['Tal', 'Plateau', 'Delta', 'Küste'], correct: 'Tal' },
    { question: 'Welches Land grenzt nicht an Deutschland?', answers: ['Polen', 'Frankreich', 'Spanien', 'Österreich'], correct: 'Spanien' },
    { question: 'Welche Klimazone liegt um den Äquator?', answers: ['gemäßigt', 'tropisch', 'polar', 'subtropisch'], correct: 'tropisch' },
    { question: 'Wie heißt die Hauptstadt von Japan?', answers: ['Seoul', 'Peking', 'Tokio', 'Bangkok'], correct: 'Tokio' },
    { question: 'Welches Gebirge trennt Europa von Asien?', answers: ['Anden', 'Alpen', 'Ural', 'Rocky Mountains'], correct: 'Ural' },
    { question: 'Welche Stadt liegt in der Schweiz?', answers: ['Bern', 'Lissabon', 'Prag', 'Kopenhagen'], correct: 'Bern' },
    { question: 'Welcher Kontinent ist am dichtesten besiedelt?', answers: ['Afrika', 'Europa', 'Asien', 'Nordamerika'], correct: 'Asien' },
    { question: 'Was ist eine Wüste?', answers: ['trockenes und sehr warmes Gebiet', 'frostiges Hochland', 'beschneites Gebirge', 'dichtes Regenwaldgebiet'], correct: 'trockenes und sehr warmes Gebiet' }
  ]
};

const olympiadQuestionPools = {
  Mathematik: [
    { question: 'Drei aufeinanderfolgende ganze Zahlen haben zusammen die Summe 72. Welche ist die größte?', answers: ['23', '24', '25', '26'], correct: '25', explanation: 'Die mittlere Zahl ist 72 ÷ 3 = 24. Die drei Zahlen sind 23, 24 und 25.' },
    { question: 'Ein Preis wird zuerst um 20 % gesenkt und danach um 20 % erhöht. Wie steht der neue Preis zum ursprünglichen Preis?', answers: ['Er ist gleich hoch.', 'Er ist 4 % niedriger.', 'Er ist 4 % höher.', 'Er ist 2 % niedriger.'], correct: 'Er ist 4 % niedriger.', explanation: 'Bei 100 Euro ergeben sich erst 80 Euro und dann 96 Euro. Die beiden Prozentänderungen heben sich nicht auf.' },
    { question: 'Ein rechtwinkliges Dreieck hat Katheten von 5 cm und 12 cm. Wie lang ist die Hypotenuse?', answers: ['13 cm', '14 cm', '15 cm', '17 cm'], correct: '13 cm', explanation: 'Nach dem Satz des Pythagoras ist die Hypotenuse √(5² + 12²) = √169 = 13 cm.' },
    { question: 'Zwei faire Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass ihre Augensumme 8 beträgt?', answers: ['4/36', '5/36', '6/36', '8/36'], correct: '5/36', explanation: 'Die passenden Paare sind (2,6), (3,5), (4,4), (5,3) und (6,2): fünf von 36 Möglichkeiten.' },
    { question: 'Welche Zahl setzt die Folge 2, 6, 12, 20, 30, … sinnvoll fort?', answers: ['36', '40', '42', '48'], correct: '42', explanation: 'Die Abstände lauten 4, 6, 8 und 10. Der nächste Abstand ist 12, also 30 + 12 = 42.' },
    { question: 'Welche Lösung erfüllt 3(x − 2) = 2x + 7?', answers: ['x = 9', 'x = 11', 'x = 13', 'x = 15'], correct: 'x = 13', explanation: 'Aus 3x − 6 = 2x + 7 folgt durch Subtraktion von 2x und Addition von 6: x = 13.' },
    { question: 'Ein Rechteck hat einen Umfang von 30 cm. Seine Länge ist doppelt so groß wie seine Breite. Wie groß ist seine Fläche?', answers: ['40 cm²', '45 cm²', '50 cm²', '60 cm²'], correct: '50 cm²', explanation: 'Mit Breite b gilt 2(2b + b) = 30, also b = 5 cm und Länge = 10 cm. Die Fläche ist 50 cm².' },
    { question: 'Eine Zahl wird durch 4 geteilt und anschließend um 7 vergrößert. Das Ergebnis ist 16. Welche Zahl war es?', answers: ['28', '32', '36', '40'], correct: '36', explanation: 'Vor der Addition war das Ergebnis 9. Die gesuchte Zahl ist daher 9 × 4 = 36.' }
  ],
  Chemie: [
    { question: '12 g Kohlenstoff reagieren in einem geschlossenen Gefäß vollständig mit 32 g Sauerstoff. Welche Masse an Kohlenstoffdioxid entsteht?', answers: ['20 g', '32 g', '44 g', '48 g'], correct: '44 g', explanation: 'In einem geschlossenen System bleibt die Gesamtmasse erhalten: 12 g + 32 g = 44 g.' },
    { question: 'Eine starke Säure mit pH 2 wird hundertfach verdünnt. Welcher pH-Wert ist näherungsweise zu erwarten?', answers: ['pH 1', 'pH 3', 'pH 4', 'pH 8'], correct: 'pH 4', explanation: 'Eine zehnfache Verdünnung erhöht den pH-Wert einer starken Säure ungefähr um eins. Hundertfach bedeutet zwei pH-Stufen.' },
    { question: 'Warum leitet festes Kochsalz elektrischen Strom kaum, eine Kochsalzlösung aber schon?', answers: ['In der Lösung sind Ionen beweglich.', 'Wasser erzeugt freie Elektronen.', 'Festes Salz enthält keine geladenen Teilchen.', 'Beim Lösen entstehen Protonen.'], correct: 'In der Lösung sind Ionen beweglich.', explanation: 'Im Kristallgitter sind die Ionen gebunden. In Wasser gelöst können sie wandern und Ladung transportieren.' },
    { question: 'Welche Aussage über einen Katalysator trifft zu?', answers: ['Er senkt die Aktivierungsenergie und wird nicht dauerhaft verbraucht.', 'Er erhöht die Aktivierungsenergie.', 'Er verschiebt immer das chemische Gleichgewicht.', 'Er muss im Produkt vollständig enthalten sein.'], correct: 'Er senkt die Aktivierungsenergie und wird nicht dauerhaft verbraucht.', explanation: 'Ein Katalysator ermöglicht einen Reaktionsweg mit geringerer Aktivierungsenergie und liegt nach der Reaktion wieder vor.' },
    { question: 'Bei der Reaktion 2 H₂ + O₂ → 2 H₂O reagieren 4 Wasserstoffmoleküle vollständig. Wie viele Wassermoleküle entstehen?', answers: ['2', '3', '4', '8'], correct: '4', explanation: 'Das Verhältnis von Wasserstoff- zu Wassermolekülen ist 2:2, also 1:1. Aus vier H₂ entstehen vier H₂O.' },
    { question: 'Ein Atom besitzt 17 Protonen und 18 Neutronen. Welche Massenzahl hat sein Kern?', answers: ['17', '18', '35', '36'], correct: '35', explanation: 'Die Massenzahl ist die Summe aus Protonen und Neutronen: 17 + 18 = 35.' },
    { question: 'Ein Stoff nimmt beim Schmelzen Wärme auf, obwohl seine Temperatur zunächst gleich bleibt. Wofür wird die Energie hauptsächlich genutzt?', answers: ['Zum Überwinden von Anziehungskräften zwischen Teilchen', 'Zur Erzeugung neuer Atome', 'Zur Abkühlung der Teilchen', 'Zur Umwandlung in elektrische Ladung'], correct: 'Zum Überwinden von Anziehungskräften zwischen Teilchen', explanation: 'Während des Schmelzens wird Energie für die Änderung des Aggregatzustands benötigt, nicht für eine Temperaturerhöhung.' },
    { question: 'Ein Stück Magnesium wird verbrannt und wird dabei schwerer. Welche Erklärung passt am besten?', answers: ['Magnesium hat sich in Sauerstoff aus der Luft gebunden.', 'Es sind neue Magnesiumatome entstanden.', 'Die Waage misst bei Wärme grundsätzlich mehr.', 'Masse wird bei Verbrennungen erzeugt.'], correct: 'Magnesium hat sich in Sauerstoff aus der Luft gebunden.', explanation: 'Bei der Verbrennung entsteht Magnesiumoxid. Der aufgenommene Sauerstoff trägt zur größeren Masse des Feststoffs bei.' }
  ],
  Deutsch: [
    { question: 'Welche Wirkung hat die Wiederholung am Satzanfang in: „Wir fordern Mut. Wir fordern Fairness. Wir fordern Veränderung.“?', answers: ['Sie verstärkt die Forderung durch eine Anapher.', 'Sie macht die Aussage zu einer Metapher.', 'Sie kennzeichnet einen inneren Monolog.', 'Sie bildet einen Vergleich.'], correct: 'Sie verstärkt die Forderung durch eine Anapher.', explanation: 'Die Wiederholung desselben Satzanfangs heißt Anapher und betont die drei Forderungen.' },
    { question: 'Welche Form passt in die indirekte Rede: „Die Sprecherin sagte, sie ___ bereits mit der Arbeit begonnen.“?', answers: ['hat', 'habe', 'hatte', 'wird'], correct: 'habe', explanation: 'In der indirekten Rede wird häufig der Konjunktiv I verwendet: „sie habe begonnen“.' },
    { question: 'Welche Umformung steht im Vorgangspassiv Präsens: „Die Forscherin untersucht die Probe.“?', answers: ['Die Probe wird von der Forscherin untersucht.', 'Die Probe untersuchte die Forscherin.', 'Die Forscherin wird untersucht.', 'Die Probe ist untersucht worden.'], correct: 'Die Probe wird von der Forscherin untersucht.', explanation: 'Das Vorgangspassiv im Präsens wird mit „werden“ und dem Partizip II gebildet.' },
    { question: 'Welcher Satz ist korrekt?', answers: ['Obwohl es stark regnete, gingen wir weiter.', 'Obwohl es stark regnete, wir gingen weiter.', 'Obwohl stark regnete es, gingen wir weiter.', 'Obwohl es regnete stark, wir weiter gingen.'], correct: 'Obwohl es stark regnete, gingen wir weiter.', explanation: 'Im Nebensatz mit „obwohl“ steht das finite Verb am Ende; im Hauptsatz folgt das Verb an zweiter Stelle.' },
    { question: 'Welche Aussage über eine Ich-Erzählung ist sicher richtig?', answers: ['Das erzählende Ich berichtet aus einer Ich-Perspektive.', 'Alle Gedanken aller Figuren sind immer bekannt.', 'Die Handlung muss in der Vergangenheit spielen.', 'Der Erzähler ist stets eine historische Person.'], correct: 'Das erzählende Ich berichtet aus einer Ich-Perspektive.', explanation: 'Die Ich-Form legt die Perspektive fest, aber nicht automatisch Erzählzeit, Allwissenheit oder historische Wirklichkeit.' },
    { question: '„Der Wind flüsterte durch die Bäume.“ Welches sprachliche Mittel liegt vor?', answers: ['Personifikation', 'Vergleich', 'Alliteration', 'Hyperbel'], correct: 'Personifikation', explanation: 'Dem Wind wird mit dem Flüstern eine menschliche Handlung zugeschrieben.' },
    { question: 'Welche Schlussfolgerung ist aus diesem Satz am besten begründbar: „Lea nahm trotz des Regens den Schirm nicht mit und kam durchnässt an.“?', answers: ['Lea war wahrscheinlich ohne Schirm unterwegs.', 'Lea hasst grundsätzlich Regen.', 'Der Schirm war kaputt.', 'Lea kam absichtlich zu spät.'], correct: 'Lea war wahrscheinlich ohne Schirm unterwegs.', explanation: 'Nur diese Schlussfolgerung wird durch die Information über den fehlenden Schirm und das Durchnässtsein gestützt.' },
    { question: 'Welcher Satz enthält einen Relativsatz?', answers: ['Das Buch, das du mir geliehen hast, ist spannend.', 'Weil du mir das Buch geliehen hast, lese ich es.', 'Du hast mir ein spannendes Buch geliehen.', 'Lies das Buch und gib es zurück.'], correct: 'Das Buch, das du mir geliehen hast, ist spannend.', explanation: 'Der Nebensatz „das du mir geliehen hast“ bezieht sich auf das Nomen „Buch“ und ist ein Relativsatz.' }
  ],
  Biologie: [
    { question: 'Eine heterozygote Pflanze (Bb) wird mit einer rezessiven Pflanze (bb) gekreuzt. Wie groß ist bei vollständiger Dominanz die Chance auf Nachkommen mit rezessivem Merkmal?', answers: ['0 %', '25 %', '50 %', '100 %'], correct: '50 %', explanation: 'Die Kreuzung Bb × bb ergibt zur Hälfte Bb und zur Hälfte bb. Nur bb zeigt das rezessive Merkmal.' },
    { question: 'In einem See nimmt die Zahl der Wasserpflanzen stark ab. Welche Folge ist für Tiere, die sich direkt von ihnen ernähren, am wahrscheinlichsten?', answers: ['Ihre Nahrungsgrundlage wird knapper.', 'Sie können sofort selbst Fotosynthese betreiben.', 'Ihre Population muss zwangsläufig wachsen.', 'Der Sauerstoffgehalt kann sich nicht verändern.'], correct: 'Ihre Nahrungsgrundlage wird knapper.', explanation: 'Wasserpflanzen sind Produzenten und bilden die Nahrungsgrundlage für Pflanzenfresser im See.' },
    { question: 'Warum kann eine Bakterienpopulation nach wiederholtem Antibiotikaeinsatz resistente Varianten enthalten?', answers: ['Resistente Bakterien überleben häufiger und vermehren sich.', 'Jedes Bakterium entscheidet, resistent zu werden.', 'Das Antibiotikum trainiert gezielt alle Bakterien.', 'Resistenz entsteht nur bei Tieren.'], correct: 'Resistente Bakterien überleben häufiger und vermehren sich.', explanation: 'Selektion begünstigt bereits resistente Varianten; diese können ihre Erbanlagen weitergeben.' },
    { question: 'Was geschieht typischerweise mit einer Tierzelle in stark verdünntem, destilliertem Wasser?', answers: ['Wasser strömt in die Zelle; sie kann anschwellen.', 'Wasser verlässt die Zelle vollständig.', 'Die Zellmembran wird für Wasser undurchlässig.', 'Die Zelle bildet sofort eine Zellwand.'], correct: 'Wasser strömt in die Zelle; sie kann anschwellen.', explanation: 'Durch Osmose bewegt sich Wasser in die Zelle, wenn außen weniger gelöste Stoffe vorhanden sind.' },
    { question: 'Warum ist die Aktivität vieler Enzyme bei sehr hoher Temperatur stark vermindert?', answers: ['Die räumliche Struktur des Enzyms kann sich verändern.', 'Das Enzym verwandelt sich vollständig in DNA.', 'Die Temperatur entfernt alle Atome aus dem Enzym.', 'Enzyme arbeiten bei jeder Temperatur gleich.'], correct: 'Die räumliche Struktur des Enzyms kann sich verändern.', explanation: 'Bei hoher Temperatur kann die Struktur denaturieren; das aktive Zentrum passt dann oft nicht mehr zum Substrat.' },
    { question: 'Welche Aussage beschreibt die Fotosynthese am treffendsten?', answers: ['Lichtenergie wird genutzt, um aus Kohlenstoffdioxid und Wasser energiereiche Stoffe aufzubauen.', 'Sauerstoff und Zucker werden zu Licht umgewandelt.', 'Pflanzen nehmen ausschließlich nachts Kohlenstoffdioxid auf.', 'Fotosynthese findet nur in den Wurzeln statt.'], correct: 'Lichtenergie wird genutzt, um aus Kohlenstoffdioxid und Wasser energiereiche Stoffe aufzubauen.', explanation: 'Bei der Fotosynthese wird Lichtenergie chemisch gespeichert; dabei entsteht unter anderem Sauerstoff.' },
    { question: 'In einer Nahrungskette stehen Pflanzen am Anfang. Warum nimmt die verfügbare Energie zu höheren Trophiestufen meist ab?', answers: ['Ein Teil wird für Lebensprozesse genutzt und als Wärme abgegeben.', 'Energie wird von Tieren vollständig vernichtet.', 'Pflanzen speichern niemals Energie.', 'Räuber erzeugen keine Körperwärme.'], correct: 'Ein Teil wird für Lebensprozesse genutzt und als Wärme abgegeben.', explanation: 'Nicht die gesamte aufgenommene Energie wird als Biomasse weitergegeben; ein Teil geht unter anderem als Wärme ab.' },
    { question: 'Was ist die wichtigste Funktion roter Blutkörperchen beim Menschen?', answers: ['Sauerstoff mithilfe von Hämoglobin zu transportieren', 'Verdauungsenzyme herzustellen', 'Krankheitserreger gezielt zu erkennen', 'Hormone in der Bauchspeicheldrüse zu bilden'], correct: 'Sauerstoff mithilfe von Hämoglobin zu transportieren', explanation: 'Das Hämoglobin in roten Blutkörperchen bindet Sauerstoff und ermöglicht seinen Transport im Blut.' }
  ],
  Geschichte: [
    { question: 'Eine Zeitung von 1914 berichtet über einen Streik. Was sollte man bei ihrer Auswertung zuerst beachten?', answers: ['Wer sie verfasst hat, für wen sie bestimmt war und welche Absicht sie haben könnte.', 'Dass zeitgenössische Quellen immer vollständig neutral sind.', 'Dass ein einzelner Bericht alle Perspektiven ersetzt.', 'Dass nur das Papierformat den Inhalt erklärt.'], correct: 'Wer sie verfasst hat, für wen sie bestimmt war und welche Absicht sie haben könnte.', explanation: 'Urheber, Adressaten und Entstehungssituation helfen, Perspektive und mögliche Interessen der Quelle einzuordnen.' },
    { question: 'Welche Entwicklung war eine typische Folge der Industrialisierung im 19. Jahrhundert?', answers: ['Viele Menschen zogen für Fabrikarbeit in schnell wachsende Städte.', 'Die meisten Fabriken wurden durch Burgen ersetzt.', 'Die Bevölkerung kehrte dauerhaft zur Selbstversorgung zurück.', 'Eisenbahnen verschwanden aus Europa.'], correct: 'Viele Menschen zogen für Fabrikarbeit in schnell wachsende Städte.', explanation: 'Fabrikarbeit und neue Verkehrswege förderten die Land-Stadt-Wanderung und das Wachstum von Industriestädten.' },
    { question: 'Welche Aussage unterscheidet einen Anlass von einer langfristigen Ursache des Ersten Weltkriegs?', answers: ['Das Attentat von Sarajevo war der unmittelbare Anlass; Bündnissysteme und Nationalismus gehörten zu den längerfristigen Ursachen.', 'Das Attentat fand nach dem Kriegsende statt.', 'Bündnisse waren ausschließlich eine Folge des Krieges.', 'Es gab keinen unmittelbaren Anlass.'], correct: 'Das Attentat von Sarajevo war der unmittelbare Anlass; Bündnissysteme und Nationalismus gehörten zu den längerfristigen Ursachen.', explanation: 'Historische Ereignisse haben oft einen konkreten Auslöser und mehrere länger wirkende Ursachen.' },
    { question: 'Warum gilt die Verfassung des Deutschen Reichs von 1919 als wichtiger Einschnitt?', answers: ['Sie begründete die erste parlamentarische Demokratie in Deutschland.', 'Sie führte die Monarchie unter Kaiser Wilhelm II. wieder ein.', 'Sie beendete die deutsche Teilung.', 'Sie wurde nach dem Zweiten Weltkrieg verabschiedet.'], correct: 'Sie begründete die erste parlamentarische Demokratie in Deutschland.', explanation: 'Die Weimarer Verfassung schuf 1919 eine Republik mit Parlament und gewähltem Reichspräsidenten.' },
    { question: 'Welche Aussage zum Versailler Vertrag ist korrekt?', answers: ['Er wurde 1919 nach dem Ersten Weltkrieg geschlossen.', 'Er beendete den Dreißigjährigen Krieg.', 'Er wurde vor Beginn des Ersten Weltkriegs unterzeichnet.', 'Er gründete das Römische Reich.'], correct: 'Er wurde 1919 nach dem Ersten Weltkrieg geschlossen.', explanation: 'Der Vertrag von Versailles wurde 1919 unterzeichnet und regelte den Frieden mit Deutschland nach dem Ersten Weltkrieg.' },
    { question: 'Was macht eine historische Darstellung von einer Quelle aus der untersuchten Zeit unterscheidbar?', answers: ['Die Darstellung wird später verfasst und deutet Quellen rückblickend.', 'Die Darstellung muss von einer Augenzeugin geschrieben sein.', 'Eine Quelle enthält niemals Meinungen.', 'Eine Darstellung darf keine Belege verwenden.'], correct: 'Die Darstellung wird später verfasst und deutet Quellen rückblickend.', explanation: 'Darstellungen ordnen vergangene Ereignisse nachträglich ein; Quellen stammen aus der jeweiligen Zeit oder ihrem Umfeld.' },
    { question: 'Warum ist die Erfindung der Schrift für die Geschichtsforschung besonders bedeutsam?', answers: ['Sie ermöglichte die dauerhafte Aufzeichnung von Informationen und Verwaltung.', 'Sie beendete sofort alle Kriege.', 'Sie machte mündliche Überlieferung unmöglich.', 'Sie entstand erst nach dem Buchdruck.'], correct: 'Sie ermöglichte die dauerhafte Aufzeichnung von Informationen und Verwaltung.', explanation: 'Schriftliche Aufzeichnungen erlauben unter anderem, Regeln, Handel und Ereignisse über längere Zeit festzuhalten.' },
    { question: 'Eine Stadtmauer wird erweitert, während neue Handwerksviertel entstehen. Welche Deutung ist am plausibelsten?', answers: ['Die Stadt wuchs und organisierte Schutz sowie wirtschaftliches Leben neu.', 'Die Stadt gab ihre Bevölkerung vollständig auf.', 'Handwerk wurde außerhalb jeder Stadt verboten.', 'Die Mauer beweist, dass es keinen Handel gab.'], correct: 'Die Stadt wuchs und organisierte Schutz sowie wirtschaftliches Leben neu.', explanation: 'Stadtmauern und Handwerksviertel können auf Bevölkerungswachstum, wirtschaftliche Spezialisierung und Schutzbedürfnisse hindeuten.' }
  ],
  Englisch: [
    { question: 'Choose the correct sentence: “If I ___ more time, I would learn another language.”', answers: ['have', 'had', 'will have', 'would have'], correct: 'had', explanation: 'The second conditional uses if + past simple (“had”) and would + infinitive (“would learn”).' },
    { question: 'Change into the passive: “The committee will announce the results tomorrow.”', answers: ['The results will be announced tomorrow.', 'The results are announcing tomorrow.', 'The committee will be announced tomorrow.', 'The results announced tomorrow.'], correct: 'The results will be announced tomorrow.', explanation: 'The future passive is formed with “will be” + past participle.' },
    { question: 'Which sentence is correct?', answers: ['She has lived here since 2020.', 'She lives here since 2020.', 'She is living here since 2020.', 'She lived here since 2020 and still does.'], correct: 'She has lived here since 2020.', explanation: 'The present perfect connects a situation that began in the past with the present; “since” marks its starting point.' },
    { question: 'Complete the sentence: “Despite ___ tired, Jordan finished the experiment.”', answers: ['being', 'was', 'be', 'to be'], correct: 'being', explanation: '“Despite” is followed by a noun or gerund (-ing form), not a finite clause.' },
    { question: 'Read: “The last bus had already left, so Amira called her brother for a ride.” What can you infer?', answers: ['Amira could not take the bus she needed.', 'Amira had missed her flight.', 'Her brother was driving the bus.', 'Amira had forgotten her phone at home.'], correct: 'Amira could not take the bus she needed.', explanation: 'The text says the last bus had left and she arranged another ride; the other details are not supported.' },
    { question: 'Choose the correct relative pronoun: “The scientist ___ discovered the species gave a lecture.”', answers: ['who', 'which', 'where', 'whose'], correct: 'who', explanation: '“Who” refers to a person acting as the subject of the relative clause.' },
    { question: 'Which sentence reports this statement correctly? Ben: “I am working on the project now.” (Ben said this yesterday.)', answers: ['Ben said that he was working on the project then.', 'Ben said that I am working on the project now.', 'Ben says he worked on the project tomorrow.', 'Ben told that he is work on the project.'], correct: 'Ben said that he was working on the project then.', explanation: 'In reported speech after a past reporting verb, “am working” commonly shifts to “was working” and “now” to “then”.' },
    { question: 'Choose the sentence with the closest meaning to “Although the route was longer, it was safer.”', answers: ['The route was longer, but it was safer.', 'The route was longer because it was safer.', 'The route was not longer or safer.', 'The route was safer only when it became shorter.'], correct: 'The route was longer, but it was safer.', explanation: '“Although” signals a contrast, which is preserved by “but”.' }
  ],
  Physik: [
    { question: 'Ein Fahrrad fährt geradlinig mit gleichbleibender Geschwindigkeit. Welche Aussage über die resultierende Kraft stimmt?', answers: ['Sie ist null.', 'Sie zeigt in Fahrtrichtung.', 'Sie wird mit der Zeit immer größer.', 'Sie entspricht immer der Gewichtskraft.'], correct: 'Sie ist null.', explanation: 'Bei gleichbleibender Geschwindigkeit ist die Beschleunigung null; nach F = m · a ist auch die resultierende Kraft null.' },
    { question: 'Ein Auto fährt 72 km/h. Wie groß ist seine Geschwindigkeit in m/s?', answers: ['10 m/s', '20 m/s', '25 m/s', '72 m/s'], correct: '20 m/s', explanation: 'Zur Umrechnung von km/h in m/s wird durch 3,6 geteilt: 72 ÷ 3,6 = 20.' },
    { question: 'Zwei gleiche Widerstände werden parallel an eine ideale Spannungsquelle angeschlossen. Wie groß ist ihr Gesamtwiderstand im Vergleich zu einem einzelnen Widerstand R?', answers: ['2R', 'R', 'R/2', 'R/4'], correct: 'R/2', explanation: 'Für zwei gleiche parallele Widerstände gilt 1/Rgesamt = 1/R + 1/R, also Rgesamt = R/2.' },
    { question: 'Ein Hebel ist im Gleichgewicht. Links wirken 20 N im Abstand von 0,5 m zum Drehpunkt. Welche Kraft muss rechts im Abstand von 1 m wirken?', answers: ['5 N', '10 N', '20 N', '40 N'], correct: '10 N', explanation: 'Die Drehmomente müssen gleich sein: 20 N · 0,5 m = F · 1 m, also F = 10 N.' },
    { question: 'Ein Körper mit 540 g Masse hat ein Volumen von 200 cm³. Welche Dichte hat er?', answers: ['0,37 g/cm³', '2,7 g/cm³', '27 g/cm³', '108 000 g/cm³'], correct: '2,7 g/cm³', explanation: 'Die Dichte ist Masse geteilt durch Volumen: 540 g ÷ 200 cm³ = 2,7 g/cm³.' },
    { question: 'Zwei gleiche Glühlampen sind in Reihe geschaltet. Was passiert, wenn eine Lampe herausgedreht wird?', answers: ['Beide Lampen erlöschen, weil der Stromkreis unterbrochen ist.', 'Die andere leuchtet heller.', 'Die andere leuchtet unverändert weiter.', 'Die Spannungsquelle wird automatisch stärker.'], correct: 'Beide Lampen erlöschen, weil der Stromkreis unterbrochen ist.', explanation: 'In einer Reihenschaltung unterbricht das Entfernen einer Lampe den gemeinsamen Stromweg.' },
    { question: 'Ein Ball fällt ohne Luftwiderstand aus einer Höhe. Welche Energieumwandlung beschreibt den Fall?', answers: ['Lageenergie wird in Bewegungsenergie umgewandelt.', 'Bewegungsenergie wird vollständig zu Masse.', 'Wärmeenergie wird zu elektrischer Energie.', 'Die Gesamtenergie nimmt ständig zu.'], correct: 'Lageenergie wird in Bewegungsenergie umgewandelt.', explanation: 'Während der Fallbewegung sinkt die Lageenergie und die Bewegungsenergie steigt; die mechanische Gesamtenergie bleibt erhalten.' },
    { question: 'Warum kann man einen Gegenstand mit einer Sammellinse auf einem Schirm abbilden, wenn er weit genug entfernt ist?', answers: ['Die Linse bündelt Lichtstrahlen zu einem reellen Bild.', 'Die Linse erzeugt Licht aus dem Nichts.', 'Der Schirm macht das Bild virtuell.', 'Die Linse reflektiert alle Strahlen zurück zum Gegenstand.'], correct: 'Die Linse bündelt Lichtstrahlen zu einem reellen Bild.', explanation: 'Eine Sammellinse kann Lichtstrahlen so bündeln, dass sie sich auf einem Schirm in einem reellen Bild treffen.' }
  ],
  Geografie: [
    { question: 'Auf einer Karte im Maßstab 1 : 50 000 ist eine Strecke 3 cm lang. Wie lang ist sie in Wirklichkeit?', answers: ['150 m', '1,5 km', '15 km', '150 km'], correct: '1,5 km', explanation: 'Ein Zentimeter entspricht 50 000 cm = 500 m. Drei Zentimeter entsprechen 1 500 m = 1,5 km.' },
    { question: 'Die Temperatur sinkt mit der Höhe im Mittel um etwa 0,6 °C pro 100 m. Wie viel kälter ist es in 1 000 m Höhe ungefähr?', answers: ['0,6 °C', '3 °C', '6 °C', '60 °C'], correct: '6 °C', explanation: '1 000 m enthalten zehn Abschnitte zu je 100 m: 10 × 0,6 °C = 6 °C.' },
    { question: 'Eine Stadt hat 240 000 Einwohner auf 30 km². Wie hoch ist ihre Bevölkerungsdichte?', answers: ['800 Einwohner/km²', '8 000 Einwohner/km²', '80 000 Einwohner/km²', '270 000 Einwohner/km²'], correct: '8 000 Einwohner/km²', explanation: 'Die Bevölkerungsdichte ist 240 000 ÷ 30 = 8 000 Einwohner pro km².' },
    { question: 'Warum regnet es häufig auf der windzugewandten Seite eines Gebirges?', answers: ['Feuchte Luft steigt auf, kühlt ab und Wasserdampf kondensiert.', 'Luft wird beim Absinken kälter und nimmt mehr Wasser auf.', 'Das Gebirge erzeugt zusätzliches Wasser.', 'Die Sonne erwärmt dort immer weniger als im Tal.'], correct: 'Feuchte Luft steigt auf, kühlt ab und Wasserdampf kondensiert.', explanation: 'Aufsteigende Luft kühlt sich ab; dadurch kondensiert Wasserdampf und es kann Steigungsregen entstehen.' },
    { question: 'Was zeigen eng beieinanderliegende Höhenlinien auf einer topografischen Karte?', answers: ['Ein steiles Gelände.', 'Eine besonders flache Ebene.', 'Eine große Entfernung zwischen Orten.', 'Eine niedrige Bevölkerungsdichte.'], correct: 'Ein steiles Gelände.', explanation: 'Wenn sich die Höhe auf kurzer horizontaler Strecke stark ändert, liegen die Höhenlinien dicht beieinander.' },
    { question: 'Zwei Orte liegen etwa 30 Längengrade auseinander. Wie groß ist der mittlere Unterschied ihrer Ortszeit ungefähr?', answers: ['1 Stunde', '2 Stunden', '3 Stunden', '12 Stunden'], correct: '2 Stunden', explanation: 'Die Erde dreht sich in 24 Stunden um 360 Grad, also entsprechen 15 Längengrade ungefähr einer Stunde.' },
    { question: 'Ein Land exportiert fast ausschließlich Kaffee. Warum kann das wirtschaftlich riskant sein?', answers: ['Ein Preisverfall bei Kaffee kann die Exporterlöse stark senken.', 'Kaffee lässt sich grundsätzlich nicht transportieren.', 'Ein einzelnes Exportgut verhindert jede Landwirtschaft.', 'Weltmarktpreise ändern sich niemals.'], correct: 'Ein Preisverfall bei Kaffee kann die Exporterlöse stark senken.', explanation: 'Eine starke Abhängigkeit von einem Exportprodukt macht ein Land anfällig für Preisschwankungen und Ernteausfälle.' },
    { question: 'Welche Aussage erklärt eine typische Folge des El-Niño-Phänomens im östlichen tropischen Pazifik?', answers: ['Die Meeresoberfläche wird ungewöhnlich warm und verändert Niederschlagsmuster.', 'Der Pazifik friert entlang des Äquators vollständig zu.', 'Die Erdachse kippt für mehrere Monate.', 'Alle tropischen Wirbelstürme verschwinden weltweit.'], correct: 'Die Meeresoberfläche wird ungewöhnlich warm und verändert Niederschlagsmuster.', explanation: 'El Niño ist eine periodische Erwärmung des zentralen und östlichen tropischen Pazifiks, die Wetter- und Niederschlagsmuster beeinflussen kann.' }
  ]
};

const QUESTIONS_PER_QUIZ = 8;
const AUTO_NEXT_DELAY = 1300;


let currentSubject = '';
let questions = [];
let questionIndex = 0;
let score = 0;
let streak = 0;
let answerLocked = false;
let nextTimer = null;
let currentUser = null;
let isTournament = false;
let isPractice = false;
let tournamentPlayers = [];
let tournamentScores = [];
let tournamentAnswers = [];
let activePlayerIndex = 0;
let quizXpEarned = 0;

const authScreen = document.getElementById('authScreen');
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const registerForm = document.getElementById('registerForm');
const registerUsername = document.getElementById('registerUsername');
const registerPassword = document.getElementById('registerPassword');
const authMessage = document.getElementById('authMessage');

const playerName = document.getElementById('playerName');
const playerStats = document.getElementById('playerStats'); 
const savedProgress = document.getElementById('savedProgress');
const subjectGrid = document.getElementById('subjectGrid');
const logoutButton = document.getElementById('logoutButton');

const questionCounter = document.getElementById('questionCounter');
const streakBadge = document.getElementById('streakBadge');
const xpBadge = document.getElementById('xpBadge');
const questionText = document.getElementById('questionText');
const answerButtons = document.getElementById('answerButtons');
const feedback = document.getElementById('feedback');
const scoreText = document.getElementById('scoreText');
const resultText = document.getElementById('resultText');
const contestSubject = document.getElementById('contestSubject');
const contestPlayersInput = document.getElementById('contestPlayers');
const contestStartButton = document.getElementById('contestStartButton');
const contestMessage = document.getElementById('contestMessage');
const leaderboardList = document.getElementById('leaderboardList');
const teacherDashboard = document.getElementById('teacherDashboard');
const teacherScores = document.getElementById('teacherScores');
const teacherResults = document.getElementById('teacherResults');
const teacherMessage = document.getElementById('teacherMessage');
let supabaseClient = null;

const LOCAL_PROFILE_KEY = 'faecherquiz-local-profile';
const LOCAL_ACCOUNTS_KEY = 'faecherquiz-local-accounts';

function readLocalJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn('Lokaler Speicher konnte nicht gelesen werden:', error);
    return fallback;
  }
}

function writeLocalJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Lokaler Speicher konnte nicht geschrieben werden:', error);
  }
}

function isSupabaseConfigured() {
  const config = window.FAECHERQUIZ_SUPABASE_CONFIG;
  return Boolean(
    window.supabase?.createClient &&
    config?.url &&
    config?.anonKey &&
    !config.url.includes('YOUR_PROJECT_ID') &&
    !config.anonKey.includes('YOUR_SUPABASE_ANON_KEY')
  );
}

function getLocalProfile() {
  const profile = readLocalJson(LOCAL_PROFILE_KEY, null);
  if (!profile) return null;
  return {
    ...profile,
    bestScores: profile.bestScores || {},
    xp: profile.xp || 0,
    totalAnswered: profile.totalAnswered || 0,
    totalCorrect: profile.totalCorrect || 0,
    bestScore: profile.bestScore || 0
  };
}

function saveLocalProfile(profile) {
  writeLocalJson(LOCAL_PROFILE_KEY, profile);
}

function getLocalAccounts() {
  return readLocalJson(LOCAL_ACCOUNTS_KEY, {});
}

function saveLocalAccounts(accounts) {
  writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
}

function createLocalUser(username) {
  return {
    user_id: `local-${username.toLowerCase()}`,
    username,
    xp: 0,
    bestScores: {},
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    role: null
  };
}

function getLevelFromXp(xp) {
  return Math.floor(xp / 100) + 1;
}

async function usernameToAuthEmail(username) {
  const normalized = username.trim().toLocaleLowerCase('de');
  const bytes = new TextEncoder().encode(normalized);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const encoded = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${encoded}@users.faecherquiz.invalid`;
}

async function loadUserProgress() {
  const { data, error } = await supabaseClient
    .from('quiz_results')
    .select('subject, score, total, xp_earned')
    .eq('user_id', currentUser.user_id);

  if (error) throw error;

  const bestScores = {};
  const progress = data.reduce((totals, result) => {
    totals.totalAnswered += result.total;
    totals.totalCorrect += result.score;
    totals.xp += result.xp_earned;
    bestScores[result.subject] = Math.max(bestScores[result.subject] || 0, result.score);
    return totals;
  }, { totalAnswered: 0, totalCorrect: 0, xp: 0 });

  currentUser = {
    ...currentUser,
    ...progress,
    bestScores,
    bestScore: Math.max(0, ...Object.values(bestScores))
  };
}

async function loadProfile(session) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('user_id, username, role')
    .eq('user_id', session.user.id)
    .single();

  if (error) throw error;
  currentUser = data;
  await loadUserProgress();
  renderHome();
}

function showMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.style.color = isError ? '#c54552' : '#16835d';
}

function renderHome() {
  clearTimeout(nextTimer);
  authScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');

  if (!currentUser) {
    showAuth();
    return;
  }

  playerName.textContent = currentUser.username;
  playerStats.textContent = `Level ${getLevelFromXp(currentUser.xp)} • XP ${currentUser.xp} • Best Score ${currentUser.bestScore || 0}`;
  renderContestSubjects();
  renderSubjects();
  void renderLeaderboard();
  void renderTeacherResults();
  renderSavedProgress();
}

function renderSavedProgress() {
  if (!currentUser) {
    savedProgress.textContent = 'Bitte melde dich an.';
    return;
  }

  const bestScores = currentUser.bestScores || {};
  const totalCorrect = currentUser.totalCorrect || 0;
  const totalAnswered = currentUser.totalAnswered || 0;
  const bestTotal = Object.values(bestScores).reduce((sum, value) => sum + Number(value || 0), 0);

  savedProgress.textContent = `Gesamt: ${totalAnswered} beantwortet • ${totalCorrect} richtig • Beste Fach-Ergebnisse zusammen: ${bestTotal}`;
}

function showAuth() {
  clearTimeout(nextTimer);
  homeScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
  loginUsername.focus();
}

async function createAccount(username, password) {
  const cleanUsername = username.trim();

  if (!cleanUsername || !password) {
    showMessage('Bitte Spielernamen und Passwort eingeben.', true);
    return false;
  }

  if (!/^[\p{L}\p{N} _.-]{3,24}$/u.test(cleanUsername)) {
    showMessage('Der Spielername muss 3 bis 24 Zeichen lang sein und darf Buchstaben, Zahlen, Leerzeichen, Punkt, Bindestrich oder Unterstrich enthalten.', true);
    return false;
  }

  if (password.length < 8) {
    showMessage('Das Passwort muss mindestens 8 Zeichen lang sein.', true);
    return false;
  }

  if (!supabaseClient) {
    const accounts = getLocalAccounts();
    if (accounts[cleanUsername]) {
      showMessage('Dieser Spielername ist bereits vergeben. Bitte wähle einen anderen.', true);
      return false;
    }
    accounts[cleanUsername] = { username: cleanUsername, password };
    saveLocalAccounts(accounts);
    currentUser = createLocalUser(cleanUsername);
    saveLocalProfile(currentUser);
    renderHome();
    return true;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email: await usernameToAuthEmail(cleanUsername),
    password,
    options: { data: { username: cleanUsername } }
  });

  if (error) throw error;
  if (!data.session) {
    showMessage('Konto angelegt. Deaktiviere in Supabase die E-Mail-Bestätigung, damit die Anmeldung ohne E-Mail funktioniert.', true);
    return false;
  }

  await loadProfile(data.session);
  return true;
}

async function loginUser(username, password) {
  const cleanUsername = username.trim();
  if (!cleanUsername || !password) {
    showMessage('Bitte Spielernamen und Passwort eingeben.', true);
    return false;
  }

  if (!supabaseClient) {
    const accounts = getLocalAccounts();
    const account = accounts[cleanUsername];
    if (!account || account.password !== password) {
      showMessage('Anmeldung fehlgeschlagen. Bitte prüfe Spielernamen und Passwort.', true);
      return false;
    }
    currentUser = {
      ...createLocalUser(cleanUsername),
      ...(getLocalProfile() || {})
    };
    currentUser.username = cleanUsername;
    currentUser.bestScores = currentUser.bestScores || {};
    saveLocalProfile(currentUser);
    renderHome();
    return true;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: await usernameToAuthEmail(cleanUsername),
    password
  });

  if (error) throw error;
  await loadProfile(data.session);
  return true;
}

async function logoutUser() {
  if (!supabaseClient) {
    currentUser = null;
    localStorage.removeItem(LOCAL_PROFILE_KEY);
    teacherDashboard.classList.add('hidden');
    showAuth();
    return;
  }

  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    currentUser = null;
    teacherDashboard.classList.add('hidden');
    showAuth();
  } catch (error) {
    console.error('Abmelden fehlgeschlagen:', error);
    showMessage('Abmelden fehlgeschlagen. Bitte versuche es erneut.', true);
    return;
  }
}

function renderSubjects() {
  subjectGrid.innerHTML = '';

  subjects.forEach((subject) => {
    const card = document.createElement('div');
    card.className = 'subject-card';

    const title = document.createElement('h3');
    title.className = 'subject-title';
    title.textContent = `${subject.icon} ${subject.name}`;

    const olympiadButton = document.createElement('button');
    olympiadButton.className = 'subject-button';
    olympiadButton.textContent = '🏅 Einzel-Olympiade';
    olympiadButton.addEventListener('click', () => startQuiz(subject.name));

    const practiceButton = document.createElement('button');
    practiceButton.className = 'practice-button';
    practiceButton.textContent = 'Grundlagen-Training';
    practiceButton.addEventListener('click', () => startQuiz(subject.name, true));

    card.append(title, olympiadButton, practiceButton);
    subjectGrid.appendChild(card);
  });
}

function renderContestSubjects() {
  contestSubject.innerHTML = '';
  subjects.forEach((subject) => {
    const option = document.createElement('option');
    option.value = subject.name;
    option.textContent = `${subject.icon} ${subject.name}`;
    contestSubject.appendChild(option);
  });
}

async function renderLeaderboard() {
  leaderboardList.innerHTML = '';

  if (!supabaseClient) {
    const localProfile = getLocalProfile();
    const bestScores = localProfile?.bestScores || {};
    const entries = Object.entries(bestScores).sort(([, a], [, b]) => Number(b) - Number(a));

    if (!entries.length) {
      const empty = document.createElement('li');
      empty.textContent = 'Noch keine lokalen Olympiade-Ergebnisse. Starte die erste Runde!';
      leaderboardList.appendChild(empty);
      return;
    }

    entries.slice(0, 10).forEach(([subject, score], index) => {
      const entry = document.createElement('li');
      entry.textContent = `${index + 1}. ${subject} · ${score} Punkte`;
      leaderboardList.appendChild(entry);
    });
    return;
  }

  let data;
  try {
    const response = await supabaseClient.rpc('get_leaderboard');
    if (response.error) throw response.error;
    data = response.data;
  } catch (error) {
    console.error('Bestenliste konnte nicht geladen werden:', error);
    const empty = document.createElement('li');
    empty.textContent = 'Die gemeinsame Bestenliste konnte nicht geladen werden. Bitte später erneut versuchen.';
    leaderboardList.appendChild(empty);
    return;
  }

  if (!data || data.length === 0) {
    const empty = document.createElement('li');
    empty.textContent = 'Noch keine Olympiade-Ergebnisse. Starte die erste Runde!';
    leaderboardList.appendChild(empty);
    return;
  }

  data.slice(0, 10).forEach((record, index) => {
    const entry = document.createElement('li');
    entry.textContent = `${index + 1}. ${record.username} · ${record.points} Punkte aus ${record.subjects_played} Fächern`;
    leaderboardList.appendChild(entry);
  });
}

async function renderTeacherResults() {
  if (!supabaseClient) {
    teacherDashboard.classList.add('hidden');
    return;
  }

  teacherDashboard.classList.toggle('hidden', currentUser?.role !== 'teacher');
  if (currentUser?.role !== 'teacher') return;

  teacherMessage.textContent = 'Ergebnisse werden geladen …';
  teacherScores.replaceChildren();
  teacherResults.replaceChildren();
  let leaderboard;
  try {
    const response = await supabaseClient.rpc('get_leaderboard');
    if (response.error) throw response.error;
    leaderboard = response.data || [];
  } catch (error) {
    console.error('Lehrkräfte-Punktestand konnte nicht geladen werden:', error);
    teacherMessage.textContent = 'Punkteübersicht konnte nicht geladen werden. Bitte später erneut versuchen.';
    return;
  }

  leaderboard.forEach((score, index) => {
    const row = document.createElement('tr');
    [index + 1, score.username, score.points, score.subjects_played].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });
    teacherScores.appendChild(row);
  });

  let data;
  try {
    const response = await supabaseClient
      .from('quiz_results')
      .select('subject, score, total, mode, created_at, profiles(username)')
      .order('created_at', { ascending: false })
      .limit(100);
    if (response.error) throw response.error;
    data = response.data;
  } catch (error) {
    console.error('Lehrkräfte-Ergebnisse konnten nicht geladen werden:', error);
    teacherMessage.textContent = 'Ergebnisse konnten nicht geladen werden. Bitte später erneut versuchen.';
    return;
  }

  if (data.length === 0) {
    teacherMessage.textContent = leaderboard.length === 0
      ? 'Noch keine Quiz-Ergebnisse vorhanden.'
      : 'Noch keine Quiz-Ergebnisse vorhanden. Die Punkteübersicht ist aktuell.';
    return;
  }

  data.forEach((result) => {
    const username = Array.isArray(result.profiles)
      ? result.profiles[0]?.username
      : result.profiles?.username;
    const row = document.createElement('tr');
    [
      username || 'Unbekannt',
      result.subject,
      `${result.score}/${result.total}`,
      result.mode === 'practice' ? 'Training' : 'Olympiade',
      new Date(result.created_at).toLocaleString('de-DE')
    ].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });
    teacherResults.appendChild(row);
  });
  teacherMessage.textContent = `Punktestand für ${leaderboard.length} Spielerinnen und Spieler. Die letzten ${data.length} Quiz-Ergebnisse werden angezeigt.`;
}

function startQuiz(subjectName, practice = false) {
  clearTimeout(nextTimer);

  currentSubject = subjectName;
  isTournament = false;
  isPractice = practice;
  questions = [...((practice ? questionPools : olympiadQuestionPools)[subjectName] || [])];
  questions.sort(() => Math.random() - 0.5);
  questions = questions.slice(0, QUESTIONS_PER_QUIZ);

  if (questions.length === 0) {
    alert('Für dieses Fach gibt es noch keine Fragen.');
    return;
  }

  questionIndex = 0;
  score = 0;
  streak = 0;
  quizXpEarned = 0;
  answerLocked = false;

  homeScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  displayQuestion();
}

function startTournament(subjectName, players) {
  clearTimeout(nextTimer);
  currentSubject = subjectName;
  isTournament = true;
  isPractice = false;
  tournamentPlayers = [...players];
  tournamentScores = players.map((player) => ({ player, score: 0 }));
  tournamentAnswers = [];
  activePlayerIndex = 0;
  questions = [...(olympiadQuestionPools[subjectName] || [])];
  questions.sort(() => Math.random() - 0.5);
  questions = questions.slice(0, QUESTIONS_PER_QUIZ);
  questionIndex = 0;
  score = 0;
  streak = 0;
  answerLocked = false;

  homeScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  displayQuestion();
}

function displayQuestion() {
  clearTimeout(nextTimer);
  answerLocked = false;

  const question = questions[questionIndex];

  questionCounter.textContent = isTournament
    ? `${currentSubject} · Frage ${questionIndex + 1} von ${questions.length} · ${tournamentPlayers[activePlayerIndex]} ist dran`
    : `${currentSubject}${isPractice ? ' · Training' : ' · Olympiade'} · Frage ${questionIndex + 1} von ${questions.length}`;
  streakBadge.textContent = isTournament ? `Spieler: ${activePlayerIndex + 1}/${tournamentPlayers.length}` : `Streak: ${streak}`;
  xpBadge.textContent = isTournament ? 'Turnier' : `XP: ${currentUser?.xp || 0}`;
  questionText.textContent = question.question;
  feedback.textContent = '';
  feedback.style.color = '';
  scoreText.textContent = isTournament
    ? `Antworten in dieser Runde: ${tournamentAnswers.length}/${tournamentPlayers.length}`
    : `Punkte: ${score}`;

  answerButtons.innerHTML = '';

  const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer;
    button.addEventListener('click', () => {
      selectAnswer(answer, button);
    });

    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedAnswer, selectedButton) {
  if (answerLocked) return;
  if (isTournament) {
    selectTournamentAnswer(selectedAnswer, selectedButton);
    return;
  }

  answerLocked = true;

  const question = questions[questionIndex];
  const buttons = answerButtons.querySelectorAll('button');

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === question.correct) {
      button.classList.add('correct');
    }
  });

  if (!currentUser) return;

  currentUser.totalAnswered = (currentUser.totalAnswered || 0) + 1;

  if (selectedAnswer === question.correct) {
    score++;
    streak++;
    currentUser.totalCorrect = (currentUser.totalCorrect || 0) + 1;
    selectedButton.classList.add('correct');
    feedback.textContent = question.explanation ? `Richtig! ${question.explanation}` : 'Richtig! 🎉';
    feedback.style.color = '#16835d';
    const earnedXp = 25 + streak * 10;
    currentUser.xp = (currentUser.xp || 0) + earnedXp;
    quizXpEarned += earnedXp;
  } else {
    streak = 0;
    selectedButton.classList.add('wrong');
    feedback.textContent = `Leider falsch. Richtig ist: ${question.correct}. ${question.explanation || ''}`;
    feedback.style.color = '#c54552';
    currentUser.xp = (currentUser.xp || 0) + 5;
    quizXpEarned += 5;
  }

  scoreText.textContent = `Punkte: ${score}`;
  streakBadge.textContent = `Streak: ${streak}`;
  xpBadge.textContent = `XP: ${currentUser.xp}`;
  nextTimer = setTimeout(() => {
    nextQuestion();
  }, AUTO_NEXT_DELAY);
}

function selectTournamentAnswer(selectedAnswer, selectedButton) {
  answerLocked = true;
  const question = questions[questionIndex];
  answerButtons.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });

  tournamentAnswers.push({
    playerIndex: activePlayerIndex,
    answer: selectedAnswer,
    correct: selectedAnswer === question.correct
  });

  if (tournamentAnswers.length < tournamentPlayers.length) {
    feedback.textContent = `Antwort notiert. Bitte gebt den Bildschirm an ${tournamentPlayers[activePlayerIndex + 1]} weiter.`;
    feedback.style.color = '#68758f';
    scoreText.textContent = `Antworten in dieser Runde: ${tournamentAnswers.length}/${tournamentPlayers.length}`;
    nextTimer = setTimeout(() => {
      activePlayerIndex++;
      displayQuestion();
    }, 900);
    return;
  }

  tournamentAnswers.forEach((answer) => {
    if (answer.correct) {
      tournamentScores[answer.playerIndex].score++;
    }
    const button = [...answerButtons.querySelectorAll('button')].find((item) => item.textContent === answer.answer);
    if (button && !answer.correct) {
      button.classList.add('wrong');
    }
  });
  const correctButton = [...answerButtons.querySelectorAll('button')].find((button) => button.textContent === question.correct);
  if (correctButton) correctButton.classList.add('correct');
  feedback.textContent = `Richtige Antwort: ${question.correct}. ${question.explanation || ''}`;
  feedback.style.color = '#16835d';
  scoreText.textContent = tournamentScores.map((entry) => `${entry.player}: ${entry.score}`).join(' · ');
  nextTimer = setTimeout(() => {
    nextQuestion();
  }, AUTO_NEXT_DELAY);
}

function nextQuestion() {
  clearTimeout(nextTimer);
  questionIndex++;
  tournamentAnswers = [];
  activePlayerIndex = 0;

  if (questionIndex >= questions.length) {
    showResults();
  } else {
    displayQuestion();
  }
}

async function showResults() {
  clearTimeout(nextTimer);

  if (!currentUser) return;

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  if (isTournament) {
    const rankedPlayers = [...tournamentScores].sort((a, b) => b.score - a.score);
    const medals = ['🥇 Goldmedaille', '🥈 Silbermedaille', '🥉 Bronzemedaille'];
    const lines = rankedPlayers.map((entry, index) => {
      const rank = index > 0 && entry.score === rankedPlayers[index - 1].score
        ? rankedPlayers.findIndex((player) => player.score === entry.score) + 1
        : index + 1;
      return `${medals[rank - 1] || `${rank}. Platz`}: ${entry.player} – ${entry.score}/${questions.length} Punkte`;
    });
    resultText.textContent = `Die Fach-Olympiade ${currentSubject} ist entschieden!\n${lines.join('\n')}\n\nDie Medaillen sind digitale Auszeichnungen – viel Erfolg bei der nächsten Runde!`;

    return;
  }

  const percentage = Math.round((score / questions.length) * 100);
  resultText.textContent = `Du hast ${score} von ${questions.length} Fragen richtig beantwortet (${percentage} %).`;

  const currentBest = currentUser.bestScores[currentSubject] || 0;
  if (score > currentBest) {
    currentUser.bestScores[currentSubject] = score;
    currentUser.bestScore = Math.max(currentUser.bestScore || 0, score);
  }

  currentUser.xp = (currentUser.xp || 0) + 50 + score * 10;
  quizXpEarned += 50 + score * 10;

  if (!supabaseClient) {
    currentUser.totalAnswered = (currentUser.totalAnswered || 0) + questions.length;
    currentUser.totalCorrect = (currentUser.totalCorrect || 0) + score;
    saveLocalProfile(currentUser);
    playerStats.textContent = `Level ${getLevelFromXp(currentUser.xp)} • XP ${currentUser.xp} • Best Score ${currentUser.bestScore || 0}`;
    void renderLeaderboard();
    renderSavedProgress();
    return;
  }

  try {
    const { error } = await supabaseClient.from('quiz_results').insert({
      user_id: currentUser.user_id,
      subject: currentSubject,
      score,
      total: questions.length,
      mode: isPractice ? 'practice' : 'olympiad',
      xp_earned: quizXpEarned
    });
    if (error) throw error;
  } catch (error) {
    console.error('Quiz-Ergebnis konnte nicht gespeichert werden:', error);
    resultText.textContent += '\n\nDas Ergebnis konnte nicht online gespeichert werden. Bitte prüfe deine Verbindung und versuche es später erneut.';
    return;
  }

  try {
    await loadUserProgress();
  } catch (progressError) {
    console.error('Spielerfortschritt konnte nicht aktualisiert werden:', progressError);
    resultText.textContent += '\nDein Ergebnis wurde gespeichert, aber dein Fortschritt konnte nicht aktualisiert werden. Lade die Seite neu.';
  }
  playerStats.textContent = `Level ${getLevelFromXp(currentUser.xp)} • XP ${currentUser.xp} • Best Score ${currentUser.bestScore || 0}`;
  void renderLeaderboard();
  void renderTeacherResults();
  renderSavedProgress();
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = loginForm.querySelector('button');
  submitButton.disabled = true;
  try {
    await loginUser(loginUsername.value, loginPassword.value);
  } catch (error) {
    console.error('Anmeldung fehlgeschlagen:', error);
    showMessage('Anmeldung fehlgeschlagen. Prüfe Spielernamen und Passwort oder die Supabase-Einrichtung.', true);
  } finally {
    submitButton.disabled = false;
    loginForm.reset();
  }
});

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = registerForm.querySelector('button');
  submitButton.disabled = true;
  try {
    await createAccount(registerUsername.value, registerPassword.value);
  } catch (error) {
    console.error('Konto konnte nicht erstellt werden:', error);
    showMessage('Konto konnte nicht erstellt werden. Der Spielername ist möglicherweise vergeben oder Supabase ist noch nicht vollständig eingerichtet.', true);
  } finally {
    submitButton.disabled = false;
    registerForm.reset();
  }
});

logoutButton.addEventListener('click', () => {
  void logoutUser();
});

document.getElementById('backButton').addEventListener('click', renderHome);

document.getElementById('restartButton').addEventListener('click', () => {
  if (currentSubject) {
    if (isTournament) {
      startTournament(currentSubject, tournamentPlayers);
    } else {
      startQuiz(currentSubject, isPractice);
    }
  }
});

document.getElementById('homeButton').addEventListener('click', renderHome);

contestStartButton.addEventListener('click', () => {
  const players = contestPlayersInput.value.split(',').map((name) => name.trim()).filter(Boolean);
  const normalizedNames = players.map((name) => name.toLocaleLowerCase('de'));

  if (players.length < 2 || players.length > 4) {
    contestMessage.textContent = 'Bitte gib zwei bis vier Namen ein.';
    contestMessage.style.color = '#c54552';
    return;
  }
  if (players.some((name) => name.length > 24)) {
    contestMessage.textContent = 'Jeder Name darf höchstens 24 Zeichen lang sein.';
    contestMessage.style.color = '#c54552';
    return;
  }
  if (new Set(normalizedNames).size !== players.length) {
    contestMessage.textContent = 'Bitte verwende für alle Teilnehmenden unterschiedliche Namen.';
    contestMessage.style.color = '#c54552';
    return;
  }

  contestMessage.textContent = '';
  startTournament(contestSubject.value, players);
});

async function initializeApp() {
  const config = window.FAECHERQUIZ_SUPABASE_CONFIG;

  if (!isSupabaseConfigured()) {
    const localProfile = getLocalProfile();
    if (localProfile) {
      currentUser = localProfile;
      renderHome();
      return;
    }

    showAuth();
    showMessage('GitHub Pages Demo aktiv: Supabase ist nicht konfiguriert. Du kannst lokal spielen, ohne Backend-Setup.', false);
    return;
  }

  try {
    supabaseClient = window.supabase.createClient(config.url, config.anonKey);
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (data.session) {
      await loadProfile(data.session);
    } else {
      showAuth();
    }
  } catch (error) {
    console.error('Fächerquiz konnte nicht gestartet werden:', error);
    showAuth();
    showMessage('Verbindung fehlgeschlagen. Prüfe Supabase-Konfiguration und Datenbankeinrichtung.', true);
  }
}

void initializeApp();
