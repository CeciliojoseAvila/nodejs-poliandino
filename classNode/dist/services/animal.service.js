"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAnimalById = void 0;
const animal_1 = require("../data/animal");
const findAnimalById = (id) => {
    return animal_1.animales.find((a) => a.id === id);
};
exports.findAnimalById = findAnimalById;
