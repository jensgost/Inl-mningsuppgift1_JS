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

// skapa funktion baserat på eventet ovan
function addItem(){
  let newPost = document.createElement("section");
  
  let header = document.createElement("h1");

  header.innerText = "testing";

  let deleteBtn = document.createElement("button");

  deleteBtn.className = "deleteBtn";

  deleteBtn.appendChild(document.createTextNode("X"));

  header.appendChild(deleteBtn);

  let paragraph = document.createElement("p");

  let paragraph2 = document.createElement("p");

  paragraph.innerText = "testing2";
  paragraph2.innerText = "testing3";

  newPost.appendChild(header, deleteBtn, paragraph, paragraph2);
  main.appendChild(newPost); 

  }

/*
för att varannan post ska få olika färger

const odd = document.querySelectorAll('    :nth-child(odd)');
const even = document.querySelectorAll('   :nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '    ';
    even[i]style.backgroundColor = '    ';
}
*/