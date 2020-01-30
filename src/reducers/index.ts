import {combineReducers} from "redux";
import {CampaignsReducer} from "./CampaignsReducer";

let reducers = {
    CampaignsData: CampaignsReducer,
};
const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export type  StoreState = {
    CampaignsData: ReturnType<typeof CampaignsReducer>,
}

export default rootReducer;
