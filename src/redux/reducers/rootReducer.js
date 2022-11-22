import cityReducer from "./cityReducer";
import tineraryReducer from "./tineraryReducer";
import hotelReducers from "./hotelReducer";



const rootReducer = {
    cityReducer,
    tineraryReducer,
    hotels:hotelReducers
}

export default rootReducer