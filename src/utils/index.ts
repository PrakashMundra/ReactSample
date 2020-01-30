import {Platform} from "react-native";

export function ApiHandler(data) {

}

export function isAndroid() {
    return Platform.OS === "android";
}

export function isIos() {
    return Platform.OS === "ios";
}
