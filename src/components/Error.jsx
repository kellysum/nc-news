const Error = (props) => {
    const {message} = props
    return(
        <div className="error">
            <p>An error!</p>
            <p>{message}</p>

        </div>
    )
}

export default Error