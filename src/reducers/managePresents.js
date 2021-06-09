


export function managePresents(state = {numberOfPresents: 0}, action){
    if (action.type === "INCREASE"){
        
        // state = {
        //     numberOfPresents: +1
        // }

        let presents = {...state, numberOfPresents: state.numberOfPresents +1}

        return presents
    } else {
        return state
    }
}
