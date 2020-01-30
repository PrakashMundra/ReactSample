import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from "react-native";
import appTheme, {AppTheme} from "../theme/AppTheme";
import {StaticStyles} from "../theme/AppStyles";
import {Provider} from "react-redux";
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import SplashScreen from "../screens/Splash/SplashScreen";
import App from "../App";
import appColors from "../theme/AppColors";
import Styles from "./Styles";

interface Props {

}

interface State {
    loading: boolean;
}

class AppBoot extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        return (
            <AppTheme.Provider value={appTheme}>
                <View style={StaticStyles.flexOne}>
                    <StatusBar barStyle="light-content" backgroundColor={appColors.statusBar}/>
                    <Provider store={store}>
                        <PersistGate persistor={persistor}
                                     loading={
                                         <View style={StaticStyles.flexOne}>
                                             {this.state.loading ?
                                                 <SplashScreen
                                                     onFinished={() => {
                                                         this.setState({
                                                             loading: false,
                                                         });
                                                     }
                                                     }/> :
                                                 <SafeAreaView style={Styles.safe_area}>
                                                     <App/>
                                                 </SafeAreaView>}
                                         </View>
                                     }
                        >
                            <View style={StaticStyles.flexOne}>
                                {this.state.loading ?
                                    <SplashScreen
                                        onFinished={() => {
                                            this.setState({
                                                loading: false,
                                            });
                                        }
                                        }/> :
                                    <SafeAreaView style={Styles.safe_area}>
                                        <App/>
                                    </SafeAreaView>}
                            </View>
                        </PersistGate>
                    </Provider>
                </View>
            </AppTheme.Provider>
        );
    }
}

export default AppBoot;
