import {StyleSheet} from "react-native";

export class AppStyles {

}

export const StaticStyles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    fullOverlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
});
const appStyles = new AppStyles();
export default appStyles;
