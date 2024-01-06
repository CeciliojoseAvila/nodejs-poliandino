"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
        };
    };
};
exports.buildMakePerson = buildMakePerson;
/*
function buildDogs({
  raza,
  birthdate,
}: {
  raza: string;
  birthdate: string;
}): Dog {
  return {
    id: getIdPropio(),
    raza: raza,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
}

// Función ficticia para obtener un ID propio
function getIdPropio(): number {
  // Aquí puedes implementar la lógica para obtener un ID
  return 1; // Por ejemplo, un valor constante
}

// Función ficticia para obtener la edad
function getAge(birthdate: string): number {
  // Aquí puedes implementar la lógica para calcular la edad a partir de la fecha de nacimiento
  return 3; // Por ejemplo, un valor constante
}
 */ 
