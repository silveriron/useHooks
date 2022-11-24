import { useEffect, useState } from "react"

const useTitle = (initialTitle: string): React.Dispatch<React.SetStateAction<string>>  => {
    const [title, setTitle] = useState(initialTitle)

    const changeTitle = () => {
        const titleElement = document.querySelector('title')
        if (titleElement instanceof HTMLTitleElement) {
            titleElement.innerText = title
        }
    }

    useEffect(changeTitle, [title])

    return setTitle
}

export default useTitle