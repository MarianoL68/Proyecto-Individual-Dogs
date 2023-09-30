// // objetos
// let hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(name: string, age: number) {
//     return {name, age}
// }

// const thor = createHero('thor', 1500)

//Type Alias
// type Hero = {
//     name: string
//     age: number
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(name: string, age: number): Hero {
//     return {name, age}
// }

// const thor = createHero('thor', 1500)

// //también podría ser
// type Hero = {
//     name: string
//     age: number
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(hero: Hero): Hero {
//     const {name, age} = hero
//     return {name, age}
// }

// const thor = createHero({name: 'thor', age: 1500})

// //Optional properties

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId // solo podemos asignarle un valor cuando la instancia es creada, luego no podemos modificarlo
//     name: string
//     age: number
//     isActive?: boolean // esta es una propiedad opcional
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(hero: Hero): Hero {
//     const {name, age} = hero
//     return {
//         id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

// const thor = createHero({name: 'thor', age: 1500})
// console.log(thor.isActive) 

//template union type

type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '0033ff' // hexadecimales... este va a dar error
const color2: HexadecimalColor = '#0033ff' // hexadecimales

// //Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetaty' | 'galacty' | 'universal' | 'multiversal' 

// type Hero = {
//     readonly id?: HeroId 
//     name: string
//     age: number
//     isActive?: boolean 
//     powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(hero: Hero): Hero {
//     const {name, age} = hero
//     return {
//         id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

// const thor = createHero({name: 'thor', age: 1500})
// thor.powerScale = 'galacty'

// // Intersection Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetaty' | 'galacty' | 'universal' | 'multiversal' 

// type HeroBasicInfo = {
//     name: string
//     age: number
// }

// type HeroProperties = {
//     readonly id?: HeroId 
//     isActive?: boolean 
//     powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// };

// function createHero(input: HeroBasicInfo): Hero {
//     const {name, age} = input
//     return {
//         id: crypto.randomUUID(), 
//         name, 
//         age, 
//         isActive: true
//     }
// }

// const thor = createHero({name: 'thor', age: 1500})
// thor.powerScale = 'galacty'

// Type Indexing

type HeroProperties = {
    isActive: boolean
    adress: {
        planet: string
        city: string
    }
}

const adressHero: HeroProperties['adress'] = {
    planet: 'Earth',
    city: 'Córdoba'
}

// //Typer from value

// const address = {
//     planet: 'Earth',
//     city: 'Córdoba'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Twitch'
// }

// Type from function return

function createAddress() {
    return {
        planet: 'Tierra',
        city: 'Londres'
    }
}

type Address = ReturnType<typeof createAddress>