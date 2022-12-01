import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";
import showReducer from "./showReducer";
import signInReducer from "./userReducer";
import commentReducer from "./commentReducer";



const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers,
    shows: showReducer,
    signIn: signInReducer,
    comment: commentReducer,
}

export default rootReducer