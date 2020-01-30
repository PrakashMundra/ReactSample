import React, {Component} from "react";
import {Campaign} from "./Campaigns";
import {bindActionCreators} from "redux";
import * as CampaignsActions from "../../actions/CampaignsActions";
import {connect} from "react-redux";
import CampaignItem from "../../components/Campaigns/CampaignItem";
import {AppTheme} from "../../theme/AppTheme";
import {StaticStyles} from "../../theme/AppStyles";
import {FlatList, View} from "react-native";
import {FullLoading} from "../../components/LoadingOverlay";
import appColors from "../../theme/AppColors";

interface Props {
    navigation: any;
    loadCampaigns: () => void;
    isLoading: boolean;
    campaigns: Campaign[];
}

interface State {
    isLoading: boolean;
    campaigns: Campaign[];
}

class CampaignsList extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            campaigns: [],
        };
    }

    componentDidMount() {
        this.props.loadCampaigns();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: nextProps.isLoading,
            campaigns: nextProps.campaigns,
        });
    }

    render() {
        return <AppTheme.Consumer>
            {
                theme => (
                    <View style={StaticStyles.flexOne}>
                        <FlatList
                            style={StaticStyles.flexOne}
                            keyboardShouldPersistTaps={"handled"}
                            data={this.state.campaigns}
                            renderItem={({item, index}) => this.renderCampaign(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => "item_" + index}
                            ItemSeparatorComponent={this.renderDivider}/>
                        {this.state.isLoading && <FullLoading/>}
                    </View>
                )
            }
        </AppTheme.Consumer>;
    }

    private renderCampaign = (item) => {
        return <CampaignItem campaign={item}
                             onItemClick={() => {
                                 this.props.navigation.navigate("CampaignsDetails", {campaign: item});
                             }}/>;
    };

    private renderDivider = () => {
        return <View style={{height: 1, backgroundColor: appColors.statusBar}}/>;
    };
}

function mapStateToProps(storeState, props) {
    const state = storeState.CampaignsData;
    const prop: Partial<Props> = {};
    if (state) {
        prop.isLoading = state.isLoading;
        prop.campaigns = state.campaigns;
    }
    return prop;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CampaignsActions, dispatch);
}

const connectedCampaignsList = connect(mapStateToProps, mapDispatchToProps)(CampaignsList);

export default connectedCampaignsList;
