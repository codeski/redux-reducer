


export function managePresents(state = {numberOfPresents: 0}, action){
    if (action.type === "INCREASE"){
        
        state = {
            numberOfPresents: +1
        }

        return state
    } else {
        return state
    }
}
