const axios = require("axios");
const API_BASE = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";

const App = {
  /**
   * Initalize the page and websocket connection
   */
  async init() {
    console.log("Hello")
    console.log("Hi")
    const result = axios
      .get(`${API_BASE}`)
      .then(response => {
        response.data.forEach(item => {
          console.log(item);
          // update the lamp color
        });
      })
      .catch(err => {
        console.log("Unable to connect to the LAMP API");
      });
  }
};

App.init();
