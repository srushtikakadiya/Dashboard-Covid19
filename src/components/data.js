import axios from "axios";

export let list=[];



   export const fetchUpdates = () => {
        return new Promise((resolve , reject) => (axios.get("https://api.covid19india.org/data.json").then(response => {
            resolve(response.data);
        })))
    }

