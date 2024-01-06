import { animales } from "../data/animal";

export const findAnimalById = (id: number) => {
  return animales.find((a) => a.id === id);
};