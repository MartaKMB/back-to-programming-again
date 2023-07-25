let position = 2;
console.log("inkrementacja | dekrementacja", position, --position, position++, position, position += 10);

let newPosition = 0;
newPosition += position;
console.log("newPosition", newPosition);

console.log("modulo | reszta z dzielenia", 10 % 9);

console.log("konwersja niejawna przy porównaniu", 1 == true, 2 == "2", 2 == true, 1 === true);
console.log("operator róne od: ", 100 != 101, !("coś"), !!(2-2));

console.log("lub ||", true || false, 2 || 5, 0 || "coś");
console.log("i &&", true && false, (3>2 && 5>3));

console.log("--------");

const score = 100;

20 == "20" && score >= 100 ? console.log("operator trójargumentowy wykonuje się") : console.log("warunek nie jest prawdziwy");

let gameResult = 0;
let killerMonster = 11;

gameResult += killerMonster > 10 ? 1 : 0;
console.log("wynik gry: ", gameResult);

const playerName = "Jaropełek";
console.log(`Witaj ${playerName ? playerName : "nieznajomy wojoniku"}`);