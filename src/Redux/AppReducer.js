const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const beforeState = {
    projects: []
}

export const AppReducer = (state = beforeState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true,
        }
    }
    if (action.type === 'project_get') {
        return {
            ...state,
            projects: action.payload
        }
    }
    return state;
}
const setInit = () => ({type: INITIALIZED_SUCCESS})