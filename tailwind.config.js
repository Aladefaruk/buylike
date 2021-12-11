module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontSize : {
        "0.5" : ["10px","12px"],
        "1" : ["12px","18px"],
        "1.5" : ["14px","20px"],
        "2" : ["16px","22px"],
        "2.5" : ["18px", "24px"],
        "3" : ["20px","26px"],
        "4" : ["24px","30px"],
        "5" : ["28px","36px"],
        "6" : ["32px","42px"],
        "7" : ["36px","46px"],
        "8" : ["40px","54px"],
        "9" : ["44px","64px"]
      },
      spacing : {
        "16.5" : "72px",
        "98" : "420px",
        "100" : "460px",
        "110" : "500px",
        "wi" :"949px",
        "wii" :"360px",
        "hi" :"454px"
      },
      minWidth : {
        "1/3" : "20%",
        "3/5" : "40%",
        "3/4" : "75%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}