import { useEffect, useState } from "react";

const useNetwork = (cb: (status: boolean) => void) => {
    const [status, setStatus] = useState(navigator.onLine)

    const handler = () => {
        setStatus(navigator.onLine)
        cb(navigator.onLine)
    }

    useEffect(()=> {
        window.addEventListener('online', handler)
        window.addEventListener('offline', handler)

        return () => {
            window.removeEventListener('online', handler)
            window.removeEventListener('offline', handler)
        }
    }, [])

    return status
};

export default useNetwork;