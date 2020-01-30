import React from "react";
import appColors, {AppColors} from "./AppColors";
import appStyles, {AppStyles} from "./AppStyles";

export interface ThemeContext {
    appColors: AppColors;
    appStyles: AppStyles;
}

export class Theme implements ThemeContext {
    appColors = appColors;
    appStyles = appStyles;
}

export const AppThemeDefault: { [key: string]: ThemeContext } = {
    default: {
        appColors: appColors,
        appStyles: appStyles
    },
};

export const AppTheme = React.createContext(AppThemeDefault.default);

const appTheme = new Theme();
export default appTheme;
