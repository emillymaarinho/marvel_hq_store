import { useState, useEffect } from 'react'

const Message = ({ type, msg, clear }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
            clear()
        }, 3000)
        return () => clearTimeout(timer)
    }, [msg, clear])


    return (
        <>
            {visible && (
                <div>{msg}</div>
                // className={`${styles.message} ${styles[type]}`}
            )}
        </>
    )
}

export default Message