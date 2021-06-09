export function manageFriends(state = {friends: []}, action){
    if (action.type === "ADD_FRIEND"){
        // state.friends.push(action.friend)

        let addFriend = { ...state }
        addFriend.friends.push(action.friend)

        return addFriend
    } else if (action.type === "REMOVE_FRIEND"){
        let newState = state.friends.filter(friend => friend.id !== action.id)
        
        // state = {
        //     friends: newState
        // }

        let newReturn = { friends: newState }
        return newReturn
        
    } else {
        return state
    }
}
