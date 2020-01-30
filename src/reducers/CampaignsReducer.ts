import {Campaign} from "../screens/Campaigns/Campaigns";
import * as ActionTypes from "../actions/ActionTypes";

export interface CampaignsDataState {
    isLoading: boolean;
    campaigns: Campaign[];
}

let defaultState: CampaignsDataState = {
    isLoading: false,
    campaigns: [],
};

export function CampaignsReducer(state: CampaignsDataState = defaultState, action): CampaignsDataState {
    switch (action.type) {
        case ActionTypes.CAMPAIGNS_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case ActionTypes.CAMPAIGNS_LOADED:
            return {
                ...state,
                isLoading: false,
                campaigns: action.payload,
            };

        default:
            return state;
    }
}
