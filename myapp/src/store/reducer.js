
const initialState = {
    id: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "PHONE":
            var newState = JSON.parse(JSON.stringify(state))
           newState.id=action.id
            
            return newState;

        case "VOICE":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "PEIJIAN":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "LIFE":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;

        default:
            return state
    }
}