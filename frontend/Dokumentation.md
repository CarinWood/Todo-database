
# Todo Databasprojekt

## Min kodlösning

Jag har valt att arbeta med det vi lärt oss under kursen och den kunskapen jag tagit till mig från kursen i webserverprogrammering 1 samt mina kunskaper i React. Jag har använt mig av vanilla CSS och endast React icons som extra paket. Jag har valt att arbeta med befintliga kunskaper och fokusera på det nya med databaser istället för att blanda in annat jag inte riktigt har koll på för att säkerställa att projektet hinns med inom en rimlig tidsram.

Jag har inte valt att tillämpa Typescript i det här projektet då jag redan börjat koda i Javascript då förslaget kom upp. Jag tyckte att det var bättre att göra färdigt projektet så som det var påbörjat. Jag kommer eventuellt att göra ett likanande projekt med Typescript efteråt för att befästa mina kunskaper inom Typescript.

Jag har valt att från backend alltid skicka med alla dokument som en array med den uppdatering som gjorts. Detta för att jag anser det lättare att skriva ut resultatet i frontend.  

## UX/UI

Jag ville göra en lekfull design den här gången, därför valde jag att jobba med starka färger och en barnslig font. Resultatet blev ungefär som jag tänkt mig. Jag kanske kunde ha använt någonting annat än svart bakgrund, men jag kom inte riktigt på vad jag ville ha annars som gör att upplevelsen inte blir för rörig och för mycket.

Vad gäller användarvänligheten tror jag att jag har lyckats med att göra den enkel för en användare att förstå hur applikationen fungerar. Det är inte svårt att se på sidan vad man ska göra, knapparna är stora och tydliga och talar om vad som händer när man klickar på dem.

## Utvärdering

Min todo-lista fungerar som planerat och projektet gick lätt att genomföra utan några större svårigheter. Det svåraste har varit att utföra operationerna mellan frontend och backend, då det är så många steg för att allt ska fungera. Det har ändå varit ett relativt enkelt projekt då det är precis likadant om projektet för webbserverprogrammering, med skillnaden att man använder en databas istället.

Jag har lärt mig hur databaser fungerar, skillnaden mellan olika databaser, samt lärt mig att använda Mongoose. Jag tror att jag kommer att ha stor användning för kunskaper om databaser i mitt framtida yrkesliv då databaser finns på många olika ställen i allt från produkter på webbshoppar till listor över anställda i ett företag.

## Några exempel på lösningar

Nedan är ett exempel på en ternary operator som har använts för att lägga till klassen linethrough om propertyn "done" är sann. Om den inte är sann ska inte linethrough läggas till som klass. Klassen linethrough gör så att texten får en linje genom sig.

```javascript

<p className={done === 'true' ? ' linethrough task' : 'task'}  >{task}</p>

```

Nedan visas ett exempel på kod i databasen. Den här funktionen innebär att alla todos visas. Genom metoden .find() kan man filtrera vilket innehåll som ska visas. Eftersom vi inte skickar med något filter kommer alla dokument i databasen att visas. Dessa sparas ned i variabeln response som sedan skickas för att kunna användas i frontend. Anropet sker med hjälp av en try-catch. Om koden i try-blocket misslyckas kommer catch-blocket att köras. Catch skickar tillbaka ett felmeddelande.

```javascript

const getAllTodos = async (req, res) => {

    try {
    const response = await TodoModel.find()
    res.status(200).send(response)
    } 
    
    catch(error) 
    {
        res.status(500).send({message: error.message})
    }

}

```

Nedan följer ett exempel på någonting som kallas för short circuit condition. Det innebär att webbläsaren renderar någonting om ett visst villkor är uppfyllt. Detta görs med ett "&&". Om villkoret är sant kommer det som står efter && att renderas. Annars kommer det inte att renderas.

```javascript

 {name.length > 0 && <IoClose className='delete-input-name' onClick={clearName}/>}

 ```

## Problem som uppstått

Ett problem som uppstod under projektets gång var att jag skickade med en sträng istället för ett objekt till databasen. Efter en stunds letande så löstes problemet. Felsökning och testning gjordes både i frontend och backend. När jag väl förstod att funktionen jag anropade förväntade sig ett objekt var det uppenbart vad jag gjorde för fel. Jag tror helt enkelt att jag var så inne på den förra uppgiften då vi arbetade med arrayer och skickade in strängar att jag missade att funktionen tog emot ett objekt.

## Felsökning

De gånger jag har behövt felsöka har jag använt mig av console.log för att ta reda på hur koden körs och var det möjligtvis kan ha gått snett. Jag har också använt mig av metoden att jag har backat och byggt en liten bit i taget och få det att fungera för att sedan utöka koden i små steg.

## Tester

Kvaliteten och funktionaliteten på applikationen har säkerställts genom flertalet tester. Det har gjorts tester på endpoints i backend samt tester av samtliga componenter i frontend med tillfredställande resultat.

## Förslag på förbättringar

Jag kunde kanske ha lagt ned mer tid på designen, färgerna och utformningen. Jag försökte skapa någonting nytt istället för att återanvända den gamla todo-listan från förra projektet för att träna min kreativitet. Dock var det inte så stimulerande att göra en ny utformning på ett projekt som jag redan gjort en gång. Jag hade nog tyckt att det varit roligare att få göra en snygg frontend till ett helt nytt projekt.

## Resultat

Jag är i det stora hela nöjd med resultatet av projektet. Det är en fullt fungerande todo list och koden är strukturerad i komponenter och separata filer. Det sparsamma användargränssnittet gör att det är lätt att hitta fält att skriva i och knappar och gör det lätt för användaren att förstå hur applikationen fungerar.