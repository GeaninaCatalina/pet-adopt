
export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    }, 
    getAllCats: (state)=> {
        let allCats = state.pets.filter((pet) => {
           return pet.species === 'cat'
        })
        return allCats
    },
    getAllDogs: (state ) => {
        let allDogs =  state.pets.filter((pet) => {
            return pet.species === 'dog'
        })
        return allDogs
    },
    all:(state)=> {
        console.log(state.pets);
    }
}