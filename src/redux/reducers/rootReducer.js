import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";
import tineraryReducer from "./tineraryReducer";


const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers
}

export default rootReducer