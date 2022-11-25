import { useRef } from "react";

const useFullScreen = <T,>(): [React.RefObject<T>, ()=>void, ()=>void] => {
    const ref = useRef<T>(null);

    const onFullScreen = () => {
        if (ref.current instanceof HTMLElement) {
            ref.current.requestFullscreen();
        }
    }

    const exitFullScreen = () => {
        document.exitFullscreen()
    }

    return [ref, onFullScreen, exitFullScreen]
};

export default useFullScreen;