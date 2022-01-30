import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  /*Variabelen gjør om text til en array, der mellomrom har
  separert ordene. Får dermed en liste.*/
  const textIntoArray = text.split(" ");
  /*Her har jeg valgt det første ordet i arrayene for å sammenligne
  med ordene etter.*/
  let longestWord = textIntoArray[0];
  /*Denne går igjennom alle ordene og sammneligner lengden med det 
  forrige. Dersom det nye ordet er lengre, vil longestWord bli
  oppdatert.*/
  textIntoArray.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  //Stopper funksjonen og definerer det nye ordet til variabelen.
  return longestWord;
};

//Konsollogger funksjonen longestWord for å se om det lengste ordet vises.
console.log(longestWord());
