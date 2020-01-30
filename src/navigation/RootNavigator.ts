import {createAppContainer, createStackNavigator} from "react-navigation";
import CampaignsList from "../screens/Campaigns/CampaignsList";
import CampaignsDetails from "../screens/Campaigns/CampaignsDetails";

const RootNavigator = createStackNavigator({
    CampaignsList: CampaignsList,
    CampaignsDetails: CampaignsDetails,
}, {
    headerMode: "none",
    swipeEnabled: false,
});
export default createAppContainer(RootNavigator);
