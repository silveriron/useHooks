import { useEffect } from "react"

const useBeforeLeave = (onBefore: () => void) =>{
    const handler = (e:MouseEvent) => {
        if (e.clientY <= 0) {
            onBefore()
        }
    }
    useEffect(() => {
        document.addEventListener('mouseleave', handler)

        return () => {document.removeEventListener('mouseleave', handler)} 
    }, [])
}

export default useBeforeLeave