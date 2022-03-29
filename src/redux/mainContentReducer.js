import { CLICK_SIGN_UP, CLICK_LOG_IN, CLICK_LOGO, CLICK_LOG_IN_BUTTON, CLICK_SIGN_UP_BUTTON, CLICK_FAVORITES, CLICK_HISTORY, CLICK_BUTTON, PRESS_ENTER, CLICK_BUTTON_ADD_TO_FAVORITES } from "./types"

const initialState = {
    SignUp: false,
    LogIn: false,
    History: false,
    Favorites: false,
    Result: false,
    Greetings: true
}

const mainContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SIGN_UP:
            return {
                ...initialState,
                SignUp: true,
                Greetings: false
            }
        case CLICK_LOG_IN:
            return {
                ...initialState,
                LogIn: true,
                Greetings: false
            }
        case CLICK_LOGO:
            return {
                ...initialState,
                Result: true,
                Greetings: false
            }
        case CLICK_SIGN_UP_BUTTON:
            return {
                ...initialState,
                Result: true,
                Greetings: false
            }
        case CLICK_LOG_IN_BUTTON:
            return {
                ...initialState,
                Result: true,
                Greetings: false
            }
        case CLICK_FAVORITES:
            return {
                ...initialState,
                Favorites: true,
                Greetings: false
            }
        case CLICK_HISTORY:
            return {
                ...initialState,
                History: true,
                Greetings: false
            }
        case CLICK_BUTTON:
            return {
                ...initialState,
                Result: true,
                Greetings: false
            }
        case PRESS_ENTER:
            return {
                ...initialState,
                Result: true,
                Greetings: false
            }
        case CLICK_BUTTON_ADD_TO_FAVORITES:
            return {
                ...initialState,
                LogIn: true,
                Greetings: false
            }
        default:
            return state
    }
}

export default mainContentReducer;