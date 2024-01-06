"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.users = void 0;
exports.users = [
    {
        id: 1,
        name: "Julian Arteaga",
    },
    {
        id: 2,
        name: "Richar Cifuentes",
    },
];
function getUserById(id, callback) {
    const user = exports.users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user);
}
exports.getUserById = getUserById;
