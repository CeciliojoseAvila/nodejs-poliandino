import { findAnimalById } from "./services/animal.service";

var animal = findAnimalById(3);
console.log(animal?.nombre ?? "Animal inexistente!!");
