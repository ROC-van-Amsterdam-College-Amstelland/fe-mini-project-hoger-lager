//Hieronder zijn globale variabelen gedeclareerd!
//Globale variabelen zijn beschikbaar in alle functies van een javascript file.
//deze variabele worden later in de code gevuld en is zijn als eerste leeg of 0

//globale variabelen aan voor 3 waardes die je nodig hebt in je spel
var getalOud = 0;
var getalNieuw = 0;
var score = 0;
var player = "";

//globale variabele aan die bijhoud hoevaak iemand een beurt heeft gehad.
var aantalBeurten = 0;
var aantalGames = 0;

//globale array (dit is een variabele met meerdere waardes) aan voor de scores in het scorebord
//deze array wordt later in de code gevuld en is als eerste leeg
var scoreBord=[];
var scoreNaam=[];

//om een spel goed te laten werken moet je de code opdelen in kleine stukjes. 
//Dit doen we door middel van het aanmaken van functies
//Het zou namelijk raar zijn als alle code tegelijk wordt uitgevoerd en
//je kan alleen een code aan een button hangen als deze in een functie staat!


//De init functie wordt gebruikt als de html file geladen wordt en zorgt dat alles gereed staat om het spel te starten!
//de init functie wordt aangeroepen in de body tag.
//dit gebeurd met onload... wat betekent dat hij de javascript functie moet aanroepen als de html file helemaal in de browser is geladen.

function init() {

    //de variabele getalOud wordt gevuld met een random getal tussen en 1 en de 100
    getalOud = Math.round(Math.random() * 100 + 1);
    
    //OPDRACHT: ZORG DAT HET GETAL OP HET SCHERM GETOOND WORDT

    //************TYP JE CODE HIER


    //OPDRACHT: DISABLE MET JAVASCRIPT ALLE BUTTONS IN DE HTML PAGINA BEHALVE START EN SPELUITLEG
    //GEBRUIK EEN VAN DE VOLGENDE METHODES:
    //document.getElementById OF document.getElementsByClassName 
    //CHECK GOED JE HTML PAGINA

    //************TYP JE CODE HIER


    //de score wordt gevuld met de waarde van de variabele score
    document.getElementById("score").innerHTML = score; 
}


//////////////////////////start functie startGame()
//deze functie wordt gebruikt om het spel te starten!
function startGame() {

   //OPDRACHT VRAAG OM DE NAAM VAN DE SPELER MET EEN PROMPT!
   //VUL DE VARIABELE player MET DE INGEVULDE NAAM

   //************TYP JE CODE HIER
        

    //OPDRACHT: GENEREER EEN NIEUW GETAL VIA DE FUNCTIE createNumber()
    createNumber();

    //hieronder worden de buttons hoger, lager en einde enabled (dus klikbaar gemaakt)
    document.getElementsByClassName("keuze")[0].disabled= false;

}


//////////////////////////start functie createNumber()
function createNumber() {
    //de variabele getalNieuw wordt gevuld met een random getal tussen en 1 en de 100
    getalNieuw = Math.round(Math.random() *100 + 1);

    // dit getal moet anders zijn dan het vorige getal. Hiervoor gebruiken we een while loop.
    //een while loop is simpeler dan een for loop en loopt zolang een voorwaarde waar is dus deze code
    //wordt alleen doorlopen als getalNieuw hetzelfde is als getalOud
    
    while (getalNieuw == getalOud) {
        //OPDRACHT: ALS getalNieuw en getalOud DEZELFDE WAARDE HEBBEN MOET getalNieuw EEN NIEUWE WAARDE KRIJGEN
        //HERHAAL HIER DE EERDER GEBRUIKTE MANIER OM DE VARIABELE getalNieuw MET EEN GETAL TUSSEN DE 0 EN 100 TE VULLEN

        //************TYP JE CODE HIER   
    }

    //OPDRACHT: TOON DE WAARDE VAN getalNieuw OP HET SCHERM IN HET ELEMENT MET DE ID getal

    //************TYP JE CODE HIER
    
}

//////////////////////////start functie checkAnswer
function checkAnswer(keuze) {
    //afhankelijk van de keuze die gemaakt is wordt gecontroleerd of deze keuze correct is

    if (keuze == "<") {
        if (getalNieuw < getalOud) {
            //keuze is goed. tel een punt op bij de score
            //OPDRACHT: TEL EEN PUNT OP BIJ DE SCORE

            //************TYP JE CODE HIER
          
        } 
    } else {
           //OPDRACHT: WAT MOET ER GEBEUREN ALS JE OP HOGER KLIKT?
            
           //************TYP JE CODE HIER

    }

    //OPDRACHT: TOON DE SCORE VAN HET HUIDIGE SPEL OP HET SCHERM IN HET ELEMENT MET DE ID score
    
    //************TYP JE CODE HIER

    //hieronder bewaaren we het huidige getalNieuw in getalOud zodat je weer een nieuwe ronde kan spelen!
    getalOud = getalNieuw;

    //Met de code hieronder houden we het aantal keer bij dat iemand gespeeld heeft.
    //we tellen steeds 1 op bij de variabale aantalBeurten door er ++ achter te zetten
    aantalBeurten++;
    
    //OPDRACHT: ALS IEMAND 5 BEURTEN GESPEELD HEEFT MOET HET SPEL EINDIGEN MET endGame()
    //IS IEMAND NIET 5 KEER GEWEEST GENEREER DAN EEN NIEUW GETAL VIA DE FUNCTIE createNumber()
    
    //************TYP JE CODE HIER (tip: je moet een conditie gebruiken)

}

