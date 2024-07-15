import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

export const getAnswerChampion = async () => {
    try {
        const url = `${API_URL}/lol/champions/start`
        const response = await axios.post(url);
        return { status: response.status, msg: response.data.msg };
    } catch (err) {
        console.log(err);
    }
}

export const tryAnswer = async (input, answer) => {
    try {
        const url = `${API_URL}/lol/champions/try`
        const response = await axios.post(url, {
            input, answer
        });

        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

export const getSimilarChampionListData = async (input) => {
    try {
        const url = `${API_URL}/lol/champions/list?keyword=${input}`;
        const response = await axios.get(url);
        const data = response.data.msg;
        return { status: response.status, data }
    } catch (e) {
        console.log(e);
    }
}