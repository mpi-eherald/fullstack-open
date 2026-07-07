const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const addClass = (message) => {
        if (message.includes("success")) {
            return "success"
        }

        return "fail"
    }

    console.log(addClass(message))

    return (
        <div className={ addClass(message) }>
            { message }
        </div>
    )
}

export default Notification