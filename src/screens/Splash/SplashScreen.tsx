import React, {Component} from "react";
import {StaticStyles} from "../../theme/AppStyles";
import {StatusBar, Text, View} from "react-native";
import Styles from "./Styles";

interface Prop {
    onFinished: Function;
}

interface State {

}

export default class SplashScreen extends Component<Prop, State> {
    constructor(props) {
        super(props);
        this.state = {};
        setTimeout(() => {
            this.setSplashDone();
        }, 2000);
    }

    render() {
        return (<View style={StaticStyles.flexOne}>
            <StatusBar hidden={true}/>
            <View style={[StaticStyles.flexOne, StaticStyles.center]}>
                <Text style={Styles.splash_title}>{"Spalsh"}</Text>
            </View>
        </View>);
    }

    private setSplashDone() {
        this.props.onFinished();
    }
}
