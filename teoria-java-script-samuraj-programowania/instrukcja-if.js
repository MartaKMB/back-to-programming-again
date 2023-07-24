const userName = 'Bogusia';

if (userName !== "") {
    console.log(`Witaj ${userName}!`);
}

const age = 76;

const hasTicket = false;
const moreThen15Years = age >= 16;
const bossFamily = true;

if (hasTicket && moreThen15Years || bossFamily) {
    console.log("Wchodzisz na film!");
} else {
    console.log("Przykro mi, to nie jest film dla Ciebie");
}

if (age <= 9 && typeof age === "number") {
    console.log("jesteś jeszcze dzieckiem");
} else if (age > 9 && age <= 18 && typeof age === "number") {
    console.log("jesteś jeszcze młodziezą");
} else if (age > 18 && age <= 70 && typeof age === "number") {
    console.log("cały świat przed Tobą");
} else {
    console.log(`jesteś dojrzałym człowiekiem lub typ wieku to nie number, a ${typeof age}`);
}

const guestName = "Bolesław";
const guestAge = 12;

if (guestName) {
    if (guestAge > 18) {
        console.log(`Witaj w klubie ${guestName}`);
    } else {
        console.log(`${guestName}, nie mozesz dołączyć, +18`);
    }
} else {
    console.log("nie wiem, jak masz na imię - to pole obowiązkowe");
}