-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 11. Aug 2022 um 15:25
-- Server-Version: 10.1.37-MariaDB
-- PHP-Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `wwm`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `questions`
--

CREATE TABLE `questions` (
  `id` int(128) UNSIGNED NOT NULL,
  `question` varchar(120) NOT NULL,
  `a` varchar(100) NOT NULL,
  `b` varchar(100) NOT NULL,
  `c` varchar(100) NOT NULL,
  `d` varchar(100) NOT NULL,
  `correct` varchar(1) NOT NULL,
  `difficulty` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `questions`
--

INSERT INTO `questions` (`id`, `question`, `a`, `b`, `c`, `d`, `correct`, `difficulty`) VALUES
(1, 'Wenn das Wetter gut ist, wird der Bauer bestimmt den Eber, das Ferkel und ...?', 'einen draufmachen', 'die Nacht durchzechen', 'die Sau rauslassen', 'auf die Kacke hauen', 'c', 1),
(2, 'Wo residieren knapp 150.000 Einwohner?', 'Zuckertempel', 'Pfefferschloss', 'Currypalast', 'Salzburg', 'd', 1),
(3, 'Hans Albers, Karl Lagerfeld und Helmut Schmidt sind allesamt ...?', 'erfolgreiche DÃ¶ner', 'prominente Pommes', 'berÃ¼hmte Hamburger', 'legendÃ¤re WÃ¼rstchen', 'c', 1),
(4, 'Welche GegenstÃ¤nde kÃ¶nnen in den Geschichten des Orient fliegen?', 'HÃ¤user', 'MÃ¼nzen', 'Tische', 'Teppiche', 'd', 2),
(5, 'Was ist korrektes Deutsch?', 'ich stiere', 'sie hengste', 'du bÃ¶cke', 'er eber', 'a', 2),
(6, 'Was ist meist ziemlich viel?', 'stolze Summe', 'selstbewusste Differenz', 'arroganter Quotient', 'hochmÃ¼tiges Produkt', 'a', 2),
(7, 'Welches Tier kann seine Hautfarbe an seine Umgebung anpassen?', 'Ringelnatter', 'ChamÃ¤leon', 'Waldkauz', 'AmeisenbÃ¤r', 'b', 3),
(8, 'Was lÃ¤sst sich in vielen KÃ¼chenschubladen finden?', 'HammerlÃ¶ffel', 'Hobelgabel', 'SÃ¤gemesser', 'Bohrkelle', 'c', 3),
(9, 'Wessen Genesung schnell voranschreitet, der erholt sich...?', '...hinguckends', '...anschauends', '...zusehends', '...glotzends', 'c', 3),
(10, 'Welche Figur wurde von Karl May erschaffen?', 'Asterix', 'Winnetou', 'Pluto', 'Pater Brown', 'b', 4),
(11, 'Was sieht man schon mal auf dem Platz, wenn ein FreistoÃŸ gegen Hertha BSC gepfiffen wird?', 'KaDeWe', 'Palast der Republik', 'Rotes Rathaus', 'Berliner Mauer', 'd', 4),
(12, 'NatÃ¼rlich spielten musikalische Menschen auch im...?', '...Westsaxo Fon', '...Nordklari Nette', '...SÃ¼dpo Saune', '...Ostblock FlÃ¶te', 'd', 4),
(13, 'Wovor fÃ¼rchtet sich der Autobesitzer?', 'Ventiltrinker', 'Kolbenfresser', 'ReifenmÃ¼mmler', 'Schaltungsmampfer', 'b', 5),
(14, 'Wer auf Kosten eines anderen lebt, bis der selber nichts mehr hat, der frisst ihm redensartlich die ...?', 'Butter vom Brot', 'Rosinen aus dem Kuchen', 'Haare vom Kopf', 'Kleider vom Leib', 'c', 5),
(15, 'Wobei gibt es keine geregelten Ã–ffnungszeiten?', 'BaumÃ¤rkte', 'MÃ¶belhÃ¤user', 'TeppichgeschÃ¤fte', 'FensterlÃ¤den', 'd', 5),
(16, 'Wie nennt man die Mitte eines Tornados?', 'Nase', 'Mund', 'Auge', 'Ohr', 'c', 6),
(17, 'Wo befindet sich im menschlichen KÃ¶rper das Kreuzband?', 'Knie', 'Ohr', 'Bizeps', 'WirbelsÃ¤ule', 'a', 6),
(18, 'Was war bereits seit Mai 1969 ein beliebtes Zahlungsmittel im europÃ¤ischen Raum?', 'Euronoten', 'Eurocheques', 'Euroscheine', 'EuromÃ¼nzen', 'b', 6),
(19, 'Was sÃ¤gen Max und Moritz voller TÃ¼cke an, um dem Schneider BÃ¶ck einen Streich zu spielen?', 'Stuhlbein', 'Leiter', 'BrÃ¼cke', 'KrÃ¼ckstock', 'c', 7),
(20, 'Malu Dreyer profitierte Anfang des Jahres von...?', '...Oettingers Sattelstange', '...Veltins Fahrradkette', '...Diebels Vorderreifen', '...Becks RÃ¼cktritt', 'd', 7),
(21, 'In der WeihnachtsbÃ¤ckerei ...?', 'sieht\'s oft aus wie Hexerei', 'geht\'s nicht ohne Sauerei', 'gibt es manche Leckerei', 'endet\'s oft mit Keilerei', 'c', 7),
(22, 'Wen brauchen viele Parasiten zum Ãœberleben?', 'Kneipier', 'Wirt', 'Oberkellner', 'Barkeeper', 'b', 8),
(23, 'Wo grÃ¼ndete Mutter Teresa 1950 ihren Orden \"Missionarinnen der NÃ¤chstenliebe\"?', 'Yokohama', 'S&atildeo Paulo', 'Kalkutta', 'Nairobi', 'c', 8),
(24, 'Woraus besteht in der Regel eine Entourage?', 'Baguette & Rotwein', 'Mascara & Lidschatten', 'Freunde & Bekannte', 'Sofa & Sessel', 'c', 8),
(25, 'Wie heiÃŸt eine religiÃ¶se StÃ¤tte des Judentums in Jerusalem?', 'Trauermauer', 'Klagemauer', 'Tempelmauer', 'Schlossmauer', 'b', 9),
(26, 'Seit dem 1. November 2010 gibt es in Deutschland erstmals eine ...?', 'BundestagsprÃ¤sidentin', 'BundesratsprÃ¤sidentin', 'BundesstaatsprÃ¤sidentin', 'BundesministerprÃ¤sidentin', 'b', 9),
(27, 'Was haben die Hollywood-Stars Gosling, Reynolds und Phillippe gemeinsam?', 'Vorname Ryan', 'Ex-Frau Megan Fox', 'Geburtsjahr 1978', 'irische StaatsbÃ¼rgerschaft', 'a', 9),
(28, 'Ein berÃ¼hmter Hurricane der in New Orleans wÃ¼tete heiÃŸtâ€¦?', '...Melissa', '...Catrina', '...Josephine', '...Mariah', 'b', 10),
(29, 'Was ist fÃ¼r den EnglÃ¤nder ein \"ladybird\"?', 'MarienkÃ¤fer', 'MistkÃ¤fer', 'KartoffelkÃ¤fer', 'VW-KÃ¤fer', 'a', 10),
(30, 'Welche beiden Staaten einigten sich Ende 2012 Ã¼ber die Festsetzung eines Grenzverlaufs?', 'Deutschland & Australien', 'Polen & SÃ¼dafrika', 'DÃ¤nemark & Kanada', 'Ã–sterreich & Japan', 'c', 10),
(31, 'Was ist Red Snapper?', 'Fisch', 'Hunderasse', 'Cocktail', 'Film', 'a', 11),
(32, 'Als was machten sich Rudolf Caracciola, Bernd Rosemeyer, Hermann Lang und Karl Kling einen Namen?', 'Dirigenten', 'Modedesigner', 'LindenstraÃŸe\"-Darsteller', 'Autorennfahrer', 'd', 11),
(33, 'Seine drei Weltmeister-Titel erfuhr sich Sebastian Vettel mit Motoren von...?', 'Ferrari', 'Mercedes', 'Renault', 'Toyota', 'c', 11),
(34, 'Welche Sprache sprach Jesus?', 'HebrÃ¤isch', 'Griechiesch', 'Assyrisch', 'AramÃ¤isch', 'd', 12),
(35, 'Welches grimmsche MÃ¤rchen spielt zu einer Zeit, \"als groÃŸe Teuerung ins Land kam\"?', 'Schneewittchen', 'Aschenputtel', 'RotkÃ¤ppchen', 'HÃ¤nsel und Gretel', 'd', 12),
(36, 'Welcher General vertrieb im 19. Jahrhundert die Mexikaner aus dem heutigen US-Bundesstaat Texas?', 'John Denver', 'Sam Houston', 'Michael Miami', 'Phil A. Delphia', 'b', 12),
(37, 'Was ist Gondwana?', 'Ein MÃ¤dchenname', 'Ein Land', 'Eine Insel', 'Ein Urkontinent', 'd', 13),
(38, 'Was hat geografisch betrachtet genau neun Anrainerstaaten?', 'Victoriasee', 'Ostsee', 'Mittelmeer', 'Atlantik', 'b', 13),
(39, 'Der Text welches dieser berÃ¼hmten Songs ist ganz offensichtlich an eine Prostituierte gerichtet?', '\"Angie\" von den Stones', 'Manilows \"Mandy\"', 'Jacksons \"Billie Jean\"', '\"Roxanne\" von The Police', 'd', 13),
(40, 'Wer gilt als Vater der Medizin?', 'Hippokrates', 'Rene Lennec', 'Thomas Dydenhams', 'Santorio', 'a', 14),
(41, 'Was kann als \"Vorfahr\" des Schmerzmittel-Wirkstoffs ASS bezeichnet werden?', 'LindenblÃ¼ten', 'Mariendisteln', 'Weidenrinde', 'NelkenblÃ¤tter', 'c', 14),
(42, 'Was soll in bestimmten AbstÃ¤nden nach der sogenannten ABCDE-Regel kontrolliert werden?', 'Komposthaufen im Garten', 'Luftdruck der Autoreifen', 'Leberflecken auf der Haut', 'Aktienfonds bei der Bank', 'c', 14),
(43, 'Was ist ein Teil des Gehirns?', 'Temporal-schwamm', 'Temporallappen', 'Tempolumpen', 'Gewschwindigkeitslappen', 'b', 15),
(44, 'Wie heiÃŸt die erste deutsche Briefmarke, die 1849 in Bayern herausgegeben wurde?', 'Schwarzer Einser', 'Roter Zweier', 'Gelber Dreier', 'Blauer Vierer', 'a', 15),
(45, 'Wer sollte sich mit der \"Zwanzig nach vier\"-Stellung auskennen?', 'Fahrlehrer', 'Karatemeister', 'Kellner', 'Landschaftsarchitekt', 'c', 15);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(128) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
