import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";
import showReducer from "./showReducer";
import signInReducer from "./userReducer";
import reactionReducer from "./reactionReducer";
import commentReducer from "./commentReducer";




const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers,
    shows: showReducer,
    signIn: signInReducer,
    reactionReducer,
    comment: commentReducer,
}

export default rootReducer