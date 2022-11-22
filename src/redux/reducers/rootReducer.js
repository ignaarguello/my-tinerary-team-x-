import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";
import showReducer from "./showReducer";



const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers,
    shows: showReducer,
}

export default rootReducer