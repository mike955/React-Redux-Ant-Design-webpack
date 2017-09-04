const initialState = {}

const userinfo = (state = initialState, action) => {
    switch (action.type) {
        case 'requestType':
            return {
                type: 'success'
            }
        case 'successType':
            return {
                type: 'suc'
            }
        default:
            return state
    }
}

export default userinfo