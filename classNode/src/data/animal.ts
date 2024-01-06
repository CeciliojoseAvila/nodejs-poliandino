interface animalSelva { 
    id: number,
    nombre: string,
    tipo: string,
    altura: number
}

export const animales: animalSelva[] = [
  {
    id: 1,
    nombre: "Elefante",
    tipo: "Herbivoro",
    altura: 1.92,
  },
  {
    id: 2,
    nombre: "Leon",
    tipo: "Carnivoro",
    altura: 1.01,
  },
  {
    id: 3,
    nombre: "Tigre",
      tipo: "Carnivoro",
    altura: 1.0
  },
];
