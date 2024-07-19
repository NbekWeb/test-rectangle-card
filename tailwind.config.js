module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: "#F4EBFF",
        neutral: "#F4F5F6",
        "basic-light": "#E9EAF9",
        dark: "#06070A",
        "bold-dark": "#0A0C13",
        "light-dark": "#1F222C",
        "bold-dark": "#0A0C13",
        blue: "#2F3EDE",
        "light-blue": "#6570e5",
        red: "#F40D29",
        grey: "#777E90",
        green: "#079A04",
        "light-grey": "#B1B5C3",
      },
      spacing: {
        "40x": "40%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
