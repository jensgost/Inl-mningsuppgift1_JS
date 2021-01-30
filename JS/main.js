/*

Buggar och felsökningar

1.
Bugg: js-koden som skrevs i main.js syntes inte i consolen i webbläsarens developer tools. 

Felsökningar: Redan från start stötte jag på den här buggen. Jag använder i vanliga fall Firefox, men när detta problem uppstod började jag med att byta till Chrome, då detta används både i kursen men även i online-kurser på Youtube. Då detta inte löste problemet började jag googla och testade olika lösningar som föreslogs på stackoverflow. Inget av detta hjälpte heller. Till sist kollade jag igenom index.html för att kolla att jag hade gjort rätt länkningar och såg då att css-filen var rätt länkad genom att den var understryken. Min main.js-länkning var INTE understryken. Jag hade länkat fel helt enkelt (med "större än/mindre än"-pilarna).

Fel: <script> src="js/main.js"</script> 
Rätt: <script src="js/main.js"></script> 

*/

