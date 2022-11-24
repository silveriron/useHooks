import { useEffect, useRef } from "react"

const useClick = <Type,> (onClick: () => void) => {
    const element = useRef<Type>(null);

    useEffect(() => {
        if (element.current instanceof HTMLElement) {
            element.current.addEventListener('click', onClick)
        }

        return () => {
            if (element.current instanceof HTMLElement) {
                element.current.removeEventListener('click', onClick)
            }
        }
    }, [])

    return element;
}

export default useClick