function endGame() {
 // in deze functie komt alles te staan wat er moet gebeuren als het spel is afgelopen

    //houd bij hoeveel games er in totaal gespeeld zijn, een game bestaat uit 5 beurten
    //we tellen steeds 1 op bij de variabale aantalGames door er ++ achter te zetten

    //OPDRACHT VUL DE VARIABELE aantalGames MET HET AANTAL GAMES WAT ER GESPEELD IS

    //************TYP JE CODE HIER (tip: we doen dit ook al een keer met het aantal beurten)


    //OPDRACHT: ZORG DAT HET SCOREBORD GEVULD WORDT MET DE SCORES VAN DE GESPEELDE SPELLEN
    //DOE DIT IN DE FUNCTIE fillScoreBord()

    //************TYP JE CODE HIER

    
    //OPDRACHT RESET DE WAARDES ZODAT ER EEN NIEUW SPEL GESPEELD KAN WORDEN
    //ALLES WAT NODIG IS STAAT IN DE FUNCTIE init() DUS JE HOEFT ALLEEN DEZE FUNCTIE AAN TE ROEPEN

    //************TYP JE CODE HIER

}

function fillScoreBord() {
    //deze functie wordt gebruikt om scores te tonen op het scherm
    //voor deze functie gebruik je de variabelen: scoreBord en scoreNaam
    //deze variabelen zijn array's een array is een variabele die meerdere waardes heeft
    //om de array te vullen met de score van het eerst gespeelde spel gebruik je scoreBord[0] = score;
    //is er al een spel gespeeld dan kun je scoreBord[1] gebruiken etc.
    //vergeet niet dat je al een variabele hebt die bijhoudt hoeveel spellen er gespeeld zijn.
    //vergeet niet ook de array scoreNaam[0] een waarde te geven... welke variabele had ook alweer de naam van de speler?


    //DEZE OPDRACHT KUN JE OP 3 NIVEAU'S MAKEN NIVEAU 1 IS RELATIEF SIMPEL NIVEAU 3 IS COMPLEX
    
    /////////////OPDRACHT NIVAU 1
    //VOEG DE SCORE VAN HET ZOJUIST GESPEELD GAME TOE AAN HET SCOREBORD ZIJN ER AL GAMES GEWEEST
    //CHECK DAN EVEN JE VARIABELE aantalGames OM TE KIJKEN HOEVEEL KEER ER AL EEN GAME GESPEELD IS
    //ZIJN ER AL 5 GAMES GESPEELD BEGIN DAN WEER TE TELLEN BIJ 1 GEBRUIK EVENTUEEL PUSH (ZOEK DIT OP)
    //METHODES WELKE JE VERDER KAN GEBRUIKEN IS EEN FOR LOOP OM DOOR DE ARRAY TE LOPEN.
    //JE HEBT GENOEG AAN aantalGames (als je deze goed gebruikt)

    //************TYP JE CODE HIER


    /////////////OPDRACHT NIVAU 2
    //VOEG DE SCORE VAN HET ZOJUIST GESPEELD GAME TOE AAN HET SCOREBORD ZIJN ER AL GAMES GEWEEST
    //CHECK DAN EVEN JE VARIABELE aantalGames OM TE KIJKEN HOEVEEL KEER ER AL EEN GAME GESPEELD IS
    //ZIJN ER AL 5 GAMES GESPEELD VOEG DAN EEN SCORE TOE AAN HET BEGIN EN VERWIJDER DE LAATSTE
    //GEBRUIK HIERVOOR PUSH AND POP (ZOEK DIT OP)
    //METHODES WELKE JE VERDER MOET GEBRUIKEN IS EEN FOR LOOP OM DOOR DE ARRAY TE LOPEN
    //ZOEK OP HOE JE DE LENGTE VAN EEN ARRAY KAN OPVRAGEN
    //CHECK DEZE REGEL CODE EENS: document.getElementById("game_" + (i+1)).innerHTML= scoreNaam[i] +  " : "  + scoreBord[i];

    //************TYP JE CODE HIER



    /////////////OPDRACHT NIVAU 3
    //VOEG DE SCORE VAN HET ZOJUIST GESPEELD GAME TOE AAN HET SCOREBORD ZIJN ER AL GAMES GEWEEST
    //CHECK DAN EVEN JE VARIABELE aantalGames OM TE KIJKEN HOEVEEL KEER ER AL EEN GAME GESPEELD IS
    //ZIJN ER AL 5 GAMES GESPEELD VERVANG DAN DE LAAGSTE SCORE IN HET RIJTJE MET DE NIEUWE SCORE
    //GEBRUIK HIERVOOR SPLICE AND POP (ZOEK DIT OP)
    //ZET EVENTUEEL DE SCORES OP VOLGORDE VAN HOOG NAAR LAAG GEBRUIK HIERVOOR SORT (ZOEK DIT OP)
    //METHODES WELKE JE VERDER MOET GEBRUIKEN IS EEN FOR LOOP OM DOOR DE ARRAY TE LOPEN EN EEN CONDITIONAL STATEMENT (IF, ELSE)
    //ZOEK OP HOE JE DE LENGTE VAN EEN ARRAY KAN OPVRAGEN
    //CHECK DEZE REGEL CODE EENS: document.getElementById("game_" + (i+1)).innerHTML= scoreNaam[i] +  " : "  + scoreBord[i];

    //************TYP JE CODE HIER

}

function toonUitleg() {
    //verberg het spel en toon de speluitleg

}

function sluitUitleg() {
    //verberg de speluitleg en toon het spel 
}