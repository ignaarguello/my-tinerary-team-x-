import cityReducer from "./cityReducer";
import hotelReducers from "./hotelReducer";

const rootReducer = {
    cityReducer,
    hotels:hotelReducers
}

export default rootReducer