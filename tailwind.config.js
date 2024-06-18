/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "white": "#fff",
        "black": "#000",
        "red": "#fe0505",
        "cornsilk": "#fff8e1",
        "gainsboro": "#e6e6e6",
        "darkslategray": "#454545",
        "khaki": {
          "100": "#ffe27a",
          "200": "#fede79"
        },
        "whitesmoke": "#f7f7f7",
        "gray": "#828282",
        "lightcoral": "#ff6078",
        "soft": "#ffc0cb",
        "darkblue": "#2126c0",
        "gray-900": "#02044a",
        "stroke-little": "#c4cee8",
        "gray-500": "#8687a8",
        "lightpink": "#ffb6c1",
        "aliceblue": "#dcf3ff",
        "black-white-white": "#fff",
        "gray": "#828282",
        "black-white-black": "#000",
        "black-3": "rgba(0, 0, 0, 0.3)",
        "creamy-ivory": "#fff8e1",
        "primary-main": "#ffe27a",
        "primary-light": "#fdfaf0",
        "dark-dark-3": "#8f90a6",
        "text-inactive": "#bdc0cc",
        "grey-grey-800": "#424242",
        "grey-grey-400": "#bdbdbd",
        "grey-grey-200": "#eee",
        "line-enable": "#e5e7f0",
        "text-light": "#a0a5b6",
        "text-medium": "#494e50",
        "primary-enable": "#01a2f9",
        "blue-blue-500": "#2196f3",
        "background-enable": "#f5f7fa"
      },
      "spacing": {
        "spacing-xs": "8px",
        "spacing-s": "24px",
        "spacing-m": "48px",
        "spacing-sm": "32px"
      },
      "fontFamily": {
        "body-text": "Inter",
        "norican": "Norican",
        "niconne": "Niconne",
        "montserrat": "Montserrat",
        "body-normal-400": "Inter",
        "subheading": "Inter",
        "small-size-body-regular": "poppin",
        "overline": "Roboto",
        "niconne": "Niconne"
      },
      "borderRadius": {
        "3xs": "10px",
        "8xs-5": "4.5px"
      }
    },
    "fontSize": {
      "45xl": "64px",
      "37xl": "56px",
      "5xl": "24px",
      "base": "16px",
      "xl": "20px",
      "sm": "14px",
      "xsm": "12px",
      "3xs": "10px",
      "2xs": "11px",
      "21xl": "40px",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}
