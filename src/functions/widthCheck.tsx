import { useWindowSize } from "react-use";

export const checkWidth = () => {
    const { width } = useWindowSize();
    let value = 0;

    if (width < 640) {
        value = 500;
    } else if (width < 768) {
        value = 600;
    } else if (width >= 768 && width < 1024) {
        value = 750;
    } else if (width >= 1024 && width < 1280) {
        value = 900;
    } else {
        value = 1000;
    }

    return value;
};
