import { getAge } from '../plugins/get-age.plugin';
import { getId } from '../plugins/get-id.plugin';
interface BuildMakePersonOptions {
  getId: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate:  string;
}

export const buildMakePerson = ({ getId, getAge } : BuildMakePersonOptions) => { 
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getId(),
      name: name,
      birthdate: birthdate,
    };
  };
}

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