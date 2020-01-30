import React, {Component} from "react";
import {Campaign} from "../../screens/Campaigns/Campaigns";
import {Text, TouchableOpacity, View} from "react-native";
import Styles from "./Styles";

interface Props {
    onItemClick: () => void;
    campaign: Campaign;
}

interface State {

}

export default class CampaignItem extends Component<Props, State> {
    render() {
        const {campaign} = this.props;
        return (<TouchableOpacity onPress={this.props.onItemClick}>
            <View style={{paddingHorizontal: 15, paddingVertical: 5}}>
                <Text style={Styles.title}>{campaign.name}</Text>
                <Text style={Styles.description}>{campaign.description}</Text>
            </View>
        </TouchableOpacity>);
    }
}
