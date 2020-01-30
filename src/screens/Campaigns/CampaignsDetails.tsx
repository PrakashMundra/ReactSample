import React, {Component} from "react";
import {Text, View} from "react-native";
import {StaticStyles} from "../../theme/AppStyles";
import {Campaign} from "./Campaigns";
import Styles from "./Styles";

interface Props {
    navigation: any;
}

interface State {
    campaign: Campaign;
}

class CampaignsDetails extends Component<Props, State> {
    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {
            campaign: params ? params.campaign : undefined
        };
    }

    render() {
        const {campaign} = this.state;
        return (
            <View style={[StaticStyles.flexOne, {padding: 10}]}>
                <Text style={Styles.title}>{campaign.name}</Text>
                <Text style={Styles.description}>{campaign.description}</Text>
            </View>
        );
    }
}

export default CampaignsDetails;
