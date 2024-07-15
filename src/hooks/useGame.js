import { useEffect, useState } from "react"
import { getAnswerChampion, getSimilarChampionListData } from "../apis/api";

const useGame = () => {
    const [answer, setAnswer] = useState(null);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAnswerChampion();
            res.status === 200 ? setAnswer(res.msg) : setError(res.msg);
        }
        fetchData();
    }, []);

    const tryAnswer = async (input, answer) => {
        const res = await tryAnswer(input, answer);
        setCount(count + 1);
    }

    const getSimilarChampionList = async (input) => {
        const res = await getSimilarChampionListData(input);
        if (res.status === 200) return res.data;
    }

    return { answer, error, count, getSimilarChampionList, tryAnswer };
}

export default useGame;