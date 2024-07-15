import { useCallback, useEffect } from "react"
import getBackgroundImage from "../utils/getBackground";

const useBackground = () => {
    const setBackground = useCallback(() => {
        document.body.style.backgroundImage = `url(${getBackgroundImage()})`
    }, []);

    return setBackground;
}

export default useBackground;