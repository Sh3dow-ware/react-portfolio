import { MdOutlineLightMode as LightMode, MdOutlineDarkMode as DarkMode } from "react-icons/md";
import { IconType } from "react-icons";

interface ThemeProps {
    key: keyof typeof themeData;
    type: IconType;
}

export const themeData = {
    Light: LightMode,
    Dark: DarkMode,
};

export const getThemeData = (key: keyof typeof themeData): ThemeProps => {
    return { key, type: themeData[key] };
};
 // Simplified it to getThemeData, this mean the type-safety can only be Light and Dark.

