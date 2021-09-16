import axios from "axios";

const instance = axios.create({
  baseURL: "https://poke-drip-server.herokuapp.com"
})

export default instance
