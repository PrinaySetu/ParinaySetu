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
        "gainsboro": "#e6e6e6",
        "darkslategray": "#454545",
        "khaki": {
          "100": "#ffe27a",
          "200": "#fede79"
        },
        "whitesmoke": "#f7f7f7",
        "gray": "#828282"
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
        "niconne": "Niconne"
      }
    },
    "fontSize": {
      "45xl": "64px",
      "37xl": "56px",
      "5xl": "24px",
      "base": "16px",
      "xl": "20px",
      "21xl": "40px",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}
