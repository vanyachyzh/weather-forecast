import { CLICK_SIGN_UP, CLICK_LOG_IN, CLICK_LOGO, CLICK_LOG_IN_BUTTON, CLICK_SIGN_UP_BUTTON, CLICK_LOG_OUT, CLICK_FAVORITES, CLICK_HISTORY, CLICK_BUTTON, PRESS_ENTER, CLICK_BUTTON_ADD_TO_FAVORITES} from "./types"

export const clickSignUpCreator = () =>{
    return {
        type: CLICK_SIGN_UP
    }
}

export const clickLogInCreator = () =>{
    return {
        type: CLICK_LOG_IN
    }
}

export const clickLogoCreator= () =>{
    return {
        type: CLICK_LOGO
    }
}

export const clickSignUpButtonCreator = () =>{
    return {
        type: CLICK_SIGN_UP_BUTTON
    }
}

export const clickLogInButtonCreator = () =>{
    return {
        type: CLICK_LOG_IN_BUTTON
    }
}
export const clickLogOutCreator = () =>{
    return {
        type: CLICK_LOG_OUT
    }
}
export const clickHistoryCreator = () =>{
    return {
        type: CLICK_HISTORY
    }
}
export const clickFavoritesCreator = () =>{
    return {
        type: CLICK_FAVORITES
    }
}
export const clickButtonCreator = () =>{
    return {
        type: CLICK_BUTTON
    }
}
export const pressEnterCreator = () =>{
    return {
        type: PRESS_ENTER
    }
}

export const clickButtonAddToFavoritesCreator = () =>{
    return {
        type: CLICK_BUTTON_ADD_TO_FAVORITES
    }
}

