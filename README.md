# fe-mini-project-hoger-lager
OP2 mini project javascript

# Het spel Hoger - lager

## Spel uitleg
Het spel werkt als volgt: 
- Bij het begin van het spel staat er een getal in beeld. 
- Na het drukken op de knop start komt er een ander willekeurig getal. 
- Is dit getal hoger dan het vorige getal dan klik je op hoger, is het lager dan klik je op lager. Klik je goed, dan krijg je een punt.
- Daarna komt er weer een nieuw getal.

Na 5 keer klikken wordt de eindscore verwerkt in het scorebord en kan je het spel nog een keer spelen

## Userstories
- [ ] 1. als opdrachtgever wil ik dat het spel er uit zoals beschreven in de mockup
- [ ] 2. als speler wil ik bij het begin van het spel alleen op de knoppen start en speluitleg kunnen klikken
- [ ] 3. als speler wil ik bij een gestart spel op hoger, lager en einde kunnen klikken.
- [ ] 4. als speler wil ik bij speluitleg kunnen lezen hoe het spel werkt
- [ ] 5. als speler wil ik een punt als ik goed heb geklikt.
- [ ] 6. als speler wil ik zien hoeveel ik punten ik heb gescoord ten opzichte van anderen na 5 keer spelen
## Extra
- [ ] 7. als speler wil ik de scores van hoog naar laag zien in het scorebord (high-score)
- [ ] 8. als speler moet ik de 5 rondes binnen een bepaalde tijd spelen anders is het game-over.
- [ ] 9. als speler moet ik het spel op pauze kunnen zetten.
- [ ] 10. als speler wil ik de volgende keer dat ik het spel open de oude scores en namen kunnen zien in het scorebord

## Toelichting
### 1. mockup
    Maak de mockup na.
### 2. initialisatie
    bij het begin van het spel moeten allerlei waardes op nul gezet worden en diverse buttons disabled. Pas de functie init aan.
### 3. spel is gestart
    zorg ervoor dat je op die knoppen kunt klikken. kijk naar de functie startGame
    genereer ook het volgende getal kijk naar de functie createNumber.
### 4. speluitleg
    dit mag op een aparte pagina of met een overlay. bij een aparte pagina maak een link naar speluitleg.html met de zelfde header, main en footer. de knop speluitleg op die pagina graat terug naar index.html. 
    met een overlay werk je met z-index en display:none/block
    je kan de functies toonUitleg en sluitUitleg gebruiken hiervoor.
### 5. score
    pas de functie checkAnswer aan. Een stukje is al gegeven. Let op: ook bij hoger moet je de functie aanroepen. Maar met welk teken?
### 6. scorebord
    kijk naar de functie endGame en de functie fillScoreBord in deze functie kun je het scorebord op 3 manieren vullen, niveau 1 is relatief simpel niveau 3 is complexer. 
### 7. extra - sorteer het scorebord
    sorteer het score bord zo dat de hoogste score bovenaan staat en de laagste onderaan
### 8. extra - speel het spel binnen een bepaalde tijd
    maak een nieuwe functie aan die de tijd bijhoudt. Toon de tijd ook op het speelscherm.
### 9. extra - geef de speler de mogelijkheid het spel op pauze te zetten
    maak een nieuwe knop aan waarbij de speler op pauze en play kan drukken waarbij de tijd stop gezet wordt
### 10. extra uitdaging - bewaar het scorebord
    uitdaging: bewaar het scorebord zodat als je de volgende keer het spel speelt de score en de namen van spelers nog zichtbaar zijn. zoek op localStorage, JSON.stringify() and JSON.parse().

