import { MdOutlineLightMode as LightMode, MdOutlineDarkMode  as DarkMode} from "react-icons/md";
import {IconType} from "react-icons";

// Exported ThemeData
export const themeData: { [key: string]: IconType } = {
    "Light": LightMode,
    "Dark": DarkMode
}