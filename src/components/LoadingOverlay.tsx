import {ActivityIndicator, View} from "react-native";
import React from "react";
import {StaticStyles} from "../theme/AppStyles";
import appTheme from "../theme/AppTheme";

interface LoadingOverlayProps {
    color?: string;
}

export function FullLoading(props: LoadingOverlayProps) {
    const color = props.color ? props.color : appTheme.appColors.highlight;
    return <View
        style={[StaticStyles.fullOverlay, StaticStyles.center, {backgroundColor: "rgba(255,255,255,.8)"}]}>
        <ActivityIndicator color={color} size="large"/>
    </View>;
}
