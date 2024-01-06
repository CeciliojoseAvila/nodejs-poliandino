//console.log(process.env);

const { COLOR, COLORTERM, COMPUTERNAME } = process.env;

console.log({ COLOR, COLORTERM, COMPUTERNAME });

const characters = ["Superman", "Hulk", "Spiderman", "Chapulin"];

const [, , , masfuerte] = characters;

console.log(masfuerte);
