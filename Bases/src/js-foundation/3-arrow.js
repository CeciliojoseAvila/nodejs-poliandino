const users = [
    {
        id: 1,
        name: "Julian Arteaga",
    },
    {
        id: 2,
        name: "Richar Cifuentes",
    }
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(null, user) : callback(`User not found with id ${id}`);
}

module.exports = {
    getUserById,
}
