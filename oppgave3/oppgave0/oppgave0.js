// Oppgave 1
/*To variabler som henter informasjon fra p-taggen og button-taggen i
HTML-dokumentet. Disse skal ikke byttes ut, så jeg satt de til
const og ikke let.*/
const textRemove = document.getElementById("remove");
const removeButton = document.getElementById("remove-btn");

/*Jeg har valgt å bruke function og ikke arrow fucntion da jeg ikke
ser fordelen med den, selv om den er mer moderne. Funksjonen setter
verdien i variabelen textRemove til null når den kjøres.*/
function removeText() {
  textRemove.innerHTML = null;
}

/*eventListeneren lytter etter et klikk på knappen med variabelen
removeButton, og kjører funksjonen removeText når den klikkes.*/
removeButton.addEventListener("click", removeText);

// Oppgave 2
/*Setter to variabler (const, de skal ikke endres) som henter verdier
fra ID-ene vi setter de til.*/
const textChange = document.getElementById("change");
const changeButton = document.getElementById("change-btn");

/*Lager en funksjon som skal kjøre når knappen trykkes. Denne endrer
teksten til det jeg setter inn som en ny tekststreng.*/
function changeText() {
  textChange.innerHTML = "Hvorfor trykket du på knappen?";
}

/*eventListener som kjører funksjonen over når knappen trykkes.*/
changeButton.addEventListener("click", changeText);

// Oppgave 3
/*Lager to variabler til inputfeltet og tekstparagrafen som skal
skrives ut under feltet. De henter verdiene fra ID-er i HTML-arket.*/
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

/*Denne arrow-funksjonen kjører når siden lastes. Den fjerner
standardteksten fra HTML-arket ved å sette verdien til "".*/
const removeDefault = () => {
  inputText.innerHTML = "";
};

//Funksjonen kjøres med engang.
removeDefault();

/*Denne arrow-funksjonen legger til hvert knappetrykk fra inputfeltet
til paragrafen under. */
const outputText = (event) => {
  let write = event.key;
  inputText.innerHTML += write;
};

/*Her har jeg en addEventListener som lytter etter når en tast
har blitt sluppet opp i inputfeltet, og sender deretter verdien
til funksjonen over.*/
input.addEventListener("keyup", outputText);

// Oppgave 4
//Denne listen var allerede skrevet, og blir brukt i oppgaven.
const myList = ["item one", "item two", "item three"];

/*Igjen har jeg skrevet to variabler som henter ut elementer fra HTML-elementene 
med ID-er "ul" og knappen "write-list".*/
const ulList = document.getElementById("ul");
const listBtn = document.getElementById("write-list");

/*Denne funksjonen lager listen når knappen blir trykket. Den sier at for 
hvert liste-element i myList, skal  det legges til et li-element i HTML-elementet med ID "ul".*/
const createList = () => {
  const liElements = myList.forEach(
    (listElement) => (ulList.innerHTML += `<li>${listElement}</li>`)
  );
};

/*Her lytter JS etter et knappetrykk på knappen med variabelen listBtn, og kjører
deretter funksjonen createList.*/
listBtn.addEventListener("click", createList);

// Oppgave 5
//Setter variablene til HTML-elementene med ID-er "select", "text", "create" og "placeholder."
const selectFrom = document.getElementById("select");
const text = document.getElementById("text");
const createBtn = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

/*Funksjonen henter verdien fra nedtrekkslisten, og verdien fra tekstfeltet. 
Når knappen trykkes vil det valgte elementet og teksten skrevet bli konkatinert, 
og skrives ut i HTML-elementet med ID-en placeholder.*/
const createElement = () => {
  const htmlList = selectFrom.value;
  const output = text.value;
  placeholder.innerHTML += `<${htmlList}>${output}</${htmlList}>`;
};

//Når man trykker på knappen vil den kjøre funksjonen createElement.
createBtn.addEventListener("click", createElement);

// Oppgave 6
//Variablene henter verdier fra ul-listen og knappen brukt for å fjerne elementer.
const removeLiBtn = document.getElementById("remove-li");
const parentUl = document.getElementById("list");

/*Denne funksjonen kjøres når knappne trykkes. Variabelen lastElement henter 
lastElementeChild fra parentUl-variabelen. if-testen sier at det siste barne-
elementet skal fjernes fra ul-listen.*/
const removeLiFromParent = () => {
  const childLi = parentUl.lastElementChild;
  if (childLi) {
    parentUl.removeChild(childLi);
  }
};

//eventListener som kjører funksjonen removeLiFromParent ved klikk av knappen removeLiBtn.
removeLiBtn.addEventListener("click", removeLiFromParent);

// Oppgave 7
//Deklarerte variabler som henter inputfelt-verdiene og knappen ved siden av.
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

/*Denne funksjonen henter verdien fra variabelen inputName, og sjekker at dersom 
verdiene i HTML-elementet "name" er lenger enn 4 bokstaver, skal knappen disables. 
Ellers skal knappen være mulig å trykke.*/
const disableBtn = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    orderBtn.disabled = true;
  } else {
    orderBtn.disabled = false;
  }
};

//eventListener som lytter etter en sluppet knapp, og kjører deretter funksjonen handleKeyUp.
inputName.addEventListener("keyup", disableBtn);

// Oppgave 8
/*Deklarer variabler som henter verdier for listen med li-elementer, samt
selve li-elementene.*/
const ulParent = document.querySelector(".children");
const liChildren = ulParent.querySelectorAll("li");

//Variabel som tilhører knappen med ID-color.
const colorBtn = document.getElementById("color");

/*Denne funksjonen kjøres når knappen trykkes. Funksjonen lager en array fra 
ulParentChildren, og for hver av liste-elementene skal den sjekke indexverdien 
+ 1 kan deles på 2 uten å få noe i restverdi. Dermed vil partall få fargen grønn, 
mens oddetallene, som får rest vil få fargen rosa.*/
const addBorder = () => {
  Array.from(liChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 5px solid pink; margin-bottom: 10px; padding: 5px;";
    } else {
      li.style = "border: 5px solid green; margin-bottom: 10px; padding: 5px;";
    }
  });
};

/*eventListener som lytter etter klikk på knappen colorBtn. Kjører 
funksjonen addBorder.*/
colorBtn.addEventListener("click", addBorder);
