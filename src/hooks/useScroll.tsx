import { useEffect, useState } from "react";

const useScroll = () => {
    const [status, setStatus]= useState({
        x: 0,
        y: 0
    })

    const handler = () => {
        setStatus({x: window.scrollX, y: window.scrollY})
    }

    useEffect(() => {
        window.addEventListener('scroll', handler)

        return () => {
            window.removeEventListener('scroll', handler)

        }
    }, [])
    return status
};

export default useScroll;