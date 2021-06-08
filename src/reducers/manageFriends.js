export function manageFriends(state = {friends: []}, action){
    if (action.type === "ADD_FRIEND"){
        state.friends.push(action.friend)
        return state
    } else if (action.type === "REMOVE_FRIEND"){
        let newState = state.friends.filter(friend => friend.id !== action.id)
        
        state = {
            friends: newState
        }
        return state
        
    } else {
        return state
    }
}
