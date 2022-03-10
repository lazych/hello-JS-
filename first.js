const mandm = prompt(`enter candys number`);
const kids = prompt(`enter kids number`);

const mandmPerKid = Math.floor(mandm / kids);
const restmandm = mandm % kids;

console.log(`Each kid will get: ${mandmPerKid}`);

console.log(`m&m that rest: ${restmandm}`);

alert(`Each kid will get: ${mandmPerKid}`);
alert(`m&m that rest: ${restmandm}`);
