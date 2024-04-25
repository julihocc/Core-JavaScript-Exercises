AnimatedCounter = ({value}) => {
    let id = useRef(0);

    const handleClick = function () {
        id++
        console.log(id)
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <h1>{value}</h1>
        </div>
    )
}