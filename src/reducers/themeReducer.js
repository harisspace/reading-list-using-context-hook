export const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_THEME":
            return {...state, isLight: !state.isLight};
        default:
            return state;
    }
}