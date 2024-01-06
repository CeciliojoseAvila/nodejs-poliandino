"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const animal_service_1 = require("./services/animal.service");
var animal = (0, animal_service_1.findAnimalById)(3);
console.log((_a = animal === null || animal === void 0 ? void 0 : animal.nombre) !== null && _a !== void 0 ? _a : "Animal inexistente!!");
