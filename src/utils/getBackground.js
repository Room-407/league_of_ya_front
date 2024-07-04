import { IMAGE0, IMAGE1, IMAGE2, IMAGE3 } from "./images";

const BACKGROUND_IMAGES = [IMAGE0, IMAGE1, IMAGE2, IMAGE3];

const getBackgroundImage = () => {
    const randomNumber = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
    console.log(BACKGROUND_IMAGES[randomNumber], randomNumber);

    return BACKGROUND_IMAGES[randomNumber];
}

export default getBackgroundImage;