import { useEffect, useRef } from "react"

const useFadeIn = <T,>(duration: number) => {
    const ref = useRef<T>(null)

    const style = {
        opacity: "0"
    }

    useEffect(() => {
        if (ref.current instanceof HTMLElement) {
            ref.current.style.opacity = '1';
            ref.current.style.transition = `opacity ${duration}s`
        }
    },[])


    return {ref: ref, style: style}


}

export default useFadeIn