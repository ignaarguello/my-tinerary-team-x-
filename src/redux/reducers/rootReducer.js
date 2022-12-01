import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";
import showReducer from "./showReducer";
import signInReducer from "./userReducer";
import reactionReducer from "./reactionReducer";



const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers,
    shows: showReducer,
    signIn: signInReducer,
    reactionReducer,
}

export default rootReducer