const buildDogs = ({raza, birthdate}) => {
    return {
        id: getIdPropio(),
        raza: raza,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
}