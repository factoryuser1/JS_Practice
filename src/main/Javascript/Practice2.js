let yellow = null;
let superheroes = [
    {
        name: "Spider-man",
        alterEgo:{
            first: "Peter",
            last: "Parker"
        },
        age: 15,
        address: {
            country: "USA",
            city: "New York",
            isValid: true,
            county: {
                countyName: "LA",
                state: "CA"
            }
        },
        favoriteColors: ["blue", "red"]
    },
    {
        name: "Batman",
        alterEgo: {
            first: "Bruce",
            last: "Wayne"
        },
        age: 32,
        address: {
            country: "USA",
            city: "Gotham",
            isValid: false
        },
        favoriteColors:["black", "yellow"]
    }
]
//**********************************************************************//
console.log(superheroes)
console.log(superheroes[0].alterEgo.first)
console.log(superheroes[1].favoriteColors[1])
console.log(superheroes[1].age)
console.log(superheroes[0].address.county.state)