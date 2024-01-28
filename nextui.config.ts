import { NextUIPluginConfig } from "@nextui-org/react";

export const nextUIConfig: NextUIPluginConfig = {
    layout: {
        radius: {
            small: "2px", // rounded-small
            medium: "4px", // rounded-medium
            large: "6px", // rounded-large
        },
    },
    themes: {
        light: {
            colors: {
                primary: {
                    "50": "#f0fdfa",
                    "100": "#cdfaf1",
                    "200": "#9cf3e5",
                    "300": "#62e6d5",
                    "400": "#32cfc0",
                    "500": "#17a398",
                    "600": "#119088",
                    "700": "#12736e",
                    "800": "#135c59",
                    "900": "#052e2e",
                    DEFAULT: "#17a398",
                    foreground: "#ffffff",
                },
                secondary: {
                    "50": "#f1f8fa",
                    "100": "#dcecf1",
                    "200": "#bedae3",
                    "300": "#90bed0",
                    "400": "#5b9bb5",
                    "500": "#407f9a",
                    "600": "#386982",
                    "700": "#33576b",
                    "800": "#2f4858",
                    "900": "#192833",
                    DEFAULT: "#407f9a",
                    foreground: "#ffffff",
                },
            },
        },
    },
};
