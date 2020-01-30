import Api from "../api";
import * as ActionTypes from "./ActionTypes";
import {Campaign, CampaignResponse} from "../screens/Campaigns/Campaigns";

export function loadCampaigns() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CAMPAIGNS_LOADING,
        });
        Api.loadCampaigns().then((response: CampaignResponse) => {
                let data: Campaign[] = [];
                data = data.concat(response.metadata.data);
                data = data.concat(response.metadata.data);
                data = data.concat(response.metadata.data);
                data = data.concat(response.metadata.data);
                data = data.concat(response.metadata.data);
                data = data.concat(response.metadata.data);
                dispatch({
                    type: ActionTypes.CAMPAIGNS_LOADED,
                    payload: data,
                });
            },
        ).catch((reason => {
                dispatch({
                    type: ActionTypes.CAMPAIGNS_LOADED,
                });
            }),
        );
    };
}
