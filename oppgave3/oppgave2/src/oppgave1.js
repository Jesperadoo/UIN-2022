//Array med ID, navn og alder som hører sammen.
const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

//Deklarerte variabler som tilhører HTML-elementer som listen, inputfeltene og knappen.
const userUl = document.getElementById("users");
const searchName = document.getElementById("name");
const filterAge = document.getElementById("age");
const filterBtn = document.getElementById("filter");

/*Denne funksjonen skriver listen med brukere i ul-elementete "users." 
Nuller først ut hele listen for å få en ren start.
Funksjonen legger til Id, Navn og Alder først i listen ved hjelp av 
innerHTML. Deretter kjøres en for-løkke for hver av brukerne i arrayen
users. For hver av brukerne skriver løkken ut brukerens id, navn og 
alder med template literals.*/
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

//Funksjonen tar for seg søkefeltet for navn.
const handleSearch = () => {
  //Her henter den ut verdien brukeren har tastet inn i søkefeltet.
  const searchInput = searchName.value;
  /*Denne if-testen sjekker etter verdien i searchInput, og bruker .find 
  til å finne navnet til brukeren som matcher søket.*/
  if (searchInput) {
    const searchResult = users.find((user) => user.name === searchInput);

    /*Om verdien i searchResult endres, kjøres if-testen. Den lager en ny 
    tabell som viser brukeren som er søkt på.*/
    if (searchResult) {
      createTableUI([searchResult]);
      /*Hvis ikke navnet stemmer vil den skrive uten tekststrengen med template literals.*/
    } else {
      userUl.innerHTML = `Ingen med navnet ${searchInput}`;
    }
    /*Om ikke searchInput blir skrevet i, vil arrayen med users bli vist.*/
  } else {
    createTableUI(users);
  }
};

//Funksjonen tar for seg filterknappen.
const handleFilter = () => {
  //Setter filterValue til å ha verdien av inputfeltet til filterAge.
  const filterValue = filterAge.value;
  //Betingelsene i if-testen er om verdien er et tall.
  if (filterValue && Number(filterValue)) {
    //Om brukerne har en alder høyere enn verdien, blir
    const filterResult = users.filter((user) => user.age > filterValue);

    /*Skriver ut tabell med de med alder over tallet skrevet i filterfeltet, 
    dersom filterResult og lengden er større enn 0.*/
    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
      //Ellers skriver den ut at det ikke finnes noen over den alderen.
    } else {
      userUl.innerHTML = `Ingen med alder over ${filterValue}`;
    }
    //Om ikke filterknappen blir trykket, vil arrayen med users bli vist.
  } else {
    createTableUI(users);
  }
};

/*Eventlisteners som kjører sine tilhørende funksjoner dersom de blir oppdatert.*/
searchName.addEventListener("keyup", handleSearch);
filterBtn.addEventListener("click", handleFilter);
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

//Funksjonen kjører funksjonen createTableUI med parameteren users.
const main = () => {
  createTableUI(users);
};

//Funksjonen main kjøres når siden lastes.
main();
