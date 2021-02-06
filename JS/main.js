/*

Buggar och metoder för att felsöka samt rätta till dessa buggar

1.
Bugg: js-koden som skrevs i main.js syntes inte i consolen i webbläsarens developer tools. 

Felsökningar: Redan från start stötte jag på den här buggen. Jag använder i vanliga fall Firefox, men när detta problem uppstod började jag med att byta till Chrome, då detta används både i kursen men även i online-kurser på Youtube. Då detta inte löste problemet började jag googla och testade olika lösningar som föreslogs på stackoverflow. Inget av detta hjälpte heller. Till sist kollade jag igenom index.html för att kolla att jag hade gjort rätt länkningar och såg då att css-filen var rätt länkad genom att den var understryken. Min main.js-länkning var INTE understryken. Jag hade länkat fel helt enkelt (med "större än/mindre än"-pilarna).

Fel: <script> src="js/main.js"</script> 
Rätt: <script src="js/main.js"></script> 

2. 
Jag använder "use strict"; för att köra koden i skarpt läge, så att t ex odefinerade variabler promptar error. 

3.
Jag använder JavaScript Coding Convention enligt w3school:s instruktioner, t ex camelCase vid namngivelse, två spaces istället för tab, etc.

4. 
För att kolla så att definering av variabler, samt events och funktioner fungerar har jag använt console.log() och kollat i webbläsarens console på den förväntade outputen. På så sätt har jag lyckats identifera buggar och gjort förändringar i koden.  

*/

// för att köra koden i skarpt läge
"use strict";

// definera variabler, lägga till event (musklick)
let button = document.getElementById("button").addEventListener("click", addItem);
let main = document.getElementById("main");
let post = document.getElementById("post");

// delete event
//main.addEventListener("click", removeItem);
post.addEventListener("click", removeItem);

// skapa funktion baserat på eventet ovan
function addItem(){
  
  // skapar ny section variabel
  let newPost = document.createElement("section");

  newPost.id = "post";
  
  // skapar ny h1 variabel
  let header = document.createElement("h1");

  // döper texten i h1 till "New Post Title"
  header.innerText = "New Post";

  // Skapar delete-button variabel
  let deleteBtn = document.createElement("button");

  // ger delete-button dess .css-attribut genom att länka klassen med den nyskapade variabeln 
  deleteBtn.className = "deleteBtn";

  // ger deleteBtn dess text, ett X med appendChild-metoden
  deleteBtn.appendChild(document.createTextNode("X"));

  // Länkar ihop variabeln header tsm med variabeln deleteBtn
  header.appendChild(deleteBtn);

  // skapar ny p variabel
  let paragraph = document.createElement("p");

  // döper texten i de två paragraph-variablerna
  paragraph.innerText = "New paragraph. Fill this paragraph with text to your own liking. Write about your own interests, such as sports, TV shows, clothing brands, music, games etc. Or share your everyday life with all your fans out there. The choice is yours. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ...";

  // kallar på funktionen makeEditable
  makeEditable(header);
  makeEditable(paragraph);

  // länkar de olika variablerna med varandra genom metoden appendChild.
  // paragraph, paragraph2 --> header --> newPost --> main
  header.appendChild(paragraph);
  newPost.appendChild(header);
  main.appendChild(newPost); 

  }

  // skapar funktion som gör det möjligt att editera innehållet
  function makeEditable(elem){
    elem.onclick = function(e) {
      elem.contentEditable = true;
      elem.focus();
    };
    elem.onblur = function(e) {
      elem.contentEditable = false;
    };
  }

  // skapar funktion som tar bort ett blogginlägg
  function removeItem(e){
    if(e.target.classList.contains("deleteBtn")){
      let header = e.target.parentElement;
      post.childNodes.remove(header);
    }
  }



  // varje gång man hovrar över ett blogginlägg ska det blir mörkt, ej klart än.
  let box = document.getElementById("hero").addEventListener("mouseenter", runEvent);
  //let numBoxes = box.length;

  function runEvent(){
    document.getElementById("hero").style.backgroundColor = "#2f3136";
  }
   /* for (let i = 0; i < numBoxes; i++){
    box[i].addEventListener("mouseenter", runEvent);
  }*/