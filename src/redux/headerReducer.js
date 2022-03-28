import { CLICK_SIGN_UP_BUTTON, CLICK_LOG_IN_BUTTON, CLICK_LOG_OUT} from "./types"

const initialState = {
    SignUpButton: true,
    LogInButton: true,
    HistoryButton: false,
    FavoritesButton: false,
    LogOutButton: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SIGN_UP_BUTTON:
            return {
                SignUpButton: false,
                LogInButton: false,
                HistoryButton: true,
                FavoritesButton: true,
                LogOutButton: true
            }
        case CLICK_LOG_IN_BUTTON:
            return {
                SignUpButton: false,
                LogInButton: false,
                HistoryButton: true,
                FavoritesButton: true,
                LogOutButton: true
            }
        case CLICK_LOG_OUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default headerReducer;