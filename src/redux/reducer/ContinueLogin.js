import type from "../type";

const initialState = false

const userState = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN: return state = true;
        case type.LOGOUT: return state = false;

        default: return state
    }
}

export default userState