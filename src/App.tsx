import React, {Component} from "react";
import RootNavigator from "./navigation/RootNavigator";
import NavigationService from "./navigation/NavigationService";
import {View} from "react-native";
import {StaticStyles} from "./theme/AppStyles";

class App extends Component {
    render() {
        return (
            <View style={[StaticStyles.flexOne, {backgroundColor: "white"}]}>
                <RootNavigator
                    ref={(r) => {
                        NavigationService.setTopLevelNavigator(r);
                    }}
                />
            </View>);
    }
}

export default App;